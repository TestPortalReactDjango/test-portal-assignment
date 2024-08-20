FROM python:3.11-slim
WORKDIR /django_backend

RUN apt-get update && apt-get install -y \
    python3-dev \
    libpq-dev \
    gcc \
    pkg-config \
    libcairo2-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY . .

CMD ["gunicorn", "mysite.wsgi", "--bind", "0.0.0.0:8000"]
