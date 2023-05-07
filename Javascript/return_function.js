function myFunc(a) {
    const printText = (s) => {
        console.log(a + " " + s);
    };

    return printText;
}

const printText = myFunc("Hey");
printText("Hello");
