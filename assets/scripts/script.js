$(document).ready(function() {
//current day
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

  
  //creating grid for calendar
  for (var i = 0; i < 12; i++) {
    var rowEl = $(`<div data-row=${i} id='${i}' class="row">`);

  //columns for hour, events, and save buttons
    var colHour = $(`<div class="col-sm-2" id="hour"><h4>{i}</h4>`);
    var colEvent = $(
      `<div class="col-sm-8" id="eventArea"><textarea class="textdescription" placeholder="Add an event"></textarea>`
    );
    var colSave= $('<div class="col-sm-2" id="saveButton"><button><i class="far fa-save"></i></button>');

  //append columns to rows

  rowEl.append(colHour);
  rowEl.append(colEvent);
  rowEl.append(colSave);

  //append to container
    $(".container").append(rowEl);
  }
});
