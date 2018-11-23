let display = "";

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        if (j == 9) {
            display += i * j + "\n";
        } else {
            display += i * j + " ";
        }
    }
}

console.log(display);