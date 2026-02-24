export const SchoolAttack2 = () => {

    loadSprite("school-window-monster", "sprites/school/school-window-mosnter.png")
    

    scene("scene6", () => {
        const school = add([
            sprite("school-window-monster"),
        ])
    })
}