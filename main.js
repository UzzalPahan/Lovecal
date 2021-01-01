function myfunction(){
    var myName = document.getElementById('myname').value;
    var loveName = document.getElementById('lovename').value;

    if(myName == ""){
        alert('Type your name');
    }else if(myName.length <=2){
        alert('minimum 3 character');
    }else if(!isNaN(myName)){
        alert('only character number is not allowed');
    }else if(loveName == ""){
        alert('Type your Love name');
    }else if(loveName.length <=2){
        alert('minimum 3 character allowed');
    }else if(!isNaN(loveName)){
        alert('number is not allowed');
    }else{
        var a = Math.random() * 100;
    a = Math.floor(a) + '%';
    document.getElementById('percentage').value = a;
    }

    
}


  $( function() {
    $( "#draggable" ).draggable();
  } );