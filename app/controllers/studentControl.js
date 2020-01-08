var hash = require('./hash.js')
var studentModel = require('../models/student.js')

exports.update = function (req, res) {
  return new Promise(function (fulfill, reject) {
    var name = req.body.inputNameS
    var surname = req.body.inputSurnameS
    var citta = req.body.inputCity
    var indirizzo = req.body.inputAddress
    var corso = req.body.inputDegree

    var studente = new studentModel()

    // Form validation
    var isRight = true

    if (name.length != 0) {
      if (!(/^[A-Za-z]+$/.test(name)) || name.length <= 2) {
        res.cookie('errNameS', '1')
        isRight = false
      } else {
        studente.setName(name)
      }
    }

    if (surname.length != 0) {
      if (!(/^[A-Za-z]+$/.test(surname)) || surname.length <= 2) {
        res.cookie('errSurnameS', '1')
        isRight = false
      } else {
        studente.setSurname(surname)
      }
    }

    if (citta.length != 0) {
      if (!(/^[A-Za-z\s]+$/.test(citta)) || citta.length <= 2) {
        res.cookie('errStudentCity', '1')
        isRight = false
      } else {
        studente.setCity(citta)
      }
    }

    if (indirizzo.length != 0) {
      if (!(/^[A-Za-z0-9,\s]+$/.test(indirizzo)) || indirizzo.length <= 7) {
        res.cookie('errStudentAddress', '1')
        isRight = false
      } else {
        studente.setAddress(indirizzo)
      }
    }

    if (corso.length != 0) {
      if (!(/^[A-Za-z\s]+$/.test(corso)) || corso.length <= 2) {
        res.cookie('errStudentCorso', '1')
        isRight = false
      } else {
        studente.setDegreeCourse(corso)
      }
    }

    if (!isRight) {
      fulfill(false)
      return
    }

    var checkS = studentModel.updateStudent(studente, req.session.utente.utente.Email)
    /**
    * It checks the result of updateStudent function and updates the student session
    * @param  {Object} result - The result of updateStudent function
    * @returns {Boolean} - It returns true and generates an "edit complete" cookie if result != null, else it returns a reject
*/
    checkS.then(function (result) {
      if (result != null) {
        req.session.utente.utente = result
        res.cookie('updateEff', '1')
        fulfill(true)
      } else {
        reject()
      }
    })
  })
}

exports.updatePassword = function (req, res) {
  return new Promise(function (fulfill, reject) {
    var oldPassword = req.body.inputOldPassword
    var password = req.body.inputPassword
    var passwordConfirm = req.body.inputConfirmPassword

    // Form Validation
    var isRight = true

    if ((oldPassword == null) || (oldPassword.length <= 7) || (!/^[A-Za-z0-9]+$/.test(oldPassword))) {
      res.cookie('errOldPassword', '1')
      isRight = false
    }

    if ((password == null) || (password.length <= 7) || (!/^[A-Za-z0-9]+$/.test(password))) {
      res.cookie('errPassword', '1')
      isRight = false
    }

    if (passwordConfirm != password) {
      res.cookie('errPasswordConfirm', '1')
      isRight = false
    }

    if (!isRight) {
      fulfill(false)
      return
    }

    if (hash.checkPassword(req.session.utente.utente.Password.hash, req.session.utente.utente.Password.salt, oldPassword)) {
      var passwordHashed = hash.hashPassword(password)
      var checkS = studentModel.updatePassword(passwordHashed, req.session.utente.utente.Email)
      /**
        * It checks the result of updatePassword function and updates the student session
        * @param  {Object} result - The result of updatePassword function (about student)
        * @returns {Boolean} - It returns true and generates an "edit password complete" cookie if result != null, else it returns a reject
        */
      checkS.then(function (result) {
        if (result != null) {
          req.session.utente.utente = result
          res.cookie('updatePassEff', '1')
          fulfill(true)
        } else {
          reject()
        }
      })
    } else {
      res.cookie('errOldPassword', '1')
      fulfill(true)
    }
  })
}
