export const Settings = () => {

    loadSprite("settings-bgd", "sprites/menu/menu-settings-bgd.png")

    scene("sceneSettings", () => {
        
        const settingsBgd = add([
            sprite("settings-bgd"),
        ])

        const sound =add([
            color(0,0,0),
            pos(600, 200),
            text("ЗВУК", {
                size: 40,
                font:"VMVSegaGenesis",
            }),
        ])

        const back = add([
            pos(820, 900),
            color(0,0,0),
            text("НАЗАД", {
                size: 60,
                font:"VMVSegaGenesis",
            }),
            area(),
            "buttonBack"
        ])

        onClick("buttonBack", () => {
            go("sceneMenu")
        })
    })

}