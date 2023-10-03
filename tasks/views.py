from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    def create(self, request, *args, **kwargs):
        response = super(TaskView, self).create(request, *args, **kwargs)
        # response.data has everything specified in your serializer; it seems fine to clobber it
        # alternatively, you could add to it: response.data['foo']='baz'
        response.data = response.data
        return response