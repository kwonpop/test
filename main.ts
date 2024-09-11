input.onButtonPressed(Button.A, function () {
    if (비행기좌측 > 0) {
        led.plot(비행기좌측 - 1, 4)
        비행기좌측 = 비행기좌측 - 1
        led.unplot(비행기우측, 4)
        비행기우측 = 비행기우측 - 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (비행기우측 < 4) {
        led.plot(비행기우측 + 1, 4)
        비행기우측 = 비행기우측 + 1
        led.unplot(비행기좌측, 4)
        비행기좌측 = 비행기좌측 + 1
    }
})
let 비행기우측 = 0
let 비행기좌측 = 0
led.plot(3, 4)
led.plot(4, 4)
비행기좌측 = 3
비행기우측 = 4
led.plot(0, 0)
led.plot(0, 1)
let 미사일뒤 = 0
let 미사일앞 = 1
let 미사일X = 0
basic.forever(function () {
    if (미사일뒤 < 4) {
        led.plot(미사일X, 미사일앞 + 1)
        미사일앞 = 미사일앞 + 1
        led.unplot(미사일X, 미사일뒤)
        미사일뒤 = 미사일뒤 + 1
    } else {
        led.unplot(미사일X, 미사일뒤)
        led.unplot(미사일X, 미사일앞)
        미사일X = randint(0, 4)
        미사일뒤 = 0
        미사일앞 = 1
        led.plot(미사일X, 미사일뒤)
        led.plot(미사일X, 미사일앞)
    }
    if (미사일X == 비행기좌측 || 미사일X == 비행기우측) {
        if (미사일앞 == 4) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
    basic.pause(200)
})
