let brighthth = 0
let temraeggture = 0
let degreez = 0
input.onButtonPressed(Button.A, function () {
    brighthth = input.lightLevel()
    if (brighthth < 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    temraeggture = input.temperature()
    if (temraeggture < 37) {
        basic.showString("safe :DDDD")
    } else {
        basic.showString("oof :CCCCC")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(100)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.pause(100)
    }
    basic.pause(100)
    for (let index = 0; index < 3; index++) {
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(100)
    }
    basic.pause(100)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Eighth))
        basic.pause(100)
    }
    basic.pause(100)
})
input.onGesture(Gesture.Shake, function () {
    degreez = input.compassHeading()
    if (degreez < 45 && degreez > 135) {
        basic.showArrow(ArrowNames.North)
        basic.showString("n")
    } else if (degreez < 135) {
        basic.showString("e")
        basic.showArrow(ArrowNames.East)
    } else if (degreez < 225) {
        basic.showArrow(ArrowNames.South)
        basic.showString("s")
    } else {
        basic.showArrow(ArrowNames.West)
        basic.showString("w ")
    }
})
