export const Prolog = () => {

    loadSprite("bgd-hospital", "sprites/prolog/background/hospital.png")
    loadSprite("floor-hospital", "sprites/prolog/background/hospital-floor.png")
    loadSprite("left-wall-hospital", "sprites/prolog/background/hospital-left-wall.png")
    loadSprite("right-wall-hospital", "sprites/prolog/background/hospital-right-wall.png")
    loadSprite("hospital-grandfather", "sprites/prolog/background/hospital-grandfather.png")
    loadSprite("button-e", "sprites/prolog/BUTTON/e/button-e.png", {
        sliceX: 10,
        sliceY: 1,
        anims: {
            animation: {from: 0, to: 9, loop: true}
        }
    })
    
    /* PLAYER */
    
    loadSprite("player", "sprites/main-character/player.png", {
        sliceX: 9,
        sliceY: 1,
        anims: {

            idle: {from: 0, to: 0},

            walkD: {from: 1, to: 8, loop: true, speed: 10},
        },
    })

    scene("scene1", () => {

        const hospital = add([
            sprite("bgd-hospital"),
        ])

        const hospitalFloor = add([
            sprite("floor-hospital"),
            pos(0, 950),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])

        const hospitalLeftWall = add([
            sprite("left-wall-hospital"),
            pos(0, 225),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])

        const hospitalright_wall = add([
            sprite("right-wall-hospital"),
            pos(1800, 260),
            area(),
            fixed(),
            body({ isStatic: true }),
        ])

        const hospitalDed = add([
            sprite("hospital-grandfather"),
            pos(1480, 700),
            area(),
            body(),
            body({ isStatic: true}),
            "grandpa",
        ])

        /* PLAYER */
        let currentAnim = "idle"
        
        const mainCharacter = add([
            sprite("player"),
            pos(600,618),
            area(),
            body(),
            "player"
        ])

        const WalkPlayer = (key) => {
            if(key == "d" || key == "в") {
                mainCharacter.flipX = false
                mainCharacter.move(200, 0)
                if(currentAnim !== "walkD") {
                    mainCharacter.play("walkD")
                    currentAnim = "walkD"
                }
            }
            if(key == "a" || key == "ф") {
                mainCharacter.flipX = true
                mainCharacter.move(-300, 0)
                if(currentAnim !== "walkD") {
                    mainCharacter.play("walkD")
                    currentAnim = "walkD"
                }
            }
            
        }

        onKeyDown((key) => {
            WalkPlayer(key)
        })

        onKeyRelease(["d", "в"], () => {
            mainCharacter.play("idle")
            currentAnim = "idle"
        })

        onKeyRelease(["a", "ф"], () => {
            mainCharacter.play("idle")
            currentAnim = "idle"
        })




        onCollide("player", "grandpa", () => {
            const e = add([
                sprite("button-e"),
                pos(1600, 600),
            ])
            e.play("animation")
            onCollideEnd("player", "grandpa", () => {
                destroy(e)
            })
        })
    })
}