// import Data from "./server.js";
import { usernames , emails, genders} from "./server.js";

// let users = [];


// for (let i = 0; i < usernames.length;  i++) {
// let	usersnames = {
// 			name: usernames[i],
// 			email: emails[i],
// 			gender: genders[i]
// 		}
// 	users.push(usersnames);
// console.log(users)
// }      



// // let i=0;
// // while( i < usernames.length) {
// // 	let user = {
// 	name: usernames[i],
// 	email: emails[i],
// 	gender: genders[i]
// }
// // }

// users.push(usersnames);

// 	console.log(users);
// 	console.log(users[4])

/*======================================================================================================>MAP METHOD============>
using a map function to solve the same for loop pb
the map returns the data in an array thats a new array
the map takes in two things which are the item and the index or the counter
the for loop, while loop and foreach changes and updates the state of ur arrayy while the map returns a new array but doesnt change the state nor updates ur array
*/
let users = usernames.map((item, index) => {
	let user = {
		name: usernames[index],
		email: emails[index],
		gender: genders[index]
	}
	return user;
})

console.log(users);