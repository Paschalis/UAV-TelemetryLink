# Custom RX/TX Board Designs for GCS Communication

<p align="center">
  <img src="Images/AD.png" alt="preview">
</p>

**Receiver and transmitter solution for Ground Control Stations (GCS)**, designed to provide reliable telemetry and control using ELRS, mLRS, and MAVLink protocols. This repository features a wide range of innovative board designs, optimized for long-range communication, minimal latency, and robust performance under varying conditions. From Antenna Diversity to True Diversity and Gemini Mode boards, these designs cater to diverse operational needs and ensure seamless integration with UAV systems. Explore our RX and TX boards tailored to meet the demands of modern UAV telemetry and control systems.


## Table of Contents

1. [QGroundControl Integration](#qgroundcontrol-integration)
2. [Board Designs Overview](#board-designs-overview)
    1. [Antenna Diversity Boards](#1-antenna-diversity-boards)
    - [RX Boards](#rx-boards)
    - [TX Boards](#tx-boards)
    2. [True Diversity or Full Diversity Boards](#2-true-diversity-or-full-diversity-boards)
    - [RX Boards](#rx-boards-1)
    - [TX Boards](#tx-boards-1)
    3. [Gemini Mode Boards](#3-gemini-mode-boards)
    - [RX Boards](#rx-boards-2)
    - [TX Boards](#tx-boards-2)
    4. [Gemini Xrossband (GemX) Boards](#4-gemini-xrossband-gemx-boards)
    - [RX Boards](#rx-boards-3)
    - [TX Boards](#tx-boards-3)
3. [Contributing](#contributing)
4. [Acknowledgments](#acknowledgments)
5. [License](#license)


## QGroundControl Integration

QGroundControl (QGC) is a powerful tool for mission planning and UAV control. This section demonstrates how to use the boards in this repository for telemetry and control with QGC, even without an RC controller.

### Using ELRS Boards with QGC
1. Connect the ground-based ELRS receiver to your GCS using a USB-to-UART adapter.
2. Ensure telemetry is enabled on your flight controller and configured for ELRS.
3. Launch QGC, and verify telemetry data is being received.

![QGC Interface](Images/QGC_Telemetry.png)

### Hardware Setup
Below is an example of the hardware setup for mission planning:
- **Ground Setup**: ELRS transmitter connected to the GCS via USB or mounted on the RC controller.
- **Onboard Setup**: ELRS receiver mounted on the UAV and connected to the flight controller.

![Hardware Setup](Images/Hardware_Setup.png)

> **Note:**  
> - More details about the transmission modes can be found in the [Transmission Modes Classification](Receivers%20and%20Transmitters/README.md).
>
>![Modes Info](Receivers%20and%20Transmitters/Images/diversity.png)

> **Note:**  
> - ELRS requires proper binding and configuration to function as a telemetry link.

![GCS](Images/GCS.png)

## Related Projects (click on them to expand)

<!-- <p align="center"><em>(click on them to expand)</em></p> -->

<ol style="line-height: 2;">
   <li><details open>
   <summary><strong>ESP32 UAV Telemetry Monitor</strong></summary>

An ESP32-based telemetry display system for real-time MAVLink UAV monitoring, featuring a responsive touchscreen interface, live flight status visualization, OTA firmware update capability, and seamless integration with QGroundControl, MAVProxy, and other MAVLink-compatible ground stations.
<div align="center">

<img src="Images/preview2.png" alt="MonitorPreview" width="650">

[![ESP32 UAV Telemetry Monitor](https://img.shields.io/badge/📡%20ESP32--UAV--Telemetry--Monitor-Visit%20Now!-orange?style=for-the-badge)](https://github.com/Paschalis/esp32-uav-telemetry-monitor)  
[![Stars](https://img.shields.io/github/stars/Paschalis/esp32-uav-telemetry-monitor?label=🌟%20Stars&style=for-the-badge&color=yellow)](https://github.com/Paschalis/esp32-uav-telemetry-monitor/stargazers) [![Forks](https://img.shields.io/github/forks/Paschalis/esp32-uav-telemetry-monitor?label=🍴%20Forks&style=for-the-badge&color=blue)](https://github.com/Paschalis/esp32-uav-telemetry-monitor/network/members) [![Activity](https://img.shields.io/github/last-commit/Paschalis/esp32-uav-telemetry-monitor?label=⏳%20Last%20Update&style=for-the-badge&color=green)](https://github.com/Paschalis/esp32-uav-telemetry-monitor/commits/main)

</div>


   </details></li>
   <li><details>
   <summary><strong>FC Plus Sensor Module</strong></summary>

![Under Construction](https://img.shields.io/badge/status-under%20construction-orange)
FC Plus Sensor Module is a modular add-on board for UAV flight controllers, offering advanced features such as telemetry, GPS, object avoidance (ToF, Sonar, IR), and LED indicators for status feedback. This repository includes comprehensive documentation, hardware setup instructions, sensor integration guides, and communication protocols (LoRa/WiFi) to improve UAV autonomy, safety, and performance.

<div align="center">

<img src="Images/preview1.png" alt="FCreview" width="750">

![Under Construction](https://img.shields.io/badge/status-under%20construction-orange)
[![FC Plus Sensor Module](https://img.shields.io/badge/📡%20FC--Plus--Sensor--Module-Visit%20Now!-orange?style=for-the-badge)](https://github.com/Paschalis/fc-plus-sensor-module)              
[![Stars](https://img.shields.io/github/stars/Paschalis/fc-plus-sensor-module?label=🌟%20Stars&style=for-the-badge&color=yellow)](https://github.com/Paschalis/fc-plus-sensor-module/stargazers) [![Forks](https://img.shields.io/github/forks/Paschalis/fc-plus-sensor-module?label=🍴%20Forks&style=for-the-badge&color=blue)](https://github.com/Paschalis/fc-plus-sensor-module/network/members) [![Activity](https://img.shields.io/github/last-commit/Paschalis/fc-plus-sensor-module?label=⏳%20Last%20Update&style=for-the-badge&color=green)](https://github.com/Paschalis/fc-plus-sensor-module/commits/main)

</div>


</ol>


# Board Designs Overview

This repository contains a collection of designs for RX and TX boards under different transmission modes. More details about the transmission modes can be found in the [Transmission Modes Classification](Receivers%20and%20Transmitters/README.md).

<p align="center">
    <a href="https://Paschalis.github.io/UAV-TelemetryLink/" target="_blank">
        <img src="https://img.shields.io/badge/Visit_UAV_Telemetry_Link_Site-4C8F9F?style=for-the-badge&logo=github&logoColor=white&color=4C8F9F" alt="Visit UAV Telemetry Link Site" width="350">
    </a>
</p>

<div style="overflow-x:auto;">

### 1. Antenna Diversity Boards

### RX Boards

#### ELRS

| Name      | Frequency | Version | Features             | Media | Status |
|-----------|-----------|---------|----------------------|-------|--------|
| AD1_2.4G  | 2.4GHz    | Rev 1.0 | Basic diversity setup | <p align="center">[![Preview](Images/AD1_2.4G.gif)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Receivers/Antenna%20Diversity/ExpressLRS_2.4GHz/AD1_2.4G)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/AD1_2.4G.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FReceivers%2FAntenna%2520Diversity%2FExpressLRS_2.4GHz%2FAD1_2.4G" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">✅ Approved</p> |
| AD2_900M  | 900MHz    | Rev —   | (Add description)     | <p align="center">![Preview](Images/AD2_900M.png)<br/>(Add links)</p> | <p align="center">Draft</p> |

</div>


<div style="overflow-x:auto;">

## 2. True Diversity or Full Diversity Boards

### RX Boards

| Name      | Frequency | Version | Features                         | Media | Status |
|-----------|-----------|---------|-----------------------------------|-------|--------|
| TD1_2.4G  | 2.4GHz    | Rev 1.0 | Full diversity with improved range | <p align="center">[![Preview](Images/TD1_2.4G.gif)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Receivers/True%20Antenna%20Diversity/ExpressLRS_2.4GHz/TD1_2.4G)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/TD1_2.4G.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FReceivers%2FTrue%2520Antenna%2520Diversity%2FExpressLRS_2.4GHz%2FTD1_2.4G" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">✅ Approved</p> |
| TD2_900M  | 900MHz    | Rev 0.9 | (Add description)                 | <p align="center">![Preview](Images/TD2_900M.png)<br/>(Add links)</p> | <p align="center">Draft</p> |

</div>



## TX Boards (Shared for Single Antenna, Antenna Diversity & True Diversity)

> **Note:**  
> The TX boards listed in this section are shared across **Single Antenna Mode, Antenna Diversity, and True Diversity** configurations.  
> - These boards are **not duplicated** under each diversity category to avoid redundancy.  
> - They are optimized for their respective frequencies (**2.4GHz** & **900MHz**) and ensure compatibility across all three configurations.  
> - **Gemini Mode (GM) and Gemini Xrossband (GemX) have their own TX boards**, so they are listed separately in their respective sections.  

<div style="overflow-x:auto;">

### TX Boards  

| Name      | Frequency | Version | Features                                                                 | Media | Status |
|-----------|-----------|---------|--------------------------------------------------------------------------|-------|--------|
| TX1_2.4G  | 2.4GHz    | Rev 1.0 | Basic transmitter with no OLED display or TX Backpack.                   | <p align="center">[![Preview](docs/Images/TX1_2.4G.png)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Transmitters/Shared%20for%20Single%20Antenna%2C%20Antenna%20Diversity%2C%20True%20or%20Full%20Diversity/ExpressLRS_2.4GHz/TX1_2.4G)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/TX1_2.4G.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FTransmitters%2FShared%2520for%2520Single%2520Antenna%252C%2520Antenna%2520Diversity%252C%2520True%2520or%2520Full%2520Diversity%2FExpressLRS_2.4GHz%2FTX1_2.4G" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">✅ Approved</p> |
| TX2_2.4G  | 2.4GHz    | Rev 1.1 | Includes SSD1306 OLED display, but no TX Backpack.                       | <p align="center">[![Preview](docs/Images/TX2_2.4G.png)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Transmitters/Shared%20for%20Single%20Antenna%2C%20Antenna%20Diversity%2C%20True%20or%20Full%20Diversity/ExpressLRS_2.4GHz/TX2_2.4G)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/TX2_2.4G.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FTransmitters%2FShared%2520for%2520Single%2520Antenna%252C%2520Antenna%2520Diversity%252C%2520True%2520or%2520Full%2520Diversity%2FExpressLRS_2.4GHz%2FTX2_2.4G" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">✅ Approved</p> |
| TX3_2.4G  | 2.4GHz    | Rev 1.2 | Features both SSD1306 OLED display and TX Backpack for GCS communication.| <p align="center">[![Preview](docs/Images/TX3.png)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Transmitters/Shared%20for%20Single%20Antenna%2C%20Antenna%20Diversity%2C%20True%20or%20Full%20Diversity/ExpressLRS_2.4GHz/TX3_2.4G)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/TX3_2.4G.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FTransmitters%2FShared%2520for%2520Single%2520Antenna%252C%2520Antenna%2520Diversity%252C%2520True%2520or%2520Full%2520Diversity%2FExpressLRS_2.4GHz%2FTX3_2.4G" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">Draft</p> |
| TX1_900M  | 900MHz    | Rev 1.0 | Robust transmitter for 900MHz band, suitable for longer-range links.     | <p align="center">[![Preview](docs/Images/TX1_900M.png)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Transmitters/Shared%20for%20Single%20Antenna%2C%20Antenna%20Diversity%2C%20True%20or%20Full%20Diversity/ExpressLRS_900MHz/TX1_900M)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/TX1_900M.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FTransmitters%2FShared%2520for%2520Single%2520Antenna%252C%2520Antenna%2520Diversity%252C%2520True%2520or%2520Full%2520Diversity%2FExpressLRS_900MHz%2FTX1_900M" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">Draft</p> |

</div>

## 3. Gemini Mode Boards  

### RX Boards
> **Note:**  
> - The **Gemini RX boards** are actually the **True Diversity RX boards** operating in **Gemini Mode**.  
> - To enable **Gemini Mode**, set the **RX Antenna Mode** to **Gemini** via Lua script.  
> - **Single Antenna RX boards** can also operate in Gemini Mode but must use **Model 5** in **Model Config Matching** via Lua script.  
> - **Gemini-capable receivers** should use **Model 6** in **Model Config Matching**.  
> - Click on [🔗 **Go to True Diversity Full Diversity RX Boards**](#2-true-diversity-or-full-diversity-boards) to view compatible receivers.  
>  
> 📖 **Reference:** [ExpressLRS Gemini Mode Documentation](https://www.expresslrs.org/software/gemini/#what-is-gemini)  



<div style="overflow-x:auto;">

### TX Boards (Gemini Mode – Single Band)

| Name        | Frequency | Version | Features                                                                                          | Media | Status |
|-------------|-----------|---------|---------------------------------------------------------------------------------------------------|-------|--------|
| G_TX1_2.4G  | 2.4GHz    | Rev 1.0 | Sends packets on two frequencies ~40 MHz apart in the 2.4 GHz band. | <p align="center">[![Preview](Images/GTX1_2.4G.gif)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Transmitters/Gemini%20Mode%20(Single%20Band)/G_TX1)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/G_TX1_2.4G.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FTransmitters%2FGemini%2520Mode%2520%28Single%2520Band%29%2FG_TX1" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">✅ Approved</p> |
| G_TX1_900M  | 900MHz    | Rev 1.0 | Sends packets on two frequencies ~10 MHz apart in the 900 MHz band. | <p align="center">[![Preview](docs/Images/GX_TX1_900M.png)](https://github.com/Paschalis/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Transmitters/Gemini%20Mode%20(Single%20Band)/G_TX1_900M)<br/><a href="https://paschalis.github.io/UAV-TelemetryLink/ibom/G_TX1_900M.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2FPaschalis%2FUAV-TelemetryLink%2Ftree%2Fmain%2FReceivers%2520and%2520Transmitters%2FTransmitters%2FGemini%2520Mode%2520%28Single%2520Band%29%2FG_TX1_900M" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">Draft</p> |

</div>


<div style="overflow-x:auto;">

## 4. Gemini Xrossband (GemX) Boards  

### RX Boards  

| Name  | Frequency        | Version | Features                                | Media | Status |
|-------|------------------|---------|-----------------------------------------|-------|--------|
| GX1   | 2.4GHz & 900MHz  | Rev 1.0 | Crossband receiver for 2.4GHz and 900MHz | <p align="center">[![Preview](Images/GX1.png)](https://github.com/your-repo/boards/GX1)<br/><a href="https://yourusername.github.io/your-repo/ibom/GX1.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fboards%2FGX1" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">Draft</p> |


### TX Boards  

| Name   | Frequency        | Version | Features                                      | Media | Status |
|--------|------------------|---------|----------------------------------------------|-------|--------|
| GX_TX1 | 2.4GHz & 900MHz  | Rev 1.0 | Crossband transmitter for 2.4GHz and 900MHz   | <p align="center">[![Preview](Images/GX_TX1.png)](https://github.com/your-repo/boards/GX_TX1)<br/><a href="https://yourusername.github.io/your-repo/ibom/GX_TX1.html" title="Open iBOM"><img src="https://camo.githubusercontent.com/bc5c83fb1cac5664c9e3bec8b7156b34375e57d408f5e6c0be80c819796e657b/68747470733a2f2f692e696d6775722e636f6d2f6a73346b444f6e2e706e67" width="35"/></a> <a href="https://kicanvas.org/?github=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fboards%2FGX_TX1" title="Open KiCanvas"><img src="https://kicanvas.org/images/kicanvas.png" width="35"/></a></p> | <p align="center">Draft</p> |

</div>



## Contributing

Feel free to contribute to this repository by submitting pull requests for new board designs or updates to existing ones.

## Acknowledgments

We would like to thank the following for making this project possible:

- **ELRS (ExpressLRS)**: High-performance, low-latency long-range communication for UAVs.  
- **mLRS (MAVLink Long Range System)**: MAVLink-based long-range telemetry and control extension for ELRS.  
- **MAVLink**: The essential protocol for UAV communication and mission control.  
- **QGroundControl (QGC)**: Open-source ground control software for UAV mission planning. 
- **OpenTX**: Open-source firmware for RC transmitters, enabling extensive customization and telemetry support.  
- **OpenI6X**: A custom OpenTX / EdgeTX port for the Flysky FS-i6X transmitter, expanding its capabilities and MAVLink support.   
- **Other Contributors**: Thanks to all who contributed feedback, bug fixes, and improvements.

These open-source tools and protocols are integral to the success of this project.

## License

This project is licensed under the following:

- **Hardware Designs**: MIT License - see the [LICENSE-HARDWARE](LICENSE-HARDWARE) file for details.
- **Firmware/Software**: GPLv3 License - see the [LICENSE-FIRMWARE](LICENSE-FIRMWARE) file for details.

> **Note:**  
> The firmware you flash onto the hardware uses the **ELRS** and **mLRS**, which are licensed under **GPLv3**. Any modifications or redistribution of the firmware must comply with the terms of the **GPLv3** license.

---

**Thank you for visiting UAV-TelemetryLink!**
