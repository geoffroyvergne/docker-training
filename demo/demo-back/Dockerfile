FROM maven:3-jdk-11-slim as target

WORKDIR /build

COPY pom.xml .
COPY src .

RUN mvn \
	-Dhttp.proxyHost=192.168.33.1 \
	-Dhttp.proxyPort=3128 \
	-Dhttps.proxyHost=192.168.33.1 \
	-Dhttps.proxyPort=3128 \
	package

FROM openjdk:11-jdk-slim

EXPOSE 8080

COPY --from=target /build/target/*.jar /app/demo-back.jar

CMD ["java", "-jar", "/app/demo-back.jar"]