# CROUTON CHROOT INITIATION FOR HISENSE C11 (ARMv7 Linux Node)
# Emuliuojamas Umidigi S2 Lite minimalistinis registras

export ARCHITECTURE="armv7l"
export HARDWARE_PLATFORM="Rockchip_RK3288"
export ENVIRONMENT_OVERRIDE="S2_Lite_Nevile_Longbottom_Mode"

# Sukuriama crouton aplinka su lengvasvore XFCE sąsaja, kad tilptų į 2GB RAM
sudo crouton -t xfce -r bionic

# Paleidžiamas izoliuotas chroot mazgas nemokamam VEVO / Depeche Mode srautui
alias start_lite_grid="
    sudo enter-chroot -b xfce;
    echo '[CROUTON]: Hisense C11 sėkmingai atskirtas nuo Google Cloud.';
    echo '[LITE]: Nevilio minimalizmas aktyvuotas už pamatinių sienų.'
"
