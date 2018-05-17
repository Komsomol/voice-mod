**Voice Mod R&D**

Tech - JAM3 VAD library https://github.com/Jam3/voice-activity-detection

*Application Details*
- Uses mic to capture voice activity and animate a primitive mouth

*Notes*
- main.js is ES6 based might break on other browsers
- Works in Desktop Chrome/Safari
- vad.js is pure JS
- Safari / Chrome all have slightly different implementations which might need accounting for 
- Works on Safari 11.3.1 (iPhone 7)
- Works on Android 8.1.0 (Pixel 2)

*Current Issues*
- Microphone does not release on Safari 11.3.1 on stop record.