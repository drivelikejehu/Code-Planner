$(document).ready(function() {
//current day
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

  
  //creating grid for calendar
  for (var i = 9; i < 18; i++) {
    var rowEl = $(`<div data-row=${i} id='${i}' class="row">`);

  //columns for hour, events, and save buttons
    var colHour = $(`<div class="col-sm-2 hour"><h4>` + amPm(i) + `</h4>`);
    var colEvent = $(
      `<div class="col-sm-8 event"><textarea placeholder="Add an event"></textarea>`
    );
    var colSave= $('<div class="col-sm-2 saveBtn"><button><i class="far fa-save"></i></button>');

  //append columns to rows

  rowEl.append(colHour);
  rowEl.append(colEvent);
  rowEl.append(colSave);

  //append to container
    $(".container").append(rowEl);

    //determines am or pm
    function amPm(x) {
        if (x < 12){
            return(x + " AM");
        } else if (x === 12) {
            return(x + " PM");
        } else {
            return((x - 12) + " PM");
        }
      }
  } 

  
});
