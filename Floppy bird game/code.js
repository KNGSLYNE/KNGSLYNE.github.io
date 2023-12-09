document.addEventListener('DOMContentLoaded', function () {
    var block = document.getElementById("block");
    var hole = document.getElementById("hole");
    var character = document.getElementById("character");
    var jumping = 0;
    var counter = 0;

    hole.addEventListener('animationiteration', () => {
        var random = Math.random() * 3;
        var top = (random * 100) + 150;
        hole.style.top = -top + "px";
        counter++;
    });

    document.addEventListener('keydown', handleKeyPress);

    setInterval(function () {
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumping == 0) {
            character.style.top = (characterTop + 3) + "px";
        }
        var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var cTop = -(500 - characterTop);
        if (characterTop > 480 || (blockleft < 20 && blockleft > -50 && (cTop < holeTop || cTop > holeTop + 130))) {
            alert("Game over. Score:" + counter);
            character.style.top = 100 + "px";
            counter = 0;
        }
    }, 10);

    function handleKeyPress(event) {
        if (event.keyCode === 32) { // Check if the pressed key is the space bar (key code 32)
            jump();
        }
    }

    function jump() {
        if (jumping === 0) {
            jumping = 1;
            let jumpCount = 0;
            var jumpInterval = setInterval(function () {
                var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
                if (characterTop > 6 && jumpCount > 15) {
                    character.style.top = (characterTop - 5) + "px";
                }
                if (jumpCount > 20) {
                    clearInterval(jumpInterval);
                    jumping = 0;
                    jumpCount = 0;
                }
                jumpCount++;
            }, 10);
        }
    }
});
