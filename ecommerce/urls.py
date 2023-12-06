from django.contrib import admin
from django.urls import path, include
from users import urls as users_urls
from products import urls as products_url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(users_urls)),
    path('', include(products_url))
]
