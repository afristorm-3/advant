from django.urls import path
from .views import (
   
    HomeView,
    ItemView,
    ItemDetailView,
    OrderSummaryView,
    checkout,
    add_to_cart,
    remove_from_cart,
    remove_single_item_from_cart
    )

app_name = 'store'


urlpatterns =[
    
    path('', HomeView.as_view(), name='home'),
   
    path('item_lists/', ItemView.as_view(), name='item-lists'),
    path('order-summary/', OrderSummaryView.as_view(), name='order-summary'),
    path('product/<slug>/', ItemDetailView.as_view(), name='product'),
    path('checkout/', checkout, name='checkout'),
    path('add-to-cart/<slug>/', add_to_cart, name='add-to-cart'),
    path('remove-from-cart/<slug>/', remove_from_cart, name='remove-from-cart'),
    path('remove-single-item-from-cart/<slug>/', remove_single_item_from_cart, name='remove-single-item-from-cart')


]