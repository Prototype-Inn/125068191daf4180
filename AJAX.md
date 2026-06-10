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
    
    # Atliekame binarinį postūmį į dešinę (Bitwise Shift Right)
    shifted_num = num >> shift_amount
    
    print(f'Sugautas simbolis: {symbol} (Baitas: {shift_amount})')
    print(f'Postūmio į dešinę rezultatas (HEX): {hex(shifted_num)[2:]}')
else:
    print('Simbolių nerasta, paleiskite komandą iš naujo.')
"
```
