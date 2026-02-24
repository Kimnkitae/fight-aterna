export const WalkPlayer = (player, key) => {

   let currentAnim = "idle"

    
    if(key == "d" || key == "в") {
        player.flipX = false
        player.move(200, 0)
    }
    else if(currentAnim !== "walkD") {
            player.play("walkD")
            currentAnim = "walkD"
    }
        
    else if(key == "a" || key == "ф") {
        player.flipX = true
        player.move(-300, 0)
    }
    else if(currentAnim !== "walkD") {
            player.play("walkD")
            currentAnim = "walkD"
    }
    

    onKeyRelease(["d", "в"], () => {
        player.play("idle")
        currentAnim = "idle"
    })
    
    onKeyRelease(["a", "ф"], () => {
        player.play("idle")
        currentAnim = "idle"
    })
}