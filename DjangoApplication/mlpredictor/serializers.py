from rest_framework import serializers

class ImageUploadSerializer(serializers.Serializer):
    image = serializers.ImageField()
    name_type = serializers.CharField(max_length=100)