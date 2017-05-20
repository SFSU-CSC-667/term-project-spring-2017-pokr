var express = require('express');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var config = require('../config');
var aws = require('aws-sdk');
aws.config.loadFromPath('./config/aws.json');
var ses=new aws.SES({apiVersion:'2010-12-01'});
var from_email='padusumi@stevens.edu';
var to_email=['prad.ads1990@gmail.com'];
var router = express.Router();

var models = require('../models');

router.post('/reset', function(req, res, next) {
	jwt.verify(req.body.verifyToken,config.salt,function(err,decoded){
		models.Password.findById(decoded.id).then(result=>{
			if(result){
				if(!result.newPassword){
					models.User.findById(result.UserId).then(data=>{
						newpassword=crypto.createHash('sha256').update(req.body.pass).digest('hex');
						data.update({password:newpassword}).then(newdata=>{
							result.update({newPassword:newpassword}).then(newresult=>{
								return res.json(["Success","Success"]);
							})
						})
					});
				}
				else{
					return res.json(["Error","Link already used"]);
				}
			}
			else{
				return res.json(["Error",'Invalid link']);
			}
		});
	});
});

router.post('/forgot',function(req,res,next) {
	models.User.find({
		where:{
			email:req.body.email
		}
	}).then(result=>{
		if(result){
			models.Password.create({
				UserId:result.id,
				oldPassword:result.password
			}).then(pass=>{
				var token=jwt.sign({id:pass.id},config.salt);
				var params = {
					Destination: {ToAddresses:[result.email]},
					Message: {
						Body: {
							Text: {
								Data: 'Click on the following link to reset your password. http://localhost:4200/#/reset/'+token
							}
						},
						Subject: {
							Data: 'Pokr-Reset Link',
						}
					},
					Source: from_email,
				};
				ses.sendEmail(params,function(err,data){
					if (err) return res.json(["Error","Unable to send email"]);
					else return res.json(["Success",result.email]);
				})
			})
		}
		else{
			res.json(["Error","Email not found"]);
		}
	});
});

router.post('/login',function(req,res,next){
	var user=req.body;
	user.password=crypto.createHash('sha256').update(req.body.password).digest('hex');
	models.User.findOne({
		where:{
			username:req.body.username,
			password:req.body.password
		}
	}).then(function(user){
		if(user){
			var token=jwt.sign({id:user.id,username:user.username,active:user.active},config.salt,{
				expiresIn: '24h'
			});
			if(user.isVerified){
				res.json(["Success",token]);
			}
			else{
				res.json(["Verify",token]);
			}
		}
		else{
			res.json(["Error","Invalid username or password"]);
		}
	});
});


router.put('/register',function(req,res,next){
	var user=req.body;
	models.User.findAll({
		where:{$or:[{username:req.body.username},{email:req.body.email}]}
	}).then(function(users){
		if(users.length==0){
			models.User.create({
				username:req.body.username,
				name:req.body.name,
				email:req.body.email,
				password:crypto.createHash('sha256').update(req.body.password).digest('hex'),
				verificationCode:Math.floor((Math.random()*899999) + 100001),
				isVerified:false
			}).then(function(user){
				models.UserChip.create({
					UserId:user.id,
					value:10000
				}).then(userchip=>{
					var token=jwt.sign({id:user.id,username:user.username,active:user.active},config.salt,{
						expiresIn: '24h'
					});
					var params = {
						Destination: {ToAddresses:[user.email]},
						Message: {
							Body: {
								Text: {
									Data: 'Your verification code is '+user.verificationCode
								}
							},
							Subject: {
								Data: 'Pokr-Verification Code',
							}
						},
						Source: from_email,
					};
					ses.sendEmail(params,function(err,data){
						if (err) return res.json(["Error","Unable to send email."]);
						else return res.json(["Success",token]);
					})
				});
			});
		}
		else{
			return res.json(["Error","Username or Email already in use."]);
		}
	})
	
})


module.exports = router;