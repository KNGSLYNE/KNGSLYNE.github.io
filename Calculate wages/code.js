function get_money() {
    let normal_rate = document.getElementById("d2").valueAsNumber
    let overtime_rate = document.getElementById("d3").valueAsNumber
    let hours_worked = document.getElementById("d4").valueAsNumber
    let normal_hours = document.getElementById("d1").valueAsNumber
    /* write a peice of code to get the money earned today*/
    let money
    if (hours_worked <= normal_hours) {
        money = hours_worked * normal_rate
    } else {
        money = hours_worked*normal_hours
        money += (hours_worked-normal_hours)*overtime_rate
    }
        document.getElementById("result").innerHTML = money;
    }