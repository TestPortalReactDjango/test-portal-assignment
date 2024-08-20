FROM python:3.10.14-bookworm
ENV PYTHONUNBUFFERED=1
WORKDIR /django_backend
COPY ./requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD [ "python3","manage.py","runserver" ]