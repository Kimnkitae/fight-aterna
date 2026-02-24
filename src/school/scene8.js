export const SchoolAttack4 = () => {

    loadSprite("school-classroom", "sprites/school/school-classroom.png")
    

    scene("scene8", () => {
        const school = add([
            sprite("school-classroom"),
        ])
    })
}