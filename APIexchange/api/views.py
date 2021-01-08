from django.shortcuts import render, HttpResponse

def Index(request):
    return HttpResponse('this is the way')
