# tableau-connector
Tableau Rockset Connector

This directory contains the Tableau Rockset Connector.

The connector is built with the Tableau Connector SDK. The connector provides a simplified connection dialogue with Tableau. It also configures Tableau to use the appropriate dialect while talking to Rockset.

## Building

To build a new version of the connector, use [earthly](https://earthly.dev)

```
earthly +build
```

This produces the signed file in `build/rockset.taco`

### Signing

To sign the `.taco` file you need the `rockset.jks` Java KeyStore file and the keystore password set to the environment variable `STOREPASS`.

```
earthly --secret STOREPASS +sign
```

This produces the signed connector file in `signed/rockset.taco`
