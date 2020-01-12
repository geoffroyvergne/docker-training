# Knative

## Install

```
kubectl apply --selector knative.dev/crd-install=true \
--filename https://github.com/knative/serving/releases/download/v0.11.0/serving.yaml \
--filename https://github.com/knative/eventing/releases/download/v0.11.0/release.yaml \
--filename https://github.com/knative/serving/releases/download/v0.11.0/monitoring.yaml
   
kubectl apply --filename https://github.com/knative/serving/releases/download/v0.11.0/serving.yaml \
--filename https://github.com/knative/eventing/releases/download/v0.11.0/release.yaml \
--filename https://github.com/knative/serving/releases/download/v0.11.0/monitoring.yaml
```

## Set domain

```./generate-config-domain.sh``` 

## Deploy

```kubectl apply -f backend.yml```

## Test

```
kubectl get ksvc -n demoapp 
kubectl get revision -n demoapp

export INGRESS_HOST=$(kubectl -n istio-system get service istio-ingressgateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')
 
curl -v http://backend.demoapp.$INGRESS_HOST.nip.io/api/backend/todo/
```
