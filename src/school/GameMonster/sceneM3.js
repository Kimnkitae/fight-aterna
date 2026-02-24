export const SceneM3 = () => {

    loadSprite("blockTop", "sprites/MonsterGame/scene3/blockTop.png")
    loadSprite("blockRight", "sprites/MonsterGame/scene3/blockRight.png")
    loadSprite("blockBottom", "sprites/MonsterGame/scene3/blockBottom.png")
    loadSprite("blockLeft", "sprites/MonsterGame/scene3/blockLeft.png")

    loadSprite("Phone", "sprites/school/schoolGame.png")
    loadSprite("player", "sprites/MonsterGame/player/playerSprite.png", {
        sliceX: 7,
        sliceY: 4,
        anims: {
            walkS: {from: 0, to: 5, loop: true },
            walkW: {from: 7, to: 13, loop: true },
            walkD: {from: 14, to: 19, loop: true },
            walkA: {from: 21, to: 26, loop: true },
        },
    })
    loadSprite("Collide", "sprites/MonsterGame/scene3/Collide.png")
    loadSprite("background3", "sprites/MonsterGame/scene4/background/background.png")

    scene("scenem3", () => {
        const phone = add([
            sprite("Phone"),
        ])

         const Collide = add([
            sprite("Collide", {
                width: 10,
                height: 400,
            }),
            pos(1320, 240),
            body(),
            area(),
            "Collide",
        ]) 

        
        const blockTop = add([
            sprite("blockTop"),
            pos(580, 360),
            area(),
            body({ isStatic: true}),
        ])

        const blockDown = add([
            sprite("blockBottom"),
            pos(580, 600),
            area(),
            body({ isStatic: true}),
        ])

        const blockLeft = add([
            sprite("blockLeft"),
            pos(580, 250),
            area(),
            body({ isStatic: true}),
        ])
        const background = add([
            sprite("background3", {
                width: 750,
                height: 400,
            }),
            pos(580, 240),
        ])

        const player = add([
            sprite("player", {
                width: 80,
                height: 80,
            }),
            pos(600, 400),
            area(),
            body(),
            "player",
        ])
        
        onKeyPress(["s", "ы"], () => {
            player.move(0, 2000)
            player.play("walkS")
        });
        onKeyPress(["w", "ц"], () => {
            player.move(0, -2000);
            player.play("walkW");
        });
        onKeyPress(["a", "ф"], () => {
            player.move(-2000, 0);
            player.play("walkA");
        });
        onKeyPress(["d", "в"], () => {
            player.move(2000, 0);
            player.play("walkD");
        });

        player.onCollide("Collide", () => {
            go("scenem4");
            
        })
    })
}