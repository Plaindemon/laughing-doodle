// main functionality using jquery
// using the click btn function to log when btn is clicked
// $(document).ready(function() {
// $("#sortableList").click(function() {
//     console.log("click")
//     
// })
// })


$(document).ready(function() {
    // $(".displayText").add();
    // saveBtn
    $(".saveBtn").click(function() {
        // console.log("click")
        
        console.log("click")
    });
    // trashBtn

    $(".trashBtn").click(function() {
        // console.log("click")
        $(".displayText").remove("p");
        console.log("clickedtrashbtn")
        
    })
    // preventDefault();
    $('select#hourlyTimeDropdown').submit(function(e){
        e.preventDefault();
        var time = $('textarea#submit').val();
        console.log(time);
    })
    $('select#hourlyTimeDropdown').change(function(e){
        console.log(e.target.value);
    })


});



// 