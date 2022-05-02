const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 let members = ['Amelia',
 null,
 undefined,
 'Ruby',
 'Lily',
 11,
 'Grace',
 22,
 'Millie',
 'Daisy',
 true,
 'Freya',
 false,
 'Erin',
 new Set([1, 2, 3, 4, 5]),
 'Megan',
 {
     'John': 'Smith'
 },
 'Jasmine',
 1,
 2,
 3,
 4,
 5,
 'Brooke',
];

function createDreamTeam(members) {
  let result = false;
  members.filter(item => /^[a-zA-Z\u00C0-\u00ff]+$/.test(item));
  members.sort();
  console.log(members);
  /*for (let i = 0; i < members.length; i++) {
      if (members[i]) {
          if (onlyLetters = /^[a-zA-Z\u00C0-\u00ff]+$/.test(members[i])) {
              console.log(members[i]);
              let team = (members[i]); //.trim();
              result += team[0].toLocaleUpperCase();
          }
      }
  }
  return result;*/ 
  
  
  
  for(word of members) {
     console.log(word);
   }
  return;
}

/*console.log(
  createDreamTeam([
    "Peter",
    "Adam",
    "Gary",
    "Bobby",
    "Philip",
    "Andrea",
    "Evelyn",
    "Evelyn",
    "Kimberly",
    "Denise",
  ])
);*/
//createDreamTeam();
console.log(createDreamTeam(members) + '   ABDEFGJLMMR');
module.exports = {
  createDreamTeam,
};
