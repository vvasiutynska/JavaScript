var value = 10;
var result;

switch (unit) {
    case "km":
        result = value * 1000;
        console.log(value + " km is " + result + " m");
        break;
    case "hr":
        result = value * 60;
        console.log(value + " hr is " + result + " min");
        break;
    case "kg":
        result = value * 1000;
        console.log(value + " kg is " + result + " g");
        break;
    default:
        console.log("Unsupported unit.");
}
