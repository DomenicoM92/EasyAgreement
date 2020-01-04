var Request = require('../models/request.js');
var request = new Request();

exports.generateRequest = function(student, academicTutor) {
    return new Promise(function(fulfill, reject) {
        request.setStudentID(student);
        request.setAcademicTutorID(academicTutor);

        var getRequestPr = Request.getRequest(student);
        getRequestPr.then(function(result) {
            if(!result) {
                var insertRequestPr = Request.insertRequest(request);
                insertRequestPr.then(function(err) {
                    if (err) throw err;
                    fulfill(request);
                });
            }
            else {
                fulfill(null);
            }            
        });
    });
}

exports.getAllRequests = function (tutor) {
    return new Promise (function (fulfill, reject){
        var getRequestsPr = Request.getAllRequests(tutor);
        getRequestsPr.then(function(result){
            fulfill(result);
        })
    });
}

exports.getRequest = function (student) {
    return new Promise (function (fulfill, reject){
        var getRequestPr = Request.getRequest(student);
        getRequestPr.then(function(result){
            fulfill(result);
        });
    });
}

exports.updateExternalTutor = function(student, tutor) {
    return new Promise (function (fulfill, reject){
        var updateTutorPr = Request.updateExternalTutor(student, tutor);
        updateTutorPr.then(function(){
            fulfill();
        });
    });
}
