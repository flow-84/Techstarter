def decrypt_text(encrypted_text):
    decrypted_text = ""
    for i in range(0, len(encrypted_text), 2):
        pair = encrypted_text[i:i+2]
        decimal_value = int(pair, 16)  # Hexadezimale Umwandlung
        decrypted_text += chr(decimal_value)
    return decrypted_text

encrypted_text = "74336368737434727433726c3374736730"
decrypted_text = decrypt_text(encrypted_text)
print(decrypted_text)
