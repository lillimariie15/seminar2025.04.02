function getButn(id, color){
    let button = document.getElementById(id);
    button.onclick = function() {
        document.body.style.backgroundColor = color;
        console.log(color + "button clicked");
        alert(color + "button clicked!")
    }
}
getButn("redBtn", "red")
getButn("greenBtn", "green")
getButn("blueBtn", "blue")
getButn("yellowBtn", "yellow")

//document.getElementById('redBtn').onclick = function() {
//    document.body.style.backgroundColor = 'red';
  //  console.log('red button clicked');
    //alert('Red button clicked!');
//};

//document.getElementById('greenBtn').onclick = function() {
    //document.body.style.backgroundColor = 'green';
    //console.log('green button clicked');
    //alert('Green button clicked!');
//};

//document.getElementById('blueBtn').onclick = function() {
   // document.body.style.backgroundColor = 'blue';
   // console.log('blue button clicked');
    //alert('Blue button clicked!');
//};

//document.getElementById('yellowBtn').onclick = function() {
    //document.body.style.backgroundColor = 'yellow';
    //console.log('yellow button clicked');
    //alert('Yellow button clicked!');
//};
