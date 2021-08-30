export default function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.numWords = function () {
  return this.body.split(" ").length;
}

Entry.prototype.numVowels = function () {
  // let temp = [];
  // for(let i = 0; i< this.body.length; i++) {
  //   if (/[aeiou]/gi.test(char)) {
  //     temp.push(char);
  //   }
  // }
  // return temp.join("").length

  // let temp = "";
  // for(let i = 0; i< this.body.length; i++) {
  //   if (/[aeiou]/gi.test(char)) {
  //     temp += (char);
  //   }
  // }
  // return temp.length

  // return this.body.split("").filter(char => ["a","e","i","o","u"].includes(char));
  // return this.body.split("").filter(char => /[aeiou]/gi.test(char));
  return this.body.match(/[aeiou]/gi);
}

Entry.prototype.numConsonants = function () {

}