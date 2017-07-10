function square(num){		
    window.alert(num*num);		
}

function sumNum(num1, num2, num3){
     var sum = parseInt(num1) + parseInt(num2) + parseInt(num3);
     window.alert(sum);
}

var person = {
    name:"",
    age:0,
    occupation:""
}

function createPerson(name, personsAge, occupation){
    var age = parseInt(personsAge)
    if(name == "" || age < 0 || occupation == ""){
        window.alert("invalid Input");
    } else {
        window.alert("Before Creation: " + person.name + " " + person.age + " " + person.occupation);
        person.name = name;
        person.age = personsAge;
        person.occupation = occupation;
        window.alert("Person Created: " + person.name + " " + person.age + " " + person.occupation);
    }
}

function increaseAge(){
    person.age++;
    window.alert("Person Created: " + person.name + " " + person.age + " " + person.occupation);
}