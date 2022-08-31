'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Cat = require('./models/cat.js');

async function seed() {
  // structure the same as our Cat Schema
  // name: {type: String, required: true},
  // color: {type: String, required: true},
  // spayNeuter: {type: Boolean, required: true},
  // location: {type: String, required: true}
  await Cat.create({
    name: 'Dot',
    color: 'Black and White',
    spayNeuter: true,
    location: 'hammock'
  });
  console.log('Dot was added to the database');
  await Cat.create({
    name: 'Ginger',
    color: 'Brindle',
    spayNeuter: true,
    location: 'front porch'
  });
  console.log('Ginger was added to the database');
  mongoose.disconnect();
}

seed();
