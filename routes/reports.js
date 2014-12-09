//routes/reports.js
var express = require('express');
//config Rutes
var router = express.Router();
router.route('/reports').get(function(req, res){
 res.json({ message: 'Hola Report!'});
});
/*
router.route('/reports').post(function(req, res){
 //code
});
router.route('/reports/:id').get(function(req, res){
 //code
});
router.route('/reports/:id').delete(function(req, res){
 //code
});
router.route('/reports/:id').put(function(req, res){
 //code
});
*/
module.exports = router;