namespace SpriteKind {
    export const DOOR = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.DOOR, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "ESCAPE: SUCCESS")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.setGameOverMessage(false, "YOU DYE!!!")
    game.gameOver(false)
})
game.showLongText("RUN!!!", DialogLayout.Left)
let mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`level2`)
let myEnemy = sprites.create(assets.image`BLOOD GHOST`, SpriteKind.Enemy)
tiles.placeOnRandomTile(myEnemy, sprites.dungeon.floorDark3)
myEnemy.follow(mySprite, 90)
let MYDOOR = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f f f . . 
    . . . . . . f e e e f e e e f . 
    . . . . . . f e e e f e e e e f 
    . . . . . f e e e e f e e e e e 
    . . . . . f e e e e f e e e e e 
    . . . . f e e e e e f e e e e e 
    . . . . f e e e e e f e e e e e 
    . . . . f e e e e e f e e e e e 
    . . . . f e e 5 5 e f e 5 5 e e 
    . . . . f e e 5 5 e f e 5 5 e e 
    . . . . f e e e e e f e e e e e 
    . . . . f e e e e e f e e e e e 
    . . . . f e e e e e f e e e e e 
    . . . . f e e e e e f e e e e e 
    `, SpriteKind.DOOR)
tiles.placeOnRandomTile(MYDOOR, sprites.dungeon.floorDarkDiamond)
