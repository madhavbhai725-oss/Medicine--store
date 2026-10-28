from django.db import models

# Create your models here.
class logintbl(models.Model):
    id = models.AutoField(primary_key=True)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    def __str__(self):
        return f"{self.id},{self.email},{self.password}"

class medicinetbl(models.Model):
    id = models.AutoField(primary_key=True)
    brandname= models.CharField(max_length=100)
    genericname= models.CharField(max_length=100)
    category= models.CharField(max_length=100)
    pharmacompany=models.CharField(max_length=100)
    batchnumber= models.CharField(max_length=100)
    purchaseprice= models.CharField(max_length=100)
    sellingprice= models.CharField(max_length=100)
    Qty= models.CharField(max_length=100)
    exdate= models.CharField(max_length=100)
    stockstatus= models.CharField(max_length=100)

    def __str__(self):
        return f"{self.id},{self.brandname}"

class categorytbl(models.Model):
    id = models.AutoField(primary_key=True)
    categoryname= models.CharField(max_length=100)
    icon= models.CharField(max_length=100)
    regcount= models.CharField(max_length=100)
    stockvalue= models.CharField(max_length=100)
    notes= models.CharField(max_length=100)
    def __str__(self):
        return f"{self.id},{self.categoryname}"
class companytbl(models.Model):
    id = models.AutoField(primary_key=True)
    companyname= models.CharField(max_length=100)
    partnerstatus= models.CharField(max_length=100)
    contactrep= models.CharField(max_length=100)
    location= models.CharField(max_length=100)
    stockcount= models.CharField(max_length=100)
    emailaddress= models.CharField(max_length=100)
    phone= models.CharField(max_length=100)
    companydesc= models.CharField(max_length=100)

    def __str__(self):
        return f"{self.id},{self.companyname}"
class suppliertbl(models.Model):
    id = models.AutoField(primary_key=True)
    agencyname= models.CharField(max_length=100)
    gstin= models.CharField(max_length=100)
    contactperson= models.CharField(max_length=100)
    email= models.CharField(max_length=100)
    phone= models.CharField(max_length=100)
    totalsupply= models.CharField(max_length=100)
    status= models.CharField(max_length=100)
    officeaddress= models.CharField(max_length=100)

    def __str__(self):
        return f"{self.id},{self.agencyname}"

class customertbl(models.Model):
    id = models.AutoField(primary_key=True)
    fullname=models.CharField(max_length=100)
    gender= models.CharField(max_length=100)
    phone= models.CharField(max_length=100)
    emailaddress= models.CharField(max_length=100)
    ordercount= models.CharField(max_length=100)
    totalspend= models.CharField(max_length=100)
    memberstatus= models.CharField(max_length=100)
    cityaddress= models.CharField(max_length=100)

    def __str__(self):
        return f"{self.id},{self.fullname}"

class profiletbl(models.Model):
    id = models.AutoField(primary_key=True)
    firstname= models.CharField(max_length=100)
    lastname= models.CharField(max_length=100)
    role= models.CharField(max_length=100)
    email= models.CharField(max_length=100)
    phone= models.CharField(max_length=100)
    ppic= models.FileField()

    def __str__(self):
        return f"{self.id},{self.firstname}"
