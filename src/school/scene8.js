export const SchoolAttack4 = () => {

    loadSprite("school-classroom", "sprites/school/school-fight.png")
    loadSprite("school-fight-floor", "sprites/school/school-fight-floor.png")
    loadSprite("player-vs-schCurse", "sprites/main-character/player.png", {
        sliceX: 9,
        sliceY: 1,
        anims: {

            idle: {from: 0, to: 0},

            walkD: {from: 1, to: 8, loop: true, speed: 10},
        },
    })
    

    scene("scene8", () => {
        const school = add([
            sprite("school-classroom"),
        ])

        const schoolFloor = add([
            sprite("school-fight-floor"),
            area(),
            body({ isStatic: true }),
            pos(100,220)

        ])

        const mainCharacter = add([
            sprite("player-vs-schCurse"),
            pos(600,618),
            area(),
            body(),
            "player"
        ])

        let currentAnim = "idle"

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

        onKeyRelease(["d", "в"], () => {
            mainCharacter.play("idle")
            currentAnim = "idle"
        })
        
        onKeyRelease(["a", "ф"], () => {
            mainCharacter.play("idle")
            currentAnim = "idle"
        })

        onKeyDown((key) => {
            WalkPlayer(key)
        })

        onUpdate(() => {
            camPos(mainCharacter.pos)
        })
    })
}