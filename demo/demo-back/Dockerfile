FROM adoptopenjdk/openjdk11:alpine-jre

EXPOSE 8080

COPY target/*.jar /app/demo-back.jar

CMD ["java", "-jar", "/app/demo-back.jar"]