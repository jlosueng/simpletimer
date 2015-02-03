var timeVal;

Template.timer.events({
  'click #time-btn ' : function() {
     timeVal = $('#inputTime').val();
/*
     $('#timerDisplay').show();
*/
  }
});

Template.timer.helpers({
  'timeLeft' : function() {
     if (timeVal === undefined) {
        return '';
     } else {
        return timeVal;
     }
  }
});
