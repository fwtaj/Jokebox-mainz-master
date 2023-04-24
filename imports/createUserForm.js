import { Meteor } from 'meteor/meteor';
import * as bootstrap from 'bootstrap'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

Template.createUserForm.events({
    'click .js-createUser'() {
        let Firstname = document.querySelector("#nu-fname")
        let Lastname = document.querySelector("#nu-lname")
        let Email = document.querySelector("#nu-email")
        let username = document.querySelector("#nu-name")
        let pwd = document.querySelector("#nu-password")
        let confirmPwd = document.querySelector("#nu-confirmPassword")
        if (pwd.value != confirmPwd.value) {
            pwd.classList.add("errBox")
            confirmPwd.classList.add("errBox")
        }
        else {
            FlowRouter.go('login')
            Meteor.call('createNewUserAccount', username.value, pwd.value, (err, result) => {
                if (err)
                    console.error(`create user error: ${err.reason}`)
                else {
                    if (result)
                        console.debug(`success: ${result}`)
                }
            })
        }
    }
})
