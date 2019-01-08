const fixtures = require('./__fixtures__');

const { verify } = require('../index');

// Example: 
// https://github.com/tootsuite/mastodon/blob/cabdbb7f9c1df8007749d07a2e186bb3ad35f62b/app/lib/activitypub/linked_data_signature.rb#L30
describe('RsaSignature2017', () => {
  describe('Mastodon', () => {
    it('can verify a follow request', async () => {
      const verified = await verify({
        data: fixtures.Follow,
        publicKey: fixtures.Profile.publicKey.publicKeyPem,
      });
      expect(verified).toBe(true);
    });

    it('fails to verify a tampered follow request', async () => {
      const verified = await verify({
        data: {
          ...fixtures.Follow,
          type: 'Follow3',
        },
        publicKey: fixtures.Profile.publicKey.publicKeyPem,
      });
      expect(verified).toBe(false);
    });
  });
});
