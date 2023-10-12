from django.db import models

class Car(models.Model):
    id = models.AutoField(primary_key=True)
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    image_path = models.CharField(max_length=100, default='assets/default_image.jpg')
    year = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    configuration = models.JSONField()  
    description = models.TextField(blank=True, null=True)
    variants = models.JSONField(default=list)  # Use a JSONField to store variants as JSON
    car_colors = models.JSONField(default=list)  # Use a JSONField to store variants as JSON

    def __str__(self):
        return f"{self.year} {self.make} {self.model}"
