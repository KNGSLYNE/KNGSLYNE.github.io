let canvas1 = document.getElementById("c1");
let painter1 = canvas1.getContext("2d");
painter1.fillStyle = "#FF0000";
painter1.fillRect(10, 10, 20, 20);
let count1 = 1;
let x1 = 10;
let y1 = 10;
while (count1 < 13) {
    y1 += 30;
    painter1.fillRect(x1, y1, 20, 20);
    count1++;
}
let canvas2 = document.getElementById("c2");
let painter2 = canvas2.getContext("2d");
painter2.fillStyle = "#FF0000";
painter2.fillRect(10, 10, 20, 20);
for (let count2 = 1; count2 < 13; count2++) {
    x2 = 10 + 30 * count2;
    painter2.fillRect(x2, 10, 20, 20);
}