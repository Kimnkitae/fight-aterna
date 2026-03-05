export const MenuStartWarning = () => {
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

         const warningText3 = add([
            pos(100, 600),
            text("А также F5 или перезагрузка ведёт к главному меню", {
                size: 34,
                font:"VMVSegaGenesis",
            }),
            color(255, 0, 0)
        ])

        wait(10, () => {
            go("scene1")
        })
    })
}