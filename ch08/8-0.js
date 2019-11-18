console.log(square(2));
function square(x) {return x*x;}

// 함수 리터럴/Function 생성자/화살표 함수 표현식으로 정의한 함수는 변수에 할당한 후 사용할 수 있다.
var square = function(x) { return x*x; };
console.log(square(2));

// Function 생성자
var square2 = new Function("x", "return x*x");
console.log(square2(2));

//화살표 함수 표현식
var square3 = x => x*x;
console.log(square3(2));    