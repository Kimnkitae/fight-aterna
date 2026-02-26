const nextText = (text, dialogText, TextIndex,) => {
    const dialogText = add([
        text(textWithPa[0], 
            {
                width: 1920,
                size: 20,
                font: "VMVSegaGenesis",
            }
            ),
            pos(20, 1000),
        ])
    TextIndex++
    if(TextIndex < text.length) {
        dialogText.text = text[TextIndex]
    } else {
        hospitalSound.stop()
        hospitalSound2.stop()
        go(scene)
        }
    }
                
    onKeyPress(["space", "enter"], nextText)
    onClick(nextText)