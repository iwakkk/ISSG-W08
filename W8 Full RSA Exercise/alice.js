const crypto = require('crypto');

const alicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC8BbE0Weu4ZMZG
z1VU05SJ538H3wrXkJDeDxU8tdCb2SXVJuzzZW3Tytegnzs/M8QN++8Uhm/OrdOW
UbxlSkh/FBtIyjYNvQW19GJPgF9UatVKEBuypyjG3QAS67By2XYvvqunzDFQPrKw
DClv+SQ/JEiKs8hZclC9zPMn461Nhiiv05N+AZeYb7GLj9r5qPWsXTnrjGzxwWtr
3VN+gnMA0RVfN9EH5a3ZQL4Y+HLO786vISzmVGATRU+aCp7i/olym4Go6a8jT7of
XLybeCEacAf726U9vFHW/2/O+F5wXLPESRK/qrHfmMcAfD3sjXtBZGsWLq7DUVJI
K2+fnvUlAgMBAAECggEAJ0ahH6hw/xG+AWiqEJAqBSygcop6/1CpkllgPFBWhVe0
+XOqJ6XWbVl/9YONosQzfiBUbtsuW+QfwNTOH/KGdlVC5c+nvvLvUHT+XFEamM3A
RDpdLtKQSAo+S7WEJFmcwJh5zxFuc67FMNU5irRmh/ISXTb08QpaJ2u6l2iN+RVj
hKidP22nqA2xozjg7HS52jpqI47Agi2bgfjKU8TmvGovx5vO42tTsVhurUwm1G6x
hPo8V6bMyK3vZzX+cYsLpfMxdM0yL8b25FH6ZL0hilSgr5Q9Z1Cx+4rTrhaFCMLs
L7BXmS8GErGTxb1TMG1wTqWO8nkhFx8qYigS21B7OQKBgQDlu2gS6Ruc31GJ6hey
KUwwfNHoSMOxzS05C1KTRsFIPxnAXXSSk9EjwQirkoH1aY3Qqzj/jc240WnuM85z
RzWG92vhqPa8/Ltv/vDpzJe4x7wPWjBwt4wVKV8eiVk3CJPSn8X/KltODDUYR23j
Cs3ER4oisf+G10S3S5kJyBdkXwKBgQDRhWDOyIe/5ii1DwpaAbyB4tUtGNZ+Kgl8
2PaH4jLjv2riO0Dlrmtl14P0peZ/x1dVkuPZ+/pll+Zf2DPpWF0DzxhMfJbsrBL8
nFjZOjjjwG4gkgS4qkbzoeewvGYi0Za/D2il+VehujBJa5TAbSAUZgPEOIAFnznL
GFnn0Rv0+wKBgGl9qwa0ADgC3CBmXEc1a4UAbCsr7qDgxJljN6HlZa/VOe/5eiQs
uGagp2iRuBeHRtXBKkU/Sm5Jy0jUhUKuOkglqWZP/i0+KJv/B4V0q17waMzr7z5z
KmI1QzZ0f4Ej8S1QrMzFGHQ4atEhS7ZsKZyt9SKFdf7nLui0UCwLs6IlAoGAFDBg
+qvyALjB1WiEm9Ws/2sHFZheGrwcO+6AGund83ofZ3tELp2W9bJFoc5Wnptru/Ay
im+wWhe/+B5SKjr8g4ByG/SpalbOYY8DNLNahf+l3PeVAuJNge5o7+vHf7VobDKk
59FV81yIiJqYM86QF8cYt9Cl7WTBYeOPzjmlEv8CgYAvXn2j8CDUIAD7GjTpOUxB
w2XNoSfVltBqPpjbJfEPHjPzjbtV1LqoRwj4X73GI9W4J+mgUkTKojgQ9E5nEsPG
/HmhekyKJWoRBy/fLxTPaWVBBwM7Gc9J5IBSySTFB5aHWLjpU+PiZykdGgcc1ZKN
XC32DdmXzpiYLKw536dfhw==
-----END PRIVATE KEY-----`

const alicePrivateKey = crypto.createPrivateKey(alicePrivateKeyPem);

const bobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr6PCeS+W6i4dNCaD/Vym
0VIaqwKJtwf8ZmFB5O1salADjgqg2DC4QpZSrRNSCB4oTj2/FdI8AF2BkMoAEj4l
0jiO9xdlT76pNTtyszqAUKa4LJNf+a37OtXOhe10Pz03ZC+Ud+D+PYhlHuvI7AcH
1LaJJJxZcRtrAc23yFY7S0sw3CiFLTcX1jYAbrhZI3DXel+uVN8o5FTOB5GU2+Id
wXriYqpZxQF3f8jsQkQpZIk4rumvHMpPKER5041L6HJ+vpRvQ7yFpot6bogKqVSR
YTcGJd5C8l+xr/giWIACMM6B1AiWvroPPAKpw9x/YnUMUQdGh3XutLKnnmMdZnXl
GQIDAQAB
-----END PUBLIC KEY-----`

const bobPublicKey = crypto.createPublicKey(bobPublicKeyPem);

const message = "i want some apples";

const data = Buffer.from(message);

const signature = crypto.sign("sha256", data, alicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(bobPublicKey, data);
console.log("Ciphertext:", ciphertext.toString("hex"));