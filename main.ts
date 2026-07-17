function 敵の生成 () {
    敵 = game.createSprite(randint(0, 4), 0)
}
let 敵: game.LedSprite = null
敵の生成()
basic.forever(function () {
    敵.change(LedSpriteProperty.X, randint(-1, 1))
    basic.pause(500)
})
