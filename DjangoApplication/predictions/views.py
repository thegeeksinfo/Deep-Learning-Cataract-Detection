from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from .ml_model import predict

class PredictView(APIView):
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, *args, **kwargs):
        if 'file' not in request.data:
            return Response({"error": "No file uploaded"}, status=400)
        file = request.data['file']
        prediction = predict(file)
        return Response({"prediction": prediction})
