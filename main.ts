input.onPinPressed(TouchPin.P0, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(game.score())
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        sprite = game.createSprite(randint(0, 5), 0)
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        while (sprite.isTouching(Player)) {
            game.addScore(1)
            sprite.delete()
        }
        while (sprite.isTouchingEdge()) {
            sprite.delete()
        }
    }
})
let sprite: game.LedSprite = null
let Player: game.LedSprite = null
Player = game.createSprite(2, 5)
game.setScore(0)
basic.forever(function () {
	
})
