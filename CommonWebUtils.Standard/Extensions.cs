using Newtonsoft.Json;
using System;
using System.Security.Cryptography;
using System.Text;
using System.Xml;

namespace CommonWebUtils {
    public static class Extensions {
        private static readonly string EncryptionKey = "%D*G-KaPdSgVkYp3s6v8y/B?E(H+MbQeThWmZq4t7w!z$C&F)J@NcRfUjXn2r5u8x/A?D*G-KaPdSgVkYp3s6v9y$B&E)H+MbQeThWmZq4t7w!z%C*F-JaNcRfUjXn2r";

        public static string GetHash(this string input) {
            HashAlgorithm hashAlgorithm = new SHA256CryptoServiceProvider();
            byte[] byteValue = Encoding.UTF8.GetBytes(input);
            byte[] byteHash = hashAlgorithm.ComputeHash(byteValue);
            return Convert.ToBase64String(byteHash);
        }

        public static string Encrypt(this string stringToEncrypt) {
            RijndaelManaged objrij = new RijndaelManaged();
            //set the mode for operation of the algorithm   
            objrij.Mode = CipherMode.CBC;
            //set the padding mode used in the algorithm.   
            objrij.Padding = PaddingMode.PKCS7;
            //set the size, in bits, for the secret key.   
            objrij.KeySize = 0x80;
            //set the block size in bits for the cryptographic operation.    
            objrij.BlockSize = 0x80;
            //set the symmetric key that is used for encryption & decryption.    
            byte[] passBytes = Encoding.UTF8.GetBytes(EncryptionKey);
            //set the initialization vector (IV) for the symmetric algorithm    
            byte[] EncryptionkeyBytes = new byte[] { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };

            int len = passBytes.Length;
            if (len > EncryptionkeyBytes.Length) {
                len = EncryptionkeyBytes.Length;
            }
            Array.Copy(passBytes, EncryptionkeyBytes, len);

            objrij.Key = EncryptionkeyBytes;
            objrij.IV = EncryptionkeyBytes;

            //Creates symmetric AES object with the current key and initialization vector IV.    
            ICryptoTransform objtransform = objrij.CreateEncryptor();
            byte[] textDataByte = Encoding.UTF8.GetBytes(stringToEncrypt);
            //Final transform the test string.  
            return Convert.ToBase64String(objtransform.TransformFinalBlock(textDataByte, 0, textDataByte.Length));
        }

        public static string Decrypt(this string stringToDecrypt) {
            RijndaelManaged objrij = new RijndaelManaged();
            objrij.Mode = CipherMode.CBC;
            objrij.Padding = PaddingMode.PKCS7;

            objrij.KeySize = 0x80;
            objrij.BlockSize = 0x80;
            byte[] encryptedTextByte = Convert.FromBase64String(stringToDecrypt);
            byte[] passBytes = Encoding.UTF8.GetBytes(EncryptionKey);
            byte[] EncryptionkeyBytes = new byte[0x10];
            int len = passBytes.Length;
            if (len > EncryptionkeyBytes.Length) {
                len = EncryptionkeyBytes.Length;
            }
            Array.Copy(passBytes, EncryptionkeyBytes, len);
            objrij.Key = EncryptionkeyBytes;
            objrij.IV = EncryptionkeyBytes;
            byte[] TextByte = objrij.CreateDecryptor().TransformFinalBlock(encryptedTextByte, 0, encryptedTextByte.Length);
            return Encoding.UTF8.GetString(TextByte);  //it will return readable string  
        }
        public static bool IsXml(this string stringToCheck) {
            bool bIsXml = true;
            try { stringToCheck.ToXml(); } catch { bIsXml = false; }
            return bIsXml;
        }

        public static bool IsJson(this string stringToCheck) {
            bool bIsJson = true;
            try { stringToCheck.ToJson(); } catch { bIsJson = false; }
            return bIsJson;
        }

        public static object ToJson(this string jsonString) {
            return JsonConvert.DeserializeObject(jsonString);
        }

        public static XmlDocument ToXml(this string xmlString) {
            XmlDocument xd = new XmlDocument();
            xd.LoadXml(xmlString);
            return xd;
        }
    }
}