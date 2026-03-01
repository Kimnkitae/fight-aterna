export const WalkPlayer = (player, key, animPos) => {
    
    if(key == "d" || key == "в") {
        player.flipX = false
        player.move(200, 0)
        if(animPos !== "walkD") {
            player.play("walkD")
            animPos = "walkD"
        }
    }
    if(key == "a" || key == "ф") {
        player.flipX = true
        player.move(-300, 0)
        if(animPos !== "walkD") {
            player.play("walkD")
            animPos = "walkD"
        }
    }
    onKeyRelease(["d", "в"], () => {
        player.play("idle")
        animPos = "idle"
    })
    onKeyRelease(["a", "ф"], () => {
        player.play("idle")
        animPos = "idle"
    })
}