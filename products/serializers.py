from rest_framework import serializers
from .models import Product, ProductImage, Category,Cart



class imageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'



class ProductSerializer(serializers.ModelSerializer):    
    productimage_set = imageSerializer(many=True, read_only=True)
    category_name = serializers.ReadOnlyField(source="category.category")
    class Meta:
        model = Product
        fields = ('id','title','description','price','discount_percentage','rating', 'stock', 'brand' , 'category_name','thumbnail','category', 'productimage_set')
    def to_representation(self, instance):
        data = super().to_representation(instance)
        image_urls = data['productimage_set']
        image_data = []
        for image in image_urls:
            image_data.append(image['image_url'])
        data['productimage_set'] = image_data
        return data


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
    def to_representation(self, instance):
        return instance.category




class CartSerialiser(serializers.ModelSerializer):
    product_in_cart = ProductSerializer(source='product', read_only=True)
    class Meta:
        model = Cart
        fields = ['id','qty','product_in_cart']

