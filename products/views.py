from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Cart, Category
from users.models import User
from .serializers import ProductSerializer, CategorySerializer, CartSerialiser
from django.http import JsonResponse
from rest_framework.pagination import PageNumberPagination
from rest_framework.generics import ListAPIView
from django.views import View

from django.views.decorators.csrf import csrf_exempt
import json

class ProductPagination(PageNumberPagination):
    page_size = 9  # Set the number of items per page
    page_size_query_param = 'page_size'
    max_page_size = 100  # Set the maximum page size



class getProducts(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = ProductPagination

    def get_queryset(self):
        category = self.request.query_params.get('category') 
        search = self.request.query_params.get('search') 
        product_id = self.request.query_params.get('product_id')
        if category:
            queryset = Product.objects.filter(category__category = category)
        elif search:
            queryset = Product.objects.filter(title__icontains=search)
        elif product_id:
            queryset = Product.objects.filter(id=product_id)
        else:
            queryset = Product.objects.all()      
        return queryset


class allCategories(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer



@csrf_exempt
def addToCart(request):
    print('add to cart')
    data = json.loads(request.body)
    userid = data['user_id']
    print(userid,'userid')
    productid = data['product_id']
    print(productid,"productid")
    quantity = data['quantity']
    print(quantity,'qty')
    userIstance = User.objects.get(id = userid)
    alreadyInCart = Cart.objects.filter(user=userid,product=productid)
    if not alreadyInCart:
        productInstance = Product.objects.get(id = productid)
        cartQueryset = Cart(product=productInstance, user=userIstance, qty = int(quantity))
        cartQueryset.save()
    else:
        for cart_item in alreadyInCart:
            cart_item.qty += int(quantity)
            cart_item.save()

    res = {
        'res': 'item added to cart'
    }
    return JsonResponse(res, safe=False)

@csrf_exempt
def clearCart(request):
    data = json.loads(request.body)
    userid = data['user_id']
    queryset = Cart.objects.filter(user = userid)
    queryset.delete()
    return JsonResponse('Cart cleared', safe=False)

class getcartdata(View):
    def get(self, request, *args, **kwargs):
        user_id = request.GET.get('userId')

        if user_id is not None:
            queryset = Cart.objects.filter(user=user_id)
            # Serialize the queryset using your serializer
            serializer = CartSerialiser(queryset, many=True)
            return JsonResponse({'data': serializer.data})
        else:
            return JsonResponse({'error': 'userId parameter is required'}, status=400)
    

class deleteFromCart(ListAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerialiser
    def get_queryset(self):
        data = json.loads(self.request.body)
        cartId = data['cartId']
        queryset = Cart.objects.get(id = cartId)
        # if not queryset:
        queryset.delete()

        return JsonResponse("Item removed from cart.", safe=False)



