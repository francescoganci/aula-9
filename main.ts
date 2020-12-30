input.onButtonPressed(Button.A, function () {
    Binário = "" + Binário + "1"
    Decimal = Decimal * 2 + 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(Binário)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showString("" + (Decimal))
    basic.pause(2000)
    basic.clearScreen()
    Binário = ""
    Decimal = 0
})
input.onButtonPressed(Button.B, function () {
    Binário = "" + Binário + "0"
    Decimal = Decimal * 2
})
let Decimal = 0
let Binário = ""
Binário = ""
Decimal = 0
basic.forever(function () {
	
})
