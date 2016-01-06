
//wrap in document.ready        

var table = document.getElementsByClassName("table-one");

for (var i = 0; i < table.length ; i++) {
    table[i];
}

var goTo = function () {
    location.href = document.getElementById('link_id').value;
}