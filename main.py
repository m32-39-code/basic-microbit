X = 0

def on_forever():
    global X
    X += 1
    basic.show_number(X)
    if X < 9:
        X += 1
        basic.show_number(X)
basic.forever(on_forever)
