var express = require('express');
var router = express.Router();
var connection = require('./../config');

/*Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate,callback) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return callback(dateArray);
}*/

//Here patient id will come from session variable
module.exports.appointments=function(req,res){
	if(req.session.user_id){
		 /*getDates(req.body.start_date,req.body.end_date, function(result){
					dateArray= result;
					console.log(dateArray);
						});*/
		
        connection.query('INSERT INTO appointments (patient_id,date,time,doctor_id) values (?,?,?,?)',[req.body.patient_id,req.body.date,req.body.time,req.body.doctor_id] ,function (error, results, fields) {
            
        if (error) {
          res.json({
             status:false,
              message:error,
              
          })
        }else{
            res.json({
              status:true,
              message:'Appointment registered sucessfully'
          })
        }
      });
	}
	else{
		res.json({message: "Please login."});
	}
    }
    
