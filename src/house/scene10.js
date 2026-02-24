export const House = () => {

    loadSprite("house", "sprites/school/house.png")
    

    scene("scene10", () => {
        const school = add([
            sprite("house"),
        ])
    })
}