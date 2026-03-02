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

        

        const mainCharacter = add([
            sprite("player-vs-schCurse"),
            pos(600,618),
            area(),
            body(),
            "player"
        ])

        let currentAnim = "idle"

        onKeyDown((key) => {
            WalkPlayer(mainCharacter, key, currentAnim)
        })

        onUpdate(() => {
            camPos(mainCharacter.pos)
        })
    })
}