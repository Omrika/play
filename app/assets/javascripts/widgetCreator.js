document.addEventListener('DOMContentLoaded', function(){ 
    var popout = document.getElementById('widgey')
    
    popout.addEventListener('click', function() {
        var h = document.createElement("form")                // Create a <h1> element
        var t = document.createTextNode("Hello World");     // Create a text node
        h.appendChild(t); 
        document.body.appendChild(h);
    })
});