export const WalkPlayer = (player, key, animPos) => {
    
    if(key == "d" || key == "в") {
        player.flipX = false
        player.move(200, 0)
        if(animPos.anim !== "walkD") {
            player.play("walkD")
            animPos.anim = "walkD"
        }
    }
    if(key == "a" || key == "ф") {
        player.flipX = true
        player.move(-300, 0)
        if(animPos.anim !== "walkD") {
            player.play("walkD")
            animPos.anim = "walkD"
        }
    }
    onKeyRelease(["d", "в"], () => {
        player.play("idle")
        animPos.anim = "idle"
    })
    onKeyRelease(["a", "ф"], () => {
        player.play("idle")
        animPos.anim = "idle"
    })
}