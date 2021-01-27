from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .serializers import ArticleSerializer
from rest_framework.parsers import JSONParser

from .models import Article

def article_list(request):

    if request.method == 'GET':
        articles = Article.objects.all()
        serializer = ArticleSerializer(article, many=True)
        return JsonResponse(serializer.data, safe=False)

    if request.method == 'POST':
        data.JSONParser().parse(request)
        serializer = ArticleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)



