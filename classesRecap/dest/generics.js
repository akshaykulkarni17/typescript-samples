"use strict";
const input = document.querySelector("#username");
input.value = "55";
const btn = document.querySelector(".btn");
function identity(item) {
    return item;
}
console.log(identity(7));
console.log(identity("yee"));
console.log(identity(true));
console.log(identity({ name: "kuch", last: "kuch" }));
const cat = {
    name: "lucy"
};
console.log(identity(cat));
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const mergedObj = merge({ name: "cold" }, { pets: ["cat", "dog"] });
console.log(mergedObj);
function makeEmptyArray() {
    return [];
}
const num = makeEmptyArray();
const str = makeEmptyArray();
