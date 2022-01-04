const people = [
  { name: "West", year: 1988 },
  { name: "Kite", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 }
];
console.log("Hi");

const comments = [
  { text: "Love this", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "This is an amazing adventure", id: 542328}
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
  const currentYear = (new Date()).getFullYear();
  if(currentYear - person.year >= 19) {
    return true;
  }
});
// const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({isAdult})

// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdult})

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423)
console.log(comment)

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423)
console.log(index)
// delete the comment with the ID of 823423