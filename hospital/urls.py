"""
URL configuration for hospital project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from myapp import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home),
    path('index/',views.index),
    path('medicines/',views.medicines),
    path('categories/',views.categories),
    path('companies/',views.companies),
    path('suppliers/',views.suppliers),
    path('customers/',views.customers),
    path('profile/',views.profile),
    path('changepassword/',views.changepassword),
    path('logincode/',views.logincode),
    path('medicinescode/',views.medicinescode),
    path('categorycode/',views.categorycode),
    path('companycode/',views.companycode),
    path('suppliercode/',views.suppliercode),
    path('customercode/',views.customercode),
    path('profilecode/',views.profilecode),
    path('changepasscode/',views.changepasscode),


]
