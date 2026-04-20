---
sidebar_label: '5.3 Type-C Flash Connect Failure'
title: 5.3 Type-C Flash Connect Failure
---

# 5.3 Type-C Flash Connect Failure

## Typical Symptoms

After selecting **"Type-C Flash Connect"** in the desktop client's *Add Device* option:

- Status stuck at **"Waiting for USB NIC"**
- Status stuck at **"IP Configuration Failed"**
- Flash connect succeeds, but SSH fails to connect to `192.168.128.10`

## Quick Diagnosis

Open your system’s USB / network device list:

- **Windows**: Device Manager → Network Adapters  
- **macOS**: System Information → USB  

Determine the cause based on what you observe:

| Observation | Cause |
|---|---|
| No USB NIC appears at all | Cable issue (90% of cases)—try a different cable |
| NIC appears but shows "Not Connected" | RNDIS not started on the board, or the image is not an official RDK image |
| NIC connected but SSH fails | PC-side IP not properly configured—it should be `192.168.128.100/24` |

## Troubleshooting Checklist

1. **NIC Not Listed**

   Many Type-C cables support charging only, not data transfer. Replace with a full-featured USB 3.0, 5A data cable. Power off the board, re-plug the cable, and click *Refresh* in Studio.

2. **Board Image**

   Type-C flash connect relies on the pre-configured static IP `192.168.128.10/24` in official RDK images. For third-party images, you must manually enable RNDIS:

   ```bash
   sudo systemctl enable usb0-static --now
   ```

3. **PC-side IP**

   The desktop client automatically requests admin privileges to configure the USB NIC with `192.168.128.100/24`. Click **"Yes"** on the UAC prompt or enter your sudo password. If you missed the permission request, restart Studio and re-select **"Type-C Flash Connect."**

4. **NIC Shows "Not Connected"**

   The board may still be booting. Wait 30 seconds and click the *Refresh* button.

## Root Cause

Type-C flash connect uses the USB CDC RNDIS/NCM protocol to emulate an Ethernet connection. The full link is:

```
PC USB driver → USB cable (data mode) → Board-side USB device controller
  → RNDIS gadget → kernel netif (usb0) → sshd
```

Failure at any point breaks the connection. Suspect in this order of likelihood:

1. **Cable** (most common—resolved by replacing the cable)  
2. **Missing RNDIS configuration in board image** (use an official RDK image)  
3. **PC firewall blocking** (rare)

## Permanent Solutions

- Keep a dedicated full-featured cable labeled **"Debug Only"**  
- Grant the desktop client **permanent permission** to modify network configurations  
- For teams using this extensively, ensure operations consistently deploy official RDK images