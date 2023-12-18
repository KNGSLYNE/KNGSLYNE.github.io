let brush = document.getElementById("c1").getContext("2d")

let w = 400

let h = 400

let size = 20

let x = w/2 - size/2

let y = 0 

let dy = 5

let dx = 5

let jumpImpact = 10

let g = 1

let timer = null

let isLeft = false

let isRight = false

let isOnGround = false

 

let BulletX = x

let BulletY = y

let BulletDy = 30

let isFire = false

let BulletSize = 5

 

let obsticles = [[100,-50, 50, 50], [250, -50, 50, 50], [50, -50, 50, 50]]

let odx = 5

let ody = 5




document.addEventListener("keydown", onkeydown)

document.addEventListener("keyup", onkeyup)

drawBackground()

drawSquare()

 

function drawBullet (){

    brush.fillStyle = "#000000"

    brush.fillRect(BulletX, BulletY, BulletSize, BulletSize)

}

 

function drawObsticle(){

    brush.fillStyle = "00008b"

    for (let i = 0; i < obsticles.length; ++i) {

        let obsticle = obsticles[i]

        obsticle[1] = obsticle[1] + 2

        brush.fillRect(obsticle[0], obsticle[1], obsticle[2], obsticle[3])

 

    }

}

 

function drawFrame(){

    if (isFire){

        BulletY -= BulletDy

    } else {

        BulletX = x

        BulletY = y

    }

    if (BulletY < 0){

        isFire = false

    }

 

    dy += g

    y += dy 

    if (isLeft) {

        x -= dx

    }

   

    if (isRight){

        x += dx

    }

 

    if(y > h - size){

        y = h - size;

        dy = 0

        isOnGround = true

    } else {

        isOnGround = false

    }

    if (x <= 0) {

        x = 0

    }

    if (x >= w-size) {

        x = w-size

    }




    drawBackground()

    drawSquare()

    drawBullet()

    drawObsticle()

    processCollision()

}

function drawBackground () {

    brush.fillStyle = "#ffff00"

    brush.fillRect(0, 0, w, h)

}

 

function drawSquare (){

    brush.fillStyle = "#000000"

    if (x < 0){

        brush.fillRect(x, y, size, size) // left part

        brush.fillRect(w+x, y, size, size) // right part

    }

    else if (x > w - size ){

        brush.fillRect(x, y, size, size) //right part

        brush.fillRect(x-w, y, size, size) // left part

    }

    else {

        brush.fillRect(x, y, size, size)

    }

}

 

function onkeydown (e){

    if (e.key === "Enter"){

        clearInterval(timer)

        y = 400 - size

        timer = setInterval(drawFrame, 20)

    } else if (e.key === "ArrowLeft"){

        isLeft = true

       

    } else if (e.key === "ArrowRight"){

        isRight = true

    } else if (e.key === "ArrowUp"){

        if (isOnGround) {

            dy -= jumpImpact

 

        }

    } else if (e.key === "f"){

        isFire = true

    }

}

 

function onkeyup (e){

    if (e.key === "ArrowLeft"){

        isLeft = false

 

    } else if (e.key === "ArrowRight"){

        isRight = false

    } else if (e.key === " "){

}

}

 

function IsXyinRect(x, y, rx, ry, rw, rh){

    if (x > rx && x < rx + rw && y > ry && y < ry + rh){

        return true

    } else {

        return false

    }

 

}

function gameOver (){

    clearInterval(timerId)

    brush.fillStyle = "#000000"

    brush.textAlign = "center"

    brush.textBaseline = "top"

    brush.font = "30px Arial"

    brush.fillText ("GAME OVER", w/2, h/2)

}

function processCollision(){

    for(let i = 0; i < obsticles.length; ++i){

        let ob = obsticles[i]

        if (IsXyinRect(BulletX, BulletY,       ob[0],ob[1],ob[2],ob[3])){

            ob[1] = -50

 

        }

        if (ob[1] + ob[2] >= 400) {

            gameOver()

            break

 

        }

    }

 

}

