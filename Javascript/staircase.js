function staircase(n) {
    for (let i = 1; i <= n; i++) {
        var str = "";
        str += Array(n + 1 - i).join(" ");
        str += Array(i + 1).join("#");
        console.log(str);
    }
}

// staircase(6);

let n = 5;
console.log(Array(n + 1).join("#")); // repeat a character for n times
