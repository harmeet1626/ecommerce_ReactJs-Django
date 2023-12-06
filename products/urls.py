from django.urls import path
from . import views

urlpatterns = [
    path('allProducts/', views.getProducts.as_view(), name='getProducts'),
    path('categories/', views.allCategories.as_view(), name='categories'),
    path('addToCart/', views.addToCart, name='addToCart'),
    path('getCartDetails/', views.getcartdata.as_view(), name='getCartDetails'),
    path('deleteFromCart/', views.deleteFromCart.as_view(), name='deleteFromCart'),
    path('clearCart/', views.clearCart, name='clearCart'),
]
