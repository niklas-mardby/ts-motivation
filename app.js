// function, array, object

const FLAG_ALL = "all";
const state = {
	name: "TS-motivation",
	version: 1.1,
	description: "A program to show JS and why TS is good fun!",
};

const prettyPrintAppInfo = (flag) => {
	if (flag === "all") {
		console.log(`
        Software: ${state.name}
        Version: ${state.version}
        Description: ${state.description}`);
	} else console.log(`Software: ${state.name}`);
};

prettyPrintAppInfo(FLAG_ALL);

const addStuff = (x, y) => {
	if (typeof x === "number" && typeof y === "number")
		console.log(`Sum of ${x} and ${y} is ${x + y}.`);
	else console.log("Error! Arguments are not numbers ");
};

addStuff(1, 2);

addStuff(1);
addStuff();

addStuff(true, true);
addStuff("a", 5);
