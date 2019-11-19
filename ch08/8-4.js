function f(x, y) {
    arguments[1] = 3;
    console.log("x = " + x + ", y = " + y);
}
f(1, 2);