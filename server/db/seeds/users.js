/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
<<<<<<< HEAD
exports.seed = async function (knex) {
=======
 exports.seed = async function (knex) {
>>>>>>> tailwind
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      auth0_id: 1,
      name: 'Charline',
      location: 'Qalyūb',
      bio: 'Axis axis',
      email: 'cupward0@yolasite.com',
      phone_number: 11,
      approachable: true,
      rank: 'Bronze',
      img: './images/users/sample.jpg',
      walker: true,
      owner: false,
    },
    {
      auth0_id: 2,
      name: 'Violetta',
      location: 'Ode',
      bio: 'Columba palumbus',
      email: 'vewbanke1@census.gov',
      phone_number: 10,
      approachable: false,
      rank: 'Silver',
      img: './images/users/sample.jpg',
      walker: true,
      owner: false,
    },
    {
      auth0_id: 3,
      name: 'Nessa',
      location: 'Florence',
      bio: 'Sterna paradisaea',
      email: 'nrimbault2@shop-pro.jp',
      phone_number: 9,
      approachable: false,
      rank: 'Bronze',
      img: './images/users/sample.jpg',
      walker: true,
      owner: false,
    },
    {
      auth0_id: 4,
      name: 'Jacob',
      location: 'Youhao',
      bio: 'Rhea americana',
      email: 'jwaghorn3@dyndns.org',
      phone_number: 11,
      approachable: false,
      rank: 'Silver ',
      img: './images/users/sample.jpg',
      walker: false,
      owner: true,
    },
    {
      auth0_id: 5,
      name: 'Verne',
      location: 'Kulonkali',
      bio: 'Pteronura brasiliensis',
      email: 'vdannell4@netscape.com',
      phone_number: 10,
      approachable: false,
      rank: 'Silver',
      img: './images/users/sample.jpg',
      walker: false,
      owner: true,
    },
    {
      auth0_id: 6,
      name: 'Madeline',
      location: 'Bayan Qagan',
      bio: 'Turtur chalcospilos',
      email: 'mmanifield5@live.com',
      phone_number: 11,
      approachable: true,
      rank: 'Gold',
      img: './images/users/sample.jpg',
      walker: false,
      owner: true,
    },
  ])
}
