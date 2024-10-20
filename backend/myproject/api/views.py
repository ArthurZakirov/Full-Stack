from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['POST'])
def add_numbers(request):
    # Extract the numbers from the POST request
    a = request.data.get('a')
    b = request.data.get('b')

    # Validate that both numbers are provided
    if a is None or b is None:
        return Response({'error': 'Both numbers are required'}, status=400)
    
    try:
        result = int(a) + int(b)  # Add the numbers
        return Response({'result': result})
    except ValueError:
        return Response({'error': 'Invalid numbers'}, status=400)

