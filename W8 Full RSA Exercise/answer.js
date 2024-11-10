// First we generate the key twice using node generate-key.js for Alice and Bob
// Alice and Bob give each other's public key
// Alice hash the message and then sign it using her own private key and also encrypt the message using Bob's public key
// Alice sent both signature and encrypted message (ciphertext) to Bob
// Bob then decrypt the ciphertext using his private key.
// Bob verifies the signature using Alice's public key by comparing the hash of the decrypted message with the hash that Alice signed.
// If the verification result is true, then the message is not altered. But if it's false, then it is not the original message from Alice