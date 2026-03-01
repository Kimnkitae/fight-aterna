export const MenuStartWarning = () => {

    loadSprite("warning", "sprites/menu/menu-start-warning.png")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")

    scene("sceneMenuStartWarning", () => {

        const warning = add([
            sprite("warning"),
            
        ])

        const warningText1 = add([
            pos(500, 400),
            text("ПРЕДУПРЕЖДЕНИЕ!", {
                TextAlign: "center",
                size: 60,
                font:"VMVSegaGenesis",
            }),
            color(255, 0, 0)
        ])
        
        const warningText2 = add([
            pos(300, 500),
            text("В игре нет сохранений!", {
                size: 60,
                font:"VMVSegaGenesis",
            }),
            color(255, 0, 0)
        ])

        
        wait(7, () => {
            go("scene1")
        })
    })
}