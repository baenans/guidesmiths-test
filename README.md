# GuideSmiths Coding Test

### Development

You can on development mode using:

```
docker-compose -f infra/docker-compose.dev.yml up
```

### Production

Alternatively, for production mode use:

```
docker-compose -f infra/docker-compose.prod.yml up
```

## Improvements

There are a few items that I didn't implement upon the agreed deadline:

- Testing: I reviewed a few articles about unit tests (jest+enzime) and end-to-end tests (jest+puppetteer),
- Errors should be reflected in the UI: currently, errors in the Phones component are displayed in the console, it would be relatively easy to reflect its message in the UI (and display a "refresh" button, i.e.)
- Alternative k8s deployment config
