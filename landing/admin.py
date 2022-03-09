from django.contrib import admin
from .models import Newuser, post

# Register your models here.
@admin.register(Newuser)
class useradmin(admin.ModelAdmin):
    list_display= ('username', 'first_name', 'last_name', 'profilepic','email', 'address','password')


@admin.register(post)
class post(admin.ModelAdmin):
    list_display= ('title', 'postimg', 'categories', 'summary','content','is_draft')


 
