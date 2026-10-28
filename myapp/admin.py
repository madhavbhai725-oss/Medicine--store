from django.contrib import admin

from myapp.models import logintbl, medicinetbl, categorytbl, companytbl, suppliertbl, customertbl, profiletbl

# Register your models here.
admin.site.register(logintbl)
admin.site.register(medicinetbl)
admin.site.register(categorytbl)

admin.site.register(suppliertbl)
admin.site.register(customertbl)
admin.site.register(profiletbl)