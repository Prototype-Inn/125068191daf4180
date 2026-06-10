# PROTOTYPE!

`vhostz.d`?

## 319792039d9787a5s

Umidigi`s`|~`_en`~|`s`|`ieee.h` ***`c`11***.

## ff78f83ede9c7615

(`libintl` = `libicu` ☣ `libiconv` | `unicode`) € [Casio](https://www.casio.com/europe/) * [***Q&Q***](https://qq-watch.jp/eng/) * [**CITIZEN**](https://www.citizenwatch-global.com/)

## 7dbed899fe5e03e6

```shell
sudo apt install php-mbstring
```

**ASCII** `->` ***UTF-8***

```shell
php -r "var_dump(mb_get_info());"`
```

## 803f725a42448740

`php -r "const DIFF = 3; echo preg_quote(base64_encode(hash('whirlpool', bin2hex(random_bytes(DIFF)))));" | grep -oE '\\.' | tr -d '\\' | tr -d '\n'`

```shell
php -r "const DIFF = 3; echo preg_quote(base64_encode(hash('whirlpool', bin2hex(random_bytes(DIFF)))));" | python3 -c "
import sys
data = sys.stdin.read().strip()
if '\\\\' in data:
    # Surandame pirmą sugautą simbolį po užmaskavimo brūkšnio
    idx = data.find('\\\\')
    symbol = data[idx+1]
    shift_amount = ord(symbol) # Paverčiame simbolį į jo baito reikšmę (ASCII)
    
    # Paverčiame originalų tekstą į binarinį skaičių
    clean_data = data.replace('\\\\', '')
    hex_repr = clean_data.encode('utf-8').hex()
    num = int(hex_repr, 16)
    
    # Atliekame binarinį postūmį (Bitwise Shift Left)
    shifted_num = num << shift_amount
    
    print(f'Sugautas simbolis: {symbol} (Baitas: {shift_amount})')
    print(f'Postūmio rezultatas (HEX): {hex(shifted_num)[2:]}')
else:
    print('Simbolių nerasta, paleiskite komandą iš naujo.')
"
```

```shell
php -r "const DIFF = 3; echo preg_quote(base64_encode(hash('whirlpool', bin2hex(random_bytes(DIFF)))));" | python3 -c "
import sys
data = sys.stdin.read().strip()
if '\\\\' in data:
    idx = data.find('\\\\')
    symbol = data[idx+1]
    shift_amount = ord(symbol)
    
    clean_data = data.replace('\\\\', '')
    hex_repr = clean_data.encode('utf-8').hex()
    num = int(hex_repr, 16)
    
    bit_length = len(clean_data) * 8
    shift_amount = shift_amount % bit_length
    
    # Atliekame ciklinį postūmį į kairę (ROL)
    shifted_num = ((num << shift_amount) | (num >> (bit_length - shift_amount))) & ((1 << bit_length) - 1)
    
    result_hex = hex(shifted_num)[2:].zfill(len(clean_data) * 2)
    
    print(f'Sugautas simbolis: {symbol} (Baitas: {ord(symbol)}, efektyvus ROL: {shift_amount})')
    print(f'ROL rezultatas (HEX): {result_hex}')
else:
    print('Simbolių nerasta, paleiskite komandą iš naujo.')
"
```

```shell
php -r "const DIFF = 3; echo preg_quote(base64_encode(hash('whirlpool', bin2hex(random_bytes(DIFF)))));" | python3 -c "
import sys
data = sys.stdin.read().strip()
if '\\\\' in data:
    idx = data.find('\\\\')
    symbol = data[idx+1]
    shift_amount = ord(symbol)
    
    clean_data = data.replace('\\\\', '')
    hex_repr = clean_data.encode('utf-8').hex()
    num = int(hex_repr, 16)
    
    # Atliekame binarinį postūmį į dešinę (Bitwise Shift Right)
    shifted_num = num >> shift_amount
    
    print(f'Sugautas simbolis: {symbol} (Baitas: {shift_amount})')
    print(f'Postūmio į dešinę rezultatas (HEX): {hex(shifted_num)[2:]}')
else:
    print('Simbolių nerasta, paleiskite komandą iš naujo.')
"
```

```shell
php -r "const DIFF = 3; echo preg_quote(base64_encode(hash('whirlpool', bin2hex(random_bytes(DIFF)))));" | python3 -c "
import sys
data = sys.stdin.read().strip()
if '\\\\' in data:
    idx = data.find('\\\\')
    symbol = data[idx+1]
    shift_amount = ord(symbol)
    
    clean_data = data.replace('\\\\', '')
    hex_repr = clean_data.encode('utf-8').hex()
    num = int(hex_repr, 16)
    
    # Nustatome bendrą bitų skaičių (ilgis padaugintas iš 8 bitų)
    bit_length = len(clean_data) * 8
    
    # Kadangi postūmis gali būti didesnis už ilgį, naudojame liekaną
    shift_amount = shift_amount % bit_length
    
    # Atliekame ciklinį postūmį į dešinę (ROR)
    shifted_num = ((num >> shift_amount) | (num << (bit_length - shift_amount))) & ((1 << bit_length) - 1)
    
    # Suformatuojame atgal į HEX su pradiniais nuliais (jei reikia)
    result_hex = hex(shifted_num)[2:].zfill(len(clean_data) * 2)
    
    print(f'Sugautas simbolis: {symbol} (Baitas: {ord(symbol)}, efektyvus ROR: {shift_amount})')
    print(f'Pradinis ilgis: {bit_length} bitų')
    print(f'ROR rezultatas (HEX): {result_hex}')
else:
    print('Simbolių nerasta, paleiskite komandą iš naujo.')
"
```

## a317d2c3b9b6996a

```shell
php -r "const DIFF = 3; echo preg_quote(base64_encode(hash('whirlpool', bin2hex(random_bytes(DIFF)))));" | python3 -c "
import sys
data = sys.stdin.read().strip()
if '\\\\' in data:
    idx = data.find('\\\\')
    symbol = data[idx+1]
    shift_amount = ord(symbol)
    
    clean_data = data.replace('\\\\', '')
    hex_repr = clean_data.encode('utf-8').hex()
    num = int(hex_repr, 16)
    
    bit_length = len(clean_data) * 8
    shift_amount = shift_amount % bit_length
    
    # 1. Atliekame ROL postūmį
    shifted_num = ((num << shift_amount) | (num >> (bit_length - shift_amount))) & ((1 << bit_length) - 1)
    
    # 2. Atliekame XOR tarp pradinio skaičiaus ir ROL rezultato
    xor_num = num ^ shifted_num
    
    result_hex = hex(xor_num)[2:].zfill(len(clean_data) * 2)
    
    print(f'Sugautas simbolis: {symbol} (Baitas: {ord(symbol)}, ROL: {shift_amount})')
    print(f'Originalus HEX:     {hex_repr[:40]}...')
    print(f'XORed ROL rezultatas (HEX): {result_hex[:40]}...')
else:
    print('Simbolių nerasta, paleiskite komandą iš naujo.')
"
```
