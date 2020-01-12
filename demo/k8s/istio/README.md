# Istio

## Enable Ingress

```minikube tunnel```

## Install Istio

```
bin/istioctl manifest apply --set profile=demo
bin/istioctl manifest apply
```

## Enable injection

```kubectl label namespace demoapp istio-injection=enabled```

## Check services

```kubectl get svc -n istio-system```

