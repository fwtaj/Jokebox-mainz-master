Template.Profile.helpers({
    currentUser() {
      return Meteor.user();
    }
  });
  
  Template.Profile.events({
    'submit form'(event, template) {
      event.preventDefault();
  
      const password = template.find('#password').value;
      const confirmPassword = template.find('#confirm-password').value;
      const ProfileImage = template.find('#Profile-image').value;
  
      if (password !== '' || confirmPassword !== '') {
        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
  
        Accounts.changePassword(password, confirmPassword, (err) => {
          if (err) {
            console.error(`Error changing password: ${err}`);
          } else {
            console.debug('Password changed successfully');
          }
        });
      }
  
      Meteor.users.update(Meteor.userId(), {
        $set: {
          'Profile.image': ProfileImage
        }
      }, (err) => {
        if (err) {
          console.error(`Error updating Profile image: ${err}`);
        } else {
          console.debug('Profile image updated successfully');
        }
      });
    },

    'input #image'() {
        const image = document.querySelector('#image')
        const imgProfile = document.querySelector('#profImg')
        imgProfile.src = image.value
        console.debug(image.value)
    }
  });
  