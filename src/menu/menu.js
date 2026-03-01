export const Menu = () => {

    loadSprite("menu-background", "sprites/menu/menu.png")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    loadFont("StepovikSPBasic-Bold", "fonts/StepovikSPBasic-Bold.otf")

    scene("sceneMenu", () => {
        const background = add([
            sprite("menu-background"),
        ])

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
            go("sceneMenuStartWarning")
        })

        onClick("buttonSettings", () => {
            go("sceneSettings")
        })

        onClick("buttonExit", () => {
            window.location.href = "/"
        })
    })
}
        
