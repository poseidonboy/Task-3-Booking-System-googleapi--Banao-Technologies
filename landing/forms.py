from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from .models import Newuser, post
from django import forms


class login_form(AuthenticationForm):
    username=forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    password=forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))


GEEKS_CHOICES =(
    ("1", "Doctor"),
    ("2", "Patient"),
)
class signup_form(UserCreationForm): 
    password1=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    password2=forms.CharField(widget=forms.PasswordInput(attrs={'class':'form-control'}))
    Group = [('Doctor', 'Doctor'), ('Patient', 'Patient'),]
    groups = forms.ChoiceField(choices=Group)
    
    class Meta:
        model = Newuser
        fields = ['username', 'first_name', 'last_name', 'profilepic', 'email','address']
        labels={'first_name': 'First Name','last_name': 'Last Name','profilepic': 'Profile Picture ','email':'Email ID', 'confrompass':'Confirm Password', "usertype": 'User type  '}
        widgets={'username':forms.TextInput(attrs={'class':'form-control'}),
        'first_name':forms.TextInput(attrs={'class':'form-control'}),
        'last_name':forms.TextInput(attrs={'class':'form-control'}),
        'email':forms.EmailInput(attrs={'class':'form-control'}),
        'address':forms.TextInput(attrs={'class':'form-control'}),
        }


class post_form(forms.ModelForm):
   class Meta:
        model= post
        fields=['title', 'postimg', 'categories','summary', 'content','is_draft', ]
        labels={'title':'Post Title', 'postimg':'Choose Post Image ', 'is_draft':'Draft Post  ','author':''}
        widgets={'title':forms.TextInput(attrs={'class':'form-control', 'id':'title'}),
        'categories':forms.Select(attrs={'id':'choicecat'}),
        'summary':forms.Textarea(attrs={'class':'form-control','rows':'3', 'cols':'37', 'id':'summary'}),
        'content':forms.Textarea(attrs={'class':'form-control','rows':'3', 'cols':'37', 'id':'content'}),
        
        }


class bookingform(forms.Form):
    dname=forms.CharField(widget=forms.HiddenInput())
    required_speciality=forms.CharField(widget=forms.TextInput(attrs={'class':'form-control', 'id':'id_sp'}))
    date_of_appointment=forms.DateField(widget=forms.TextInput(attrs={'type':'date', 'id':'id_doa'}))
    time_of_appointment=forms.TimeField(widget=forms.TextInput(attrs={'type':'time', 'id':'id_toa'}))
