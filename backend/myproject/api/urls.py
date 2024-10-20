from django.urls import path
from .views import add_numbers
from django.views.generic import RedirectView


urlpatterns = [
    path('add/', add_numbers, name='add-numbers'),
    path('', RedirectView.as_view(url='add/'))
]
