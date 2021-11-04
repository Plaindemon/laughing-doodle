// main functionality using jquery
// using the click btn function to log when btn is clicked
// $(document).ready(function() {
// $("#sortableList").click(function() {
//     console.log("click")
//     $("#sortableList").sortable();
//     $("#sortableList").disableSelection();
// })
// })

// saveBtn
$(document).ready(function() {
    $(".saveBtn").click(function() {
        // console.log("click")
        var taskListItem = $("textarea[name=textInputForm]").val();
        $("p.displayText").append("<p>" + taskListItem + "</p>");
        console.log("click")
    });
});
// trashBtn
$(document).ready(function() {
    $(".trashBtn").click(function() {
        console.log("click")
        $(".displayText").remove("p");
        
    })
})

//