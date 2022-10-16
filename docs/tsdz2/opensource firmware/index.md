# OpenSource Firmwares

There are a number of (active) OpenSource Firmwares available for the TSDZ2 and different display combinations.
We've tried to needly structure the information specific to each of those firmwares in their respective subcatagories

## Firmware Comparison

There are, at the moment, 5 big firmware projects available:

### Casainho (Custom-Display)

One of the biggest projects, previously working on firmware in combination with the 860C/850C color and SW102 Displays, but currently it has moved to using it's own, fully opensource! DIY display.
Includes many features and improvements. The goal being featureset, rather than display compatibility, hence the choice for a custom display as well.

### Mspider65 (ESP32)

Has developed a special ESP32 "Man-in-the-middle" board, that sits between the (stock-compatible) display and allows connectivity using BlueThoot.
All of this using a custom firmware as well, which includes completely customly designed performance improvements to the motor

### Emmebrusa(stock-displays)

With Casainho dropping support for the stock-displays and mspider focusing on the ESP32 addon board, Emmebrusa continued working on compatible firmware for the original displays.
Meanwhile he has been hard at work to include many of the performance improvements from mspider as well.

### Emmebrusa(KT-LCD3)

Basically the same thing as the stock-display firmware from Emmebrusa, but this time for the KT-LCD3 displays.
*Please note that this might not work for more recently produced KT-LCD3 displays*

### Emmebrusa(860C)

With Casainho moving development to focus primarily on his OpenSource DIY display, Emmebrusa again kept at it. This time maintaining a great firmware for the 860c display.
Even porting many of the improvements from mspider65 and casainho's recent v1.1.0 firmwares.




