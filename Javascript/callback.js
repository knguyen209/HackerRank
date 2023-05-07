function spy(fun, callback) {
    callback();
    return fun;
}

function cb() {
    console.log("The callback has been called"); // This should print whenever Math.abs is called
}

Math.abs = spy(Math.abs, cb);

var result = Math.abs(-32);

// This should have printed 'The callback has been called'

console.log(result); // result should still be 32

function joinStr(str1, str2) {
    return str1 + " " + str2;
}

joinStr = spy(joinStr, cb);

var resultx = joinStr("Hello,", "World");
console.log(resultx);
