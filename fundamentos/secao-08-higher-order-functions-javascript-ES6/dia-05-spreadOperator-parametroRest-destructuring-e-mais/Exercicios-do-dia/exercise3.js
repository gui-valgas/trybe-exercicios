const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// let {name, age, likes, nationality} = alex
// const {name, age, likes, nationality} = gunnar

const personLikes = (...param) => {
  return `${name} is ${age} years old and likes ${likes.join(', ')}`
}

console.log(personLikes(gunnar))
console.log(personLikes(alex))