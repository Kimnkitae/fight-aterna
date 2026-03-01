
export const Dialog = (object1, object2, dialogText, nextScene) => {
    let TextIndex = 0
    onCollide(object1, object2, () => {
            const e = add([
                sprite("button-e"),
                pos(1600, 600),
            ])
            e.play("animation")
            onCollideEnd(object1, object2, () => {
                destroy(e)
            })
            
            onKeyPress(["e", "у"], () => {
                destroy(e)

                

                const placeholderText = add([
                    sprite("placeholder"),
                ])

                const ObjectDialogText = add([
                    text(dialogText[0], 
                        {
                            width: 1920,
                            size: 20,
                            font: "VMVSegaGenesis",
                        }
                    ),
                    pos(20, 1000),
                ])
                
                const nextText = () => {
                    TextIndex++
                    if(TextIndex < dialogText.length) {
                        dialogText.text = dialogText[TextIndex]
                    } else {
                        go(nextScene)
                    }
                }
                
                onKeyPress(["space", "enter"], nextText)
                onClick(nextText)
            })
        })
}