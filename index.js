const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo,neigh, baa, oink, cluck] = farmAnimals.split(' ')
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let [bessie, , dolly,babe,little] = farmAnimals.split(' ')

let [blackAndWhite, ,black, pink]= farmAnimals.split(' ')

const [red, orange, yellow, green, blue, indigo, violet] = colors

let [r,o,y,g,b, ,v] =colors

let [ , , , , ,indg] = colors

let {muppetName, color,song,job,partner} = muppet

let {song2,song4} = nestedMuppet.album.theMuppetMovie;
let {nestedJob,nestedPartner} = nestedMuppet