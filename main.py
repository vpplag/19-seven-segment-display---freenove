Freenove.initialization(DigitalPin.P0, DigitalPin.P1, DigitalPin.P2)

def on_forever():
    for index in range(10):
        Freenove.Show_Number(index)
        basic.pause(500)
basic.forever(on_forever)
