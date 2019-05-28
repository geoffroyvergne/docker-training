# ------------- BUILD ----------------

FROM maven:3-jdk-11-slim as target

WORKDIR /build

COPY pom.xml .
COPY src .

RUN mvn \
	-Dhttp.proxyHost=fr-proxy.groupinfra.com \
	-Dhttp.proxyPort=3128 \
	-Dhttps.proxyHost=fr-proxy.groupinfra.com \
	-Dhttps.proxyPort=3128 \
	package

#RUN mvn package

# ------------- RUN ----------------

FROM openjdk:11-jdk-slim

EXPOSE 8080

COPY --from=target /build/target/*.jar /app/demo-back.jar

CMD ["java", "-jar", "/app/demo-back.jar"]