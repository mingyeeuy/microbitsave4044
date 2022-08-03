input.onButtonPressed(Button.A, function () {
    while (true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(500)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 8, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 360)
music.setVolume(197)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
})
