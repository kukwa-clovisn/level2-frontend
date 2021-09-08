
// let myObject = [
// 	 {
// 		name: "firstName",
// 		age: 33,
// 		level: "one"
// 	},
// 	 {
// 		name: "secondName",
// 		age: 44,
// 		level: "two"
// 	},
// 	 {
// 		name: "lastName",
// 		age: 55,
// 		level: "three"
// 	}
// ]
let div = document.getElementById('main');
div.innerHTML = "list of names";
let names = ["Kambang", "Sincliare", "Prince", "Julius", "Job"];
names.push("Bryan");
names.push("clovis")
let i = 0;
for(i = 0; i < names.length; i++) {
	div.innerHTML += "<p>" + names[i] + "</p>";
	console.log(names[i]);
}

// let div = document.createElement('DIV');
// document.body.appendChild(div);
// div.innerHTML = " this is awesome";
