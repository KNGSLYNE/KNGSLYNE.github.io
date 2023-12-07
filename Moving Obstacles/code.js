document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("gameCanvas");
    const brush = canvas.getContext("2d");

    // Background
    brush.fillStyle = "white";
    brush.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    brush.fillStyle = "green";
    brush.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Obstacles
    const obstacles = [
        { x: 100, y: canvas.height - 80, width: 30, height: 30 },
        { x: 300, y: canvas.height - 100, width: 40, height: 40 },
        { x: 500, y: canvas.height - 60, width: 20, height: 20 },
        { x: 700, y: canvas.height - 120, width: 50, height: 50 }
        // Add more obstacles as needed
    ];

    function drawObstacles() {
        brush.fillStyle = "red";
        obstacles.forEach(obstacle => {
            brush.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        });
    }

    function updateObstacles() {
        obstacles.forEach(obstacle => {
            obstacle.x -= 2; // Move from right to left

            // Check if obstacle is outside the canvas from the left
            if (obstacle.x + obstacle.width < 0) {
                obstacle.x = canvas.width; // Re-enter through the right side
            }
        });
    }

    function draw() {
        // Clear canvas
        brush.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background
        brush.fillStyle = "white";
        brush.fillRect(0, 0, canvas.width, canvas.height);

        // Draw ground
        brush.fillStyle = "green";
        brush.fillRect(0, canvas.height - 50, canvas.width, 50);

        // Draw obstacles
        drawObstacles();

        // Update obstacle positions
        updateObstacles();
    }

    // Set up animation loop
    setInterval(draw, 20);
});
