const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// const oneHourAhead = moment().startOf('hour').fromNow();


// console.log(time)
document.getElementById("currentDay").innerHTML += "Schedule: " + time + "";



// console.log(currentTime);
// console.log(time)
//////////
// trial code below **********//////////////////************** */
//////////
// document.getElementById("currentDay").innerHTML += "Schedule: " + time + "";

 // create a function that get the color coding of the timeblock based on the hour
//  function getColorTime(){  
//     function chooseHour() {
//         var timeChoice = $("#hourlyTimeDropdown").val();
//         $("select#hourlyTimeDropdown option:checked").val();
//         $( "p.displayChoice" ).html( "<b>Selected Time:</b> " + timeChoice);
    
    

//     var time = new Date($.now());
//         var hour = time.getHours();
//         console.log(hour);
//         if (hour  >= timeChoice ){
//             console.log('selected')
//         } else if ( hour <= timeChoice){
//             console.log('not quite the right hour')
//         } else if (hour === timeChoice){
//             console.log('Current Hour selected')
//         }else {
//             console.log('not the right')
//         }
//     }
//     $("select").change(chooseHour);
//     chooseHour();
//     // $.submit(function(e){
//     //     e.preventDefault();
//     //     var time = $('select#hourlyTimeDropdown').val();
//     //     console.log(time)
//     //     console.log(e.target.value);
//     // })
//     // $('select#hourlyTimeDropdown').change(function(e){

//     //     console.log(e.target.value);
//     // })
// }
 // $.submit(function(e){
    //     e.preventDefault();
    //     var time = $('select#hourlyTimeDropdown').val();
    //     console.log(time)
    //     console.log(e.target.value);
    // })
    // $('select#hourlyTimeDropdown').change(function(e){

    //     console.log(e.target.value);
    // })

    // function chooseHour() {
    //     var timeChoice = $("#hourlyTimeDropdown").val();
    //     $("select#hourlyTimeDropdown option:checked").val();
    //     $( "p.displayChoice" ).html( "<b>Selected Time:</b> " + timeChoice);
    //     if (time === timeChoice){
    //         console.log('selected')
    //     } else if (time > timeChoice){
    //         console.log('not quite the right hour')
    //     } else if (time <= timeChoice){
    //         console.log('Current Hour selected')
    //     }else {
    //         console.log('not the right')
    //     };
    // }
    // $("select").change(chooseHour);
    // chooseHour();
   
    
   