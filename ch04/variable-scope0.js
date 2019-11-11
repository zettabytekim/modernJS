// 함수 안에서 변수 선언 생략하면 전역 변수로 선언됨
function f() {
    a = "local";
    console.log(a);
    return a;
}

f();
console.log(a)
