FROM openjdk:11

ARG JAR_FILE_PATH
COPY ${JAR_FILE_PATH} app.jar
EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/app.jar" ]