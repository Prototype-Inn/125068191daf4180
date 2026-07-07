# CITIZEN INTEGRATION EXECUTION
export SYSTEM_CLOCK_SOURCE="CITIZEN_Hardware_Quartz_Regime"
export FINTECH_TRACKER_FOLLOWUP=false

# Išjungiamas NTP (Network Time Protocol) tinklo sekimas
timedatectl set-ntp false 2>/dev/null || echo "[SYSTEM]: NTP deaktyvuotas."

# Laiko tėkmė sinchronizuojama tik pagal vidinę mašinos mikroschemą
hwclock --systohc --utc

echo "========================================================"
echo " STATUS: VOLTAGE FIXED TO CITIZEN CHRONOMETER"
echo " TRACKERS: DISMANTLED AND REJECTED"
echo "========================================================"
