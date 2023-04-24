Template.collectionData.helpers({
    jokes: function() {
      return Jokes.find();
    }
  });
  Template.collectionData.events({
    'click .delete-joke': function(event, template) {
      var jokeId = $(event.currentTarget).attr('data-id');
      Jokes.remove(jokeId);
    }
  });
  
  Template.collectionData.events({
    'click .like-joke': function(event, template) {
    event.preventDefault();
    const jokeId = $(event.currentTarget).data('id');
    Meteor.call('likeJoke', jokeId, (error, result) => {
    if (error) {
    console.log(error.reason);
    } else {
    console.log(result);
    window.alert("Joke Liked!");
    }
    });
    }
    });
    