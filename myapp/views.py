from django.shortcuts import render, redirect
from django.http import HttpResponse
from myapp.models import logintbl, medicinetbl, categorytbl, companytbl, suppliertbl, customertbl, profiletbl


# Create your views here.
def home(request):
    return render(request, "login.html")


def index(request):
    return render(request, "index.html")


def medicines(request):
    sesid = request.session.get("user")
    if not sesid:
        return redirect("/")
    data = medicinetbl.objects.all()
    return render(request, "medicines.html", {"fetchdata": data})


def categories(request):
    sesid = request.session.get("user")
    if not sesid:
        return redirect("/")
    data = categorytbl.objects.all()
    return render(request, "categories.html", {"fetchdata": data})


def companies(request):
    sesid = request.session.get("user")
    if not sesid:
        return redirect("/")
    data = companytbl.objects.all()
    return render(request, "companies.html", {"fetchdata": data})


def suppliers(request):
    sesid = request.session.get("user")
    if not sesid:
        return redirect("/")
    data = suppliertbl.objects.all()
    return render(request, "suppliers.html", {"fetchdata": data})


def customers(request):
    sesid = request.session.get("user")
    if not sesid:
        return redirect("/")
    data = customertbl.objects.all()
    return render(request, "customers.html", {"fetchdata": data})


def profile(request):
    return render(request, "profile.html")


def changepassword(request):
    return render(request, "changepassword.html")


def logincode(request):
    a = request.POST.get("email")
    b = request.POST.get("pass")
    data = logintbl.objects.filter(email=a).first()
    if not data:
        return HttpResponse("email id wrong")
    else:
        if data.password == b:
            request.session["user"] = a
            return redirect("/index/")
        else:
            return HttpResponse("wrong password")


def medicinescode(request):
    a = request.POST.get("brandname")
    b = request.POST.get("genericname")
    c = request.POST.get("category")
    d = request.POST.get("pharmacompany")
    e = request.POST.get("batchnumber")
    f = request.POST.get("purchaseprice")
    g = request.POST.get("sellingprice")
    h = request.POST.get("Qty")
    i = request.POST.get("exdate")
    j = request.POST.get("stockstatus")

    medicinetbl.objects.create(brandname=a, genericname=b, category=c, pharmacompany=d, batchnumber=e, purchaseprice=f,
                               sellingprice=g, Qty=h, exdate=i, stockstatus=j)
    return redirect("/medicines/")


def categorycode(request):
    a = request.POST.get("categoryname")
    b = request.POST.get("icon")
    c = request.POST.get("regcount")
    d = request.POST.get("stockvalue")
    e = request.POST.get("notes")

    categorytbl.objects.create(categoryname=a, icon=b, regcount=c, stockvalue=d, notes=e)
    return redirect("/categories/")


def companycode(request):
    a = request.POST.get("companyname")
    b = request.POST.get("partnerstatus")
    c = request.POST.get("contactrep")
    d = request.POST.get("location")
    e = request.POST.get("stockcount")
    f = request.POST.get("emailaddress")
    g = request.POST.get("phone")
    h = request.POST.get("companydesc")

    companytbl.objects.create(companyname=a, partnerstatus=b, contactrep=c, location=d, emailaddress=e, phone=f,
                              companydesc=h)
    return redirect("/companies/")


def suppliercode(request):
    a = request.POST.get("agencyname")
    b = request.POST.get("gstin")
    c = request.POST.get("contactperson")
    d = request.POST.get("email")
    e = request.POST.get("phone")
    f = request.POST.get("totalsupply")
    g = request.POST.get("status")
    h = request.POST.get("officeaddress")

    suppliertbl.objects.create(agencyname=a, gstin=b, contactperson=c, email=d, phone=e, totalsupply=f, status=g,
                               officeaddress=h)
    return redirect("/suppliers/")


def customercode(request):
    a = request.POST.get("fullname")
    b = request.POST.get("gender")
    c = request.POST.get("phone")
    d = request.POST.get("emailaddress")
    e = request.POST.get("ordercount")
    f = request.POST.get("totalspend")
    g = request.POST.get("memberstatus")
    h = request.POST.get("cityaddress")

    customertbl.objects.create(fullname=a, gender=b, phone=c, emailaddress=d, ordercount=e, totalspend=f,
                               memberstatus=g, cityaddress=h)
    return redirect("/customers/")


def profilecode(request):
    a = request.POST.get("firstname")
    b = request.POST.get("lastname")
    c = request.POST.get("role")
    d = request.POST.get("email")
    e = request.POST.get("phone")
    f = request.POST.get("ppic")

    profiletbl.objects.create(firstname=a, lastname=b, role=c, email=d, phone=e, ppic=f)
    return redirect("/profile/")


def changepasscode(request):
    a = request.POST.get("currentpass")
    b = request.POST.get("newpass")
    c = request.POST.get("confpass")
    sesid = request.session.get("user")
    data = logintbl.objects.filter(email=sesid).first()
    if data.password == a:
        if b == c:
            logintbl.objects.filter(email=sesid).update(password=b)
            return redirect("/")
        else:
            return HttpResponse("new & conf pass not match")
    else:
        return HttpResponse("old password wrong")