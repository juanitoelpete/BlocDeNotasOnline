const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res)=>{
    res.render('index');
  })
router.route('/home')
  .get((req, res)=>{
    res.render('home');
  })
router.route('/login')
  .get((req, res)=>{
    res.render('login');
  })
router.route('/register')
  .get((req, res)=>{
    res.render('register');
  })
module.exports = {
  router
}