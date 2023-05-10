//Boolean
var IsBoolean = true;
console.log(IsBoolean);
//String
var a;
a = ["Nirnaya", "Namitha", "Samhitha", "Durga"];
for (var index in a) {
    console.log(a[index]);
}
// Any Datatype
var ab = ["Nirnaya", 21, 100.1];
for (var index in ab) {
    console.log(ab[index]);
}
//Heterogeneous String
var c;
c = ["Nirnaya", 21, "Namitha", "20"];
for (var index in c) {
    console.log(c[index]);
}
