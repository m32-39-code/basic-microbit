let X = 0
basic.forever(function () {
    X += 1
    basic.showNumber(X)
    if (X >= 9) {
        X = 0
        X += 1
        basic.showNumber(X)
    }
})
