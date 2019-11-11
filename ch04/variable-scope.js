var a = "global";

function f() {
    var a = "local";
    console.log(a);
    return a;
}

f();
console.log(a)
