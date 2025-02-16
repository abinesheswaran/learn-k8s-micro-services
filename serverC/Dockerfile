FROM python:alpine

WORKDIR /app

RUN pip install flask flask_cors requests

COPY app.py .

EXPOSE 3003

ENTRYPOINT ["python", "app.py"]