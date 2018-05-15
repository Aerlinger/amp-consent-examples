# AMP consent sandbox

```json

<amp-geo layout="nodisplay"><script type="application/json">
  {
    "ISOCountryGroups": {
      "eu_users": [
        "fr",
        "gb",
        "is",
      ]
    }
  }
</script>
</amp-geo>

<amp-consent id="gdprConsent" layout="nodisplay">
  <script type="application/json">
    {
      "consents": {
        "gdpr_consent": {
          "promptIfUnknownForGeoGroup": "eu_user",   /* simple misconfig, consent flow defaults to not showing */
        }
      }
    }
  </script>
</amp-consent>

```