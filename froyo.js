let froyoorder = prompt(
  "Welcome to 5GuysFroyosAndFries! Please enter your froyo order. It should look like this: vanilla,chocolate"
);
let orderarray = froyoorder.split(",");

const allflavors = {};
function flavorcounter(array) {
  for (const flavor of array) {
    if (!(flavor in allflavors)) {
      allflavors[flavor] = 1;
    } else {
      allflavors[flavor] += 1;
    }
  }
  return allflavors;
}
flavorcounter(orderarray);
console.log("Thank you for your order! You have ordered the following: ");
function yourorder(objects) {
  let messages = [];
  for (const thing in objects) {
    let numberofflavors = objects[thing];
    if (numberofflavors === 1) {
      messages.push(` ${numberofflavors} ${thing} froyo`);
    } else {
      messages.push(` ${numberofflavors} ${thing} froyos`);
    }
  }
  return messages;
}
console.log(yourorder(allflavors).join());
