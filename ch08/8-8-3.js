function say(greetings, honorifics) {
    console.log(greetings + " " + honorifics + this.name);
}
var tom = {name: "Tom Sawyer"};
var 