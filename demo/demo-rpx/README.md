# Demo RPX

```docker build -t demo-rpx .```

## Push

```docker login```

```docker tag demo-rpx <login>/demo-rpx:latest```

```docker tag demo-rpx <login>/demo-rpx:1.0```

```docker push <login>/demo-rpx:latest```

```docker push <login>/demo-rpx:1.0```