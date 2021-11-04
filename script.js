const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// console.log(time)
document.getElementById("currentDay").innerHTML += "Schedule: " + time + "";


// $("#main").on("click", "div", function() {
//     console.log("<div> was clicked");
//   });