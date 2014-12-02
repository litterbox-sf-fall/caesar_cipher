describe("cipher", function(){
  var key = 1;
  var message = "attackatdawn";
  var encryptedMessage = "buubdlbuebxo";

  // describe the behavior of a CaesarCipher object
  describe("#encrypt", function(){
    it("returns a message encrypted with the key", function(){
      expect(cipher.encrypt(message, key)).toBe(encryptedMessage);
    });
    it("allows keys larger than 25", function(){
      cipher.key = 27;
      expect(cipher.encrypt(message, key)).toBe(encryptedMessage);
    });
    it("removes all spaces from the message", function() {
      var message = "attack at dawn"
      expect(cipher.encrypt(message, key)).toBe(encryptedMessage);
    });
    it("is case-insensitive", function() {
      var message = "aTtACkAtDAWn";
      expect(cipher.encrypt(message, key)).toBe(encryptedMessage);
    });
  });

  describe("#decrypt", function(){
    it("decrypts an encoded message given a key", function(){
      expect(cipher.decrypt(encryptedMessage, key)).toEqual(message);
    });
  });
  
});

