export const SchoolAttack3 = () => {

    loadSprite("school-window", "sprites/school/school-window.png")
    

    scene("scene7", () => {
        const school = add([
            sprite("school-window"),
        ])
    })
}