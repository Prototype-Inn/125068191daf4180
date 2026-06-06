# Kubuntu (KDE) keitimas į Unity DE

Vykdykite šias komandas terminale iš eilės.

### 1. Unity aplinkos įdiegimas
```bash
sudo apt update && sudo apt install ubuntu-unity-desktop -y
```
*Pastaba: parinkčių lange pasirinkite **lightdm** arba **gdm3**.*

### 2. KDE Plasma ir programų pašalinimas
```bash
sudo apt purge plasma-desktop plasma-workspace kde-standard konsole dolphin kinit -y
```

### 3. Frameworks (kf5/kf6) bibliotekų išvalymas
```bash
sudo apt purge libkf5* libkf6* kio kinit kpackagetool5 -y
```

### 4. Likusių šiukšlių išvalymas
```bash
sudo apt autoremove --purge -y && sudo apt clean
```

### 5. Sistemos perkrovimas
```bash
sudo reboot
```
