# RsaSignature2017

[![Build Status](https://travis-ci.org/transmute-industries/RsaSignature2017.svg?branch=master)](https://travis-ci.org/transmute-industries/RsaSignature2017) [![codecov](https://codecov.io/gh/transmute-industries/RsaSignature2017/branch/master/graph/badge.svg)](https://codecov.io/gh/transmute-industries/RsaSignature2017)

A minimal implementation of RsaSignature2017 in JavaScript.

- [Works with Mastodon](https://github.com/tootsuite/mastodon/blob/cabdbb7f9c1df8007749d07a2e186bb3ad35f62b/app/lib/activitypub/linked_data_signature.rb#L37).

#### Example

```
{
  "@context": "https://w3id.org/identity/v1",
  "givenName": "Alice",
  "signature": {
    "type": "RsaSignature2017",
    "creator": "https://example.com/users/alice#main-key",
    "created": "2018-12-22T18:23:12Z",
    "signatureValue": "dO9UeEBI5Lab4hlAkv8jpSCBPP49/LGx+7wonkhYOeC1hzRLBSMCtUPrNEseugtsu4m7cv7ZOSKiyN/d+b9eEyK/iFKkAi2oEunQOoLsX4hsm451VakuH4eFMOJh2G77+yUwuebb74zKfKFeE/KR+yh7pxkr2LuFzNYTfSTpQaMmVE1LUy5XOMIsCWIE3LL4qZAdP5cLqCdPRgqCHsSafqL0EOHunNTzE/bTrM38ptuMEL2zGQTFif3NCtNzW1SvKvZSel03KQ6uNUZbdDD8i9IYbzJrmjzYz5owY/ospVB6f3KoS0TRgYFU25EIp/a8PWHz7uNSzJkBUnT514gRvA=="
   }
}
```

#### W3C Links

- https://github.com/w3c-ccg/ld-cryptosuite-registry
- https://w3c-dvcg.github.io/ld-signatures

