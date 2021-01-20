const users = [
  {
    _id: '600692d538036b96d9555bb8',
    index: 0,
    guid: '1b398134-887a-4f92-9492-0e68c1687678',
    isActive: false,
    balance: '$1,081.95',
    picture: 'http://placehold.it/32x32',
    age: 35,
    eyeColor: 'blue',
    name: 'Ballard Hubbard',
    company: 'VALPREAL',
    gender: 'male',
    email: 'ballardhubbard@valpreal.com',
    phone: '+7 (955) 437-3631',
    address: '756 Linden Street, Hinsdale, Kansas, 3490',
  },
  {
    _id: '600692d567319f84e747a623',
    index: 1,
    guid: 'd442c962-759e-4c22-89d5-d5ef60994ed0',
    isActive: true,
    balance: '$3,882.54',
    picture: 'http://placehold.it/32x32',
    age: 31,
    eyeColor: 'brown',
    name: 'Bowen Holder',
    company: 'ZENSUS',
    gender: 'male',
    email: 'bowenholder@zensus.com',
    phone: '+7 (982) 475-3017',
    address: '621 Colonial Court, Marenisco, Louisiana, 6618',
  },
  {
    _id: '600692d59a5024a227346550',
    index: 2,
    guid: '8004b6d3-492e-44cd-85ae-e0a4340aae40',
    isActive: true,
    balance: '$3,283.26',
    picture: 'http://placehold.it/32x32',
    age: 28,
    eyeColor: 'blue',
    name: 'Glover Joseph',
    company: 'ACLIMA',
    gender: 'male',
    email: 'gloverjoseph@aclima.com',
    phone: '+7 (873) 409-3470',
    address: '864 Narrows Avenue, Starks, Maine, 2192',
  },
  {
    _id: '600692d50629c580da8a1459',
    index: 3,
    guid: '4788b9b4-1739-46f4-920e-c4321253b4e0',
    isActive: false,
    balance: '$2,395.13',
    picture: 'http://placehold.it/32x32',
    age: 34,
    eyeColor: 'blue',
    name: 'Elena Miranda',
    company: 'LOTRON',
    gender: 'female',
    email: 'elenamiranda@lotron.com',
    phone: '+7 (982) 580-3720',
    address: '331 Ivan Court, Whitehaven, New Hampshire, 8986',
  },
  {
    _id: '600692d5aa53f1b810103690',
    index: 4,
    guid: 'fa98c968-d799-43b2-9078-6e01b5b719eb',
    isActive: false,
    balance: '$3,120.54',
    picture: 'http://placehold.it/32x32',
    age: 24,
    eyeColor: 'green',
    name: 'Arnold Adkins',
    company: 'FLEXIGEN',
    gender: 'male',
    email: 'arnoldadkins@flexigen.com',
    phone: '+7 (803) 540-2157',
    address: '107 Eagle Street, Hemlock, Ohio, 8488',
  },
  {
    _id: '600692d543cc3daa595ff7f8',
    index: 5,
    guid: '59dd156d-c2f3-4c98-ba4d-09144edeb1f4',
    isActive: false,
    balance: '$2,631.46',
    picture: 'http://placehold.it/32x32',
    age: 33,
    eyeColor: 'green',
    name: 'Powell Maldonado',
    company: 'IMPERIUM',
    gender: 'male',
    email: 'powellmaldonado@imperium.com',
    phone: '+7 (921) 530-2074',
    address: '197 Neptune Avenue, Cassel, Arizona, 6196',
  },
  {
    _id: '600692d5de9418e7e1da3e4f',
    index: 6,
    guid: '5cc55a28-e1c3-447f-90c6-d6634df082e8',
    isActive: false,
    balance: '$2,751.88',
    picture: 'http://placehold.it/32x32',
    age: 21,
    eyeColor: 'blue',
    name: 'Cecile Boyle',
    company: 'PROSURE',
    gender: 'female',
    email: 'cecileboyle@prosure.com',
    phone: '+7 (905) 424-3287',
    address: '770 Moore Place, Torboy, Hawaii, 8277',
  },
];

function getUsers(query = null) {
  return users;
}

function getUser(id) {
  const user = users.find(u => u._id === id);

  return user;
}

function addNewUser(user) {
  const newUser = {
    ...user,
    _id: String(Math.random()),
  };

  users.push(newUser);
  return newUser;
}

module.exports = {
  getUser,
  getUsers,
  addNewUser,
};
