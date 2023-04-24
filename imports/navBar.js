import * as bootstrap from 'bootstrap';
import { Accounts } from 'meteor/accounts-base'

Template.navBar.events({
   // 'click .js-showLogin'() {
       // const loginModal = new bootstrap.Modal('#loginModal', {})
       // loginModal.show()
   // },
    //'click .js-showCreateUser'() {
       // const createUserModal = new bootstrap.Modal("#createUserModal")
       // console.log('show create user dialog')
       // createUserModal.show()
    //},
    'click .js-logOut'(){
        Accounts.logout()
    }
})