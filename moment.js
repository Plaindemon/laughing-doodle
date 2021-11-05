const time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// const oneHourAhead = moment().startOf('hour').fromNow();


// console.log(time)
document.getElementById("currentDay").innerHTML += "Schedule: " + time + "";


time = moment($(e).attr('datetime'));
// console.log(currentTime);
// console.log(time)
//////////
// trial code below
//////////
// document.getElementById("currentDay").innerHTML += "Schedule: " + time + "";
// document.getElementById("hourlyTime").innerHTML += "Schedule: " + currentTime + "";
function getCurrentTime(){
    const currentTime = moment().format('LTS');
    
    if(currentTime === time ){
        console.log("It worked")
    }else{
        console.log("error")
    }
}

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