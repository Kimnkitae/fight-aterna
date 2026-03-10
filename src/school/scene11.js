export const SchoolAttack7 = () => {
    scene("scene11", () => {
        
        const catScene = add([
            sprite("schoolEnd")
        ])

        wait(2, () => {
            go("end")
        })
        
    })
}