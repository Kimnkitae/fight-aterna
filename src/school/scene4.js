export const SchoolGame = () => {

    loadSprite("Phone", "sprites/school/schoolGame.png")
    loadSprite("menu", "sprites/MonsterGame/scene0/Menu.png")
    loadFont("VMVSegaGenesis", "fonts/VMVSegaGenesis-Regular.otf")
    
    scene("scene4", () => {
        const phone = add([
            sprite("Phone"),
        ])

        const menu = add([
            sprite("menu", {
                width: 780,
                height: 400,
            }), 
            pos(570, 250),
        ])

        const buttonStart = add([
            text("START",
                {
                    size: 30,
                    font: "VMVSegaGenesis",
                }
            ),
            pos(1050, 300),
            "buttonStartTag",
            area(),
        ])

        onClick("buttonStartTag", () => {
            go("scenem1")
        })
    })
}