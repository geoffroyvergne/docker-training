FROM openjdk:11-jdk-slim

EXPOSE 8080

COPY /build/target/*.jar /app/demo-back.jar

CMD ["java", "-jar", "/app/demo-back.jar"]