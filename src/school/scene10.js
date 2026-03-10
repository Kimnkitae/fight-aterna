import { WalkPlayer } from "../utils/walkplayer"
export const SchoolAttack6 = () => {
    scene("scene10", () => {
        const bgd = add([
            sprite("school-koridor")
        ])

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
        ])

        const mainCharacter = add([
            sprite("player1"),
            pos(128, 620),
            area(),
            body(),
            "player"
        ])

        let currentAnim = {
            anim: "idle"
        }
        
        onKeyDown((key) => {
            WalkPlayer(mainCharacter, key, currentAnim)
        })




        /* ---------- FIGHT ---------- */

        
    })
}