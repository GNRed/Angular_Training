var directions;
(function (directions) {
    directions[directions["East"] = 0] = "East";
    directions[directions["West"] = 1] = "West";
    directions[directions["North"] = 2] = "North";
    directions[directions["South"] = 3] = "South";
})(directions || (directions = {}));
console.log(directions[0]);
console.log(directions[1]);
console.log(directions[2]);
console.log(directions[3]);
