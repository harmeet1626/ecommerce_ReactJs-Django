# Generated by Django 4.2.5 on 2023-11-09 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_product_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.CharField(max_length=100),
        ),
    ]
