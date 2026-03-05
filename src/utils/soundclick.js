export const ClickSound = (object, music) => {
    onClick(object, () => {
        music.play()
    })
}
    
