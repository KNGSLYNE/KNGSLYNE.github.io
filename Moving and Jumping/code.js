let canvas = document.getElementById("gameCanvas");
let brush = canvas.getContext("2d");

// Square properties
let square = {
    x: 190,
    y: 370,
    size: 20,
    dx: 5,
    dy: 0,
    gravity: 1,
    jumpForce: 15,
    isJumping: false,
    isOnGround: true,
    isMovingLeft: false,
    isMovingRight: false
};

// Event listeners for keyboard events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Main game loop
function gameLoop() {
    // Update the square position
    updateSquare();

    // Draw the updated game state
    drawGame();

    // Repeat the game loop
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

// Handle keydown events
function handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
        square.isMovingLeft = true;
    } else if (event.key === "ArrowRight") {
        square.isMovingRight = true;
    } else if (event.key === " " && square.isOnGround) {
        square.isJumping = true;
    }
}

// Handle keyup events
function handleKeyUp(event) {
    if (event.key === "ArrowLeft") {
        square.isMovingLeft = false;
    } else if (event.key === "ArrowRight") {
        square.isMovingRight = false;
    } else if (event.key === " ") {
        square.isJumping = false;
    }
}

// Update square position and state
function updateSquare() {
    // Apply gravity
    if (!square.isOnGround) {
        square.dy += square.gravity;
    }

    // Move left and right
    if (square.isMovingLeft) {
        square.x -= square.dx;
    }
    if (square.isMovingRight) {
        square.x += square.dx;
    }

    // Jumping
    if (square.isJumping && square.isOnGround) {
        square.dy = -square.jumpForce;
        square.isOnGround = false;
    }

    // Update square position
    square.y += square.dy;

    // Boundary conditions (wrap around canvas)
    if (square.x > canvas.width) {
        square.x = 0;
    } else if (square.x < 0) {
        square.x = canvas.width;
    }

    // Check if the square is on the ground
    if (square.y + square.size > canvas.height) {
        square.y = canvas.height - square.size;
        square.dy = 0;
        square.isOnGround = true;
    }
}

// Draw the current game state
function drawGame() {
    // Clear the canvas
    brush.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the square
    brush.fillStyle = "#FF0000";
    brush.fillRect(square.x, square.y, square.size, square.size);
}
