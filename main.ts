Freenove.Initialization(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2)
basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        Freenove.Show_Number(9 - index)
        basic.pause(500)
    }
})
