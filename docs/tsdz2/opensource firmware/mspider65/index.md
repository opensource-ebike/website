# mspider65 (ESP32)

This project adds Bluetooth LE capabilities to the the TSDZ2 e-bike motor.

The project provides:

A new optimized TSDZ2 controller firmware
A small PCB board connected between the Motor Controller Board and the Display.
An Android application used to interact with the TSDZ2 Controller Firmware through the Bluetooth interface
Controller Firmware
My TSDZ2 Controller firmware was developed starting from the TSDZ Open source Firmware version 0.20.0-beta1 (the last Firmware released for the LCD3 display).

Compared to the initial firmware, I have added numerous changes that have significantly improved the responsiveness and efficiency of the motor.

The code has been speed optimized in many places and now the main loop that reacts to external inputs, runs four times faster (40 times per second instead of 10)

I added the possibility to enable the "Field Weakening" which allows the motor to provide assistance up to almost 120rpm.

The part that deals with the motor control has been completely redesigned and now the motor run quieter and cooler. See Optimized TSDZ2 Firmware for the details.

And many others small things....

Most of these improvements were then also imported by mbrusa in its TSDZ2 Firmaware version (https://endless-sphere.com/forums/viewtopic.php?f=30&t=110682)