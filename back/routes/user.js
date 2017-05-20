var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var models = require('../models');
var aws = require('aws-sdk');
aws.config.loadFromPath('./config/aws.json');
var ses=new aws.SES({apiVersion:'2010-12-01'});
var from_email='padusumi@stevens.edu';
var to_email=['prad.ads1990@gmail.com'];

router.post('/verify',function(req,res,next){
	user=req.authdata;
	models.User.findById(user.id).then(function(data){
		if(data.verificationCode==req.body.verifyCode){
			data.update({isVerified:true}).then(function(response){
				return res.json(['Success']);
			})
		}
		else{
			return res.json(['Error',"Wrong verification code"]);
		}
	});
});

router.get('/resend',function(req,res,next){
	user=req.authdata;
	models.User.findById(user.id).then(userdata=>{
		var params = {
			Destination: {ToAddresses:[userdata.email]},
			Message: {
				Body: {
					Text: {
						Data: 'Your verification code is '+userdata.verificationCode
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
			else return res.json(["Success",userdata.email]);
		})
	})
});

router.get('/details',function(req,res,next){
	user=req.authdata;
	models.User.findById(user.id,{attributes:['username','name','avatar']}).then(function(data){
		return res.json(data);
	})
});

module.exports = router;