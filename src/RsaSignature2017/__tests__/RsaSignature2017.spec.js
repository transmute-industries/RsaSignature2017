// leave for debug
// const generateRSAKeypair = require('generate-rsa-keypair');

const { sign, verify } = require("../index");

const { linkedData, rsaKeyPair } = require("./__fixtures__");

describe("RsaSignature2017", () => {
  beforeAll(async () => {
    // leave for debug
    // keypair = generateRSAKeypair();
    // console.log(keypair);
  });
  it("supports sign and verify", async () => {
    const signedLinkedData = await sign({
      data: linkedData,
      creator: "http://localhost:1337/user/did:example:123#main-key",
      privateKey: rsaKeyPair.private
    });
    const verified = await verify({
      data: signedLinkedData,
      publicKey: rsaKeyPair.public
    });
    expect(verified).toBe(true);
  });

  it("supports optional domain", async () => {
    const signedLinkedData = await sign({
      data: linkedData,
      domain: "example.com",
      creator: "http://example.com/user/did:example:123#main-key",
      privateKey: rsaKeyPair.private
    });
    const verified = await verify({
      data: signedLinkedData,
      publicKey: rsaKeyPair.public
    });
    expect(verified).toBe(true);
  });
  
});
