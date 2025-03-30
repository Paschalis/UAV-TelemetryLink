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

## Related Projects

**FC Plus Sensor Module** is a modular add-on board for UAV flight controllers, offering advanced features such as telemetry, GPS, object avoidance (ToF, Sonar, IR), and LED indicators for status feedback. This repository includes comprehensive documentation, hardware setup instructions, sensor integration guides, and communication protocols (LoRa/WiFi) to improve UAV autonomy, safety, and performance.

<div align="center">


[![FC Plus Sensor Module](https://img.shields.io/badge/📡%20FC--Plus--Sensor--Module-Visit%20Now!-orange?style=for-the-badge)](https://github.com/Paschalis/fc-plus-sensor-module)              
[![Stars](https://img.shields.io/github/stars/Paschalis/fc-plus-sensor-module?label=🌟%20Stars&style=for-the-badge&color=yellow)](https://github.com/Paschalis/fc-plus-sensor-module/stargazers) [![Forks](https://img.shields.io/github/forks/Paschalis/fc-plus-sensor-module?label=🍴%20Forks&style=for-the-badge&color=blue)](https://github.com/Paschalis/fc-plus-sensor-module/network/members) [![Activity](https://img.shields.io/github/last-commit/Paschalis/fc-plus-sensor-module?label=⏳%20Last%20Update&style=for-the-badge&color=green)](https://github.com/Paschalis/fc-plus-sensor-module/commits/main)

</div>

Explore more about the **FC Plus Sensor Module** and its integration into UAV systems by clicking on the badge above to access the full documentation and setup guide.
# Board Designs Overview

This repository contains a collection of designs for RX and TX boards under different transmission modes. More details about the transmission modes can be found in the [Transmission Modes Classification](Receivers%20and%20Transmitters/README.md).

<p align="center">
    <a href="https://TeodoraMiu.github.io/UAV-TelemetryLink/" target="_blank">
        <img src="https://img.shields.io/badge/Visit_UAV_Telemetry_Link_Site-4C8F9F?style=for-the-badge&logo=github&logoColor=white&color=4C8F9F" alt="Visit UAV Telemetry Link Site">
    </a>
</p>

## 1. Antenna Diversity Boards

### RX Boards
| Name        | Frequency | Features                        | Preview |
|------------|----------|--------------------------------|---------|
| AD1_2.4G | 2.4GHz   |Basic diversity setup    | [![Preview](Images/AD1_2.4G.gif)](https://github.com/TeodoraMiu/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/Antenna%20Diversity/RX/ExpressLRS_2.4GHz/AD1_2.4G)  <p align="center"> Click on the image to view the files </p>|
| AD2_900M  | 900MHz   | | ![Preview](Images/AD2_900M.png) |

## 2. True Diversity or Full Diversity Boards

### RX Boards
| Name        | Frequency | Features                        | Preview |
|------------|----------|--------------------------------|---------|
| TD1_2.4G | 2.4GHz   | Full diversity with improved range | [![Preview](Images/TD1_2.4G.gif)](https://github.com/TeodoraMiu/UAV-TelemetryLink/tree/main/Receivers%20and%20Transmitters/True%20Antenna%20Diversity/ExpressLRS_2.4GHz/TD1_2.4G)  <p align="center"> Click on the image to view the files </p> |
| TD2_900M  | 900MHz   | | ![Preview](Images/TD2_900M.png) |

## TX Boards (Shared for Single Antenna, Antenna Diversity & True Diversity)

> **Note:**  
> The TX boards listed in this section are shared across **Single Antenna Mode, Antenna Diversity, and True Diversity** configurations.  
> - These boards are **not duplicated** under each diversity category to avoid redundancy.  
> - They are optimized for their respective frequencies (**2.4GHz** & **900MHz**) and ensure compatibility across all three configurations.  
> - **Gemini Mode (GM) and Gemini Xrossband (GemX) have their own TX boards**, so they are listed separately in their respective sections.  

| Name      | Frequency | Features                                                                 | Preview |
|----------|----------|---------------------------------------------------------------------------|---------|
| TX1_2.4G | 2.4GHz   | Basic transmitter with no OLED display or TX Backpack.                  | [![Preview](Images/TX1.png)](https://github.com/your-repo/boards/TX1_2.4G) |
| TX2_2.4G | 2.4GHz   | Includes SSD1306 OLED display, but no TX Backpack.        | [![Preview](Images/TX2.png)](https://github.com/your-repo/boards/TX2_2.4G) |
| TX3_2.4G | 2.4GHz   | Features both SSD1306 OLED display and TX Backpack for GCS communication. | [![Preview](Images/TX3.png)](https://github.com/your-repo/boards/TX3_2.4G) |
| TX1_900M | 900MHz   | Robust transmitter for 900MHz | ![Preview](Images/TX1_900M.png) |

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

### TX Boards  
| Name   | Frequency            | Features                                      | Preview                                                       |
|--------|----------------------|----------------------------------------------|------------------------------------------------------------|
| G_TX1 | 2.4GHz     | Transmitter for 2.4GHz  | [![Preview](Images/GX_TX1.png)](https://github.com/your-repo/boards/GX_TX1) |
| G_TX2 | 900MHz      | Transmitter for 900MHz | [![Preview](Images/GX_TX1.png)](https://github.com/your-repo/boards/GX_TX1) |


## 4. Gemini Xrossband (GemX) Boards  

### RX Boards  
| Name  | Frequency            | Features                                | Preview                                                       |
|-------|----------------------|-----------------------------------------|------------------------------------------------------------|
| GX1   | 2.4GHz & 900MHz      | Crossband receiver for 2.4GHz and 900MHz | [![Preview](Images/GX1.png)](https://github.com/your-repo/boards/GX1) |

### TX Boards  
| Name   | Frequency            | Features                                      | Preview                                                       |
|--------|----------------------|----------------------------------------------|------------------------------------------------------------|
| GX_TX1 | 2.4GHz & 900MHz      | Crossband transmitter for 2.4GHz and 900MHz | [![Preview](Images/GX_TX1.png)](https://github.com/your-repo/boards/GX_TX1) |


## Contributing

Feel free to contribute to this repository by submitting pull requests for new board designs or updates to existing ones.

## Acknowledgments

We would like to thank the following for making this project possible:

- **ELRS (ExpressLRS)**: High-performance, low-latency long-range communication for UAVs.  
- **mLRS (MAVLink Long Range System)**: MAVLink-based long-range telemetry and control extension for ELRS.  
- **MAVLink**: The essential protocol for UAV communication and mission control.  
- **QGroundControl (QGC)**: Open-source ground control software for UAV mission planning.  
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
