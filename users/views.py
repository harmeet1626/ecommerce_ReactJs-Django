from django.shortcuts import render
from .models import User
import json
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import userSerializer

    
@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Generate JWT tokens
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)

            # Include the tokens in the response
            response_data = {
                'message': 'Login successful',
                'access_token': access_token,
                'refresh_token': refresh_token,
                'user_id': user.id
            }
            return JsonResponse(response_data)
        else:
            return JsonResponse({'message': 'Login failed'}, status=401)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)



@csrf_exempt
def getUserDetails(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('id')
        
        # Query the User model to get user details by id
        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            return JsonResponse({'message': 'User not found'}, status=404)

        serialized = userSerializer(user)

        return JsonResponse(serialized.data)
    else:
        return JsonResponse({'message': 'Method not allowed'}, status=405)
