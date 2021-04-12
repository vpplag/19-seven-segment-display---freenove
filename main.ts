let number = 0
Freenove.Initialization(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2)
basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        number = 9 - index
        Freenove.Show_Number(number)
        basic.showNumber(number)
        basic.pause(500)
    }
})
