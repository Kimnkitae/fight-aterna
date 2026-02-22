export const SchoolAttack = () => {

    loadSprite("school", "sprites/school/school.png")

    scene("scene5", () => {
        const school = add([
            sprite("school"),
        ])
    })
}