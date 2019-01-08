const crypto = require("crypto");

const generateRSAKeypair = require("generate-rsa-keypair");

const { createVerifyData } = require("./common");

const sign = async ({ data, creator, domain, created, privateKey }) => {
  const options = {
    type: "RsaSignature2017",
    creator,
    domain,
    nonce: crypto.randomBytes(16).toString("hex"),
    created: created || new Date().toISOString()
  };
  if (!domain) {
    delete options.domain;
  }
  const toBeSigned = await createVerifyData(data, options);
  const signer = crypto.createSign("sha256");
  signer.update(toBeSigned);
  signer.end();
  const signature = signer.sign(privateKey);
  return {
    ...data,
    signature: {
      ...options,
      signatureValue: signature.toString("base64")
    }
  };
};

const verify = async ({ data, publicKey }) => {
  const toBeSigned = await createVerifyData(data, data.signature);
  const verifier = crypto.createVerify("sha256");
  verifier.update(toBeSigned);
  return verifier.verify(publicKey, data.signature.signatureValue, "base64");
};

module.exports = {
  sign,
  verify,
  generateRSAKeypair
};
