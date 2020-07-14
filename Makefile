IMAGE_NAME=hospital
build:
   docker build -t $(IMAGE_NAME) .

run:
   docker run $(IMAGE_NAME)