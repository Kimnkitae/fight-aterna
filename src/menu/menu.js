import { ClickSound } from "../utils/soundclick"
export const Menu = () => {
    scene("sceneMenu", () => {
        const background = add([
            sprite("menu-background"),
        ])

        const bgdSound = play("soundbgdMenu", {
            loop: true,
            volume: 0.1,
        })

        bgdSound.stop()

        bgdSound.play()

        const menuClick = play("menuClick", {
            volume: 0.3,
        })
        menuClick.stop()

        const name = add([
            color(255,0,0),
            pos(635, 200),
            text("Fight Aterna", {
                size: 80,
                font: "StepovikSPBasic-Bold",
            })
        ])

        const buttonStart = add([
            color(0,0,0),
            pos(850, 450),
            text("НАЧАТЬ",
                {
                    size: 40,
                    font: "VMVSegaGenesis",
                }
            ),
            "buttonStartTag",
            area(),
        ])

        const buttonSettigns = add([
            color(0,0,0),
            pos(780, 650),
            text("НАСТРОЙКИ",
                {
                    size: 40,
                    font: "VMVSegaGenesis",
                }
            ),
            "buttonSettings",
            area(),
        ])

        const buttonExit = add([
            color(0,0,0),
            pos(850, 850),
            text("ВЫХОД",
                {
                    size: 40,
                    font: "VMVSegaGenesis",
                }
            ),
            "buttonExit",
            area(),
        ])

        onClick("buttonStartTag", () => {
            ClickSound("buttonStartTag", menuClick)
            bgdSound.stop()
            go("sceneMenuStartWarning")
        })

        onClick("buttonSettings", () => {
            ClickSound("buttonSettings", menuClick)
            bgdSound.stop()
            go("sceneSettings")
        })

        onClick("buttonExit", () => {
            ClickSound("buttonSettings", menuClick)
            bgdSound.stop()
            window.location.href = "/"
        })
    })
}
        
