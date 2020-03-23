$(document).ready(function(){

      
    const name = $("#name");
    const email = $("#email");
    const contactform = $("#info");

    contactform.on("submit", function(event) {
        event.preventDefault();
        
        const newInfo = {
            name: name.val().trim(),
            email: email.val().trim()
        };

        console.log("hello");

        if (!newInfo.name || !newInfo.email) {
            return;
        }

        console.log(newInfo);

        submitInfo(newInfo.name, newInfo.email);
    });

    function submitInfo(name, email) {
        $.post("/api/posts", {
            name: name,
            email: email
        }).then(function(){
            window.location.replace("/");
        })
    }
 });