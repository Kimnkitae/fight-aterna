import { WalkPlayer } from "../utils/walkplayer.js"
export const SchoolAttack4 = () => {
    scene("scene8", () => {
        const school = add([
            sprite("school-classroom"),
            "school"
        ])

        const schoolFloor = add([
            sprite("school-fight-floor"),
            pos(0, 900),
            area(),
            body(),
        ])

        const mainCharacter = add([
            sprite("player1"),
            pos(600,618),
            area(),
            body(),
            "player"
        ])

        const labelText = mainCharacter.add([
            sprite("placeholder2", {
                width: 400,
                height: 50,
            }),
            pos(-100, -30),
            area(),
            body(),
        ])

         const label = mainCharacter.add([
            text("(Надо бежать к пожарному выходу!!!)",
                 {
                    width: 500,
                    size: 16,
                    font: "VMVSegaGenesis"
                 }),
            pos(-100, -40),
        ])
    
    
        wait(2, () => {
            destroy(label)
            destroy(labelText)
        })

       let currentAnim = {
            anim: "idle"
        }

        onKeyDown((key) => {
            WalkPlayer(mainCharacter, key, currentAnim)
        })

        const CollideLeftWall = add([
            sprite("blockSchClss", {
                width: 10,
                height: 1080
            }),
            pos(-20, 0),
            area(),
            body({ isStatic: true })
        ])
        const CollideRightWall = add([
            sprite("blockSchClss", {
                width: 10,
                height: 1080
            }),
            pos(1920, 0),
            area(),
            body({ isStatic: true }),
            "RightWall"
        ])

        mainCharacter.onCollide("RightWall", () => {
            go("scene9")
        })
    })
}