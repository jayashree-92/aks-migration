const _crypto = require('crypto');

// encrypt/decrypt functions
module.exports = {
    /**
     * Decrypts text by given key
     * @param String base64 encoded input data
     * @param Buffer masterkey
     * @returns String decrypted (original) text
     */
    encrypt: function (encdata, masterkey){
        try {
            // random initialization vector
            var iv = _crypto.randomBytes(16);

            // random salt
            var salt = _crypto.randomBytes(64);

            // derive key: 32 byte key length - in assumption the masterkey is a cryptographic and NOT a password there is no need for
            // a large number of iterations. It may can replaced by HKDF
            var key = _crypto.pbkdf2Sync(masterkey, salt, 2145, 32, 'sha512');

            // AES 256 GCM Mode
            var cipher = _crypto.createCipheriv('aes-256-gcm', key, iv);

            // encrypt the given text
            var encrypted = Buffer.concat([cipher.update(encdata, 'utf8'), cipher.final()]);

            // extract the auth tag
            var tag = cipher.getAuthTag();

            // generate output
            return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');

        }catch(e){
        }

        // error
        return null;
    }
};
