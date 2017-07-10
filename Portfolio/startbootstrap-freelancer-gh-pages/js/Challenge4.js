var person = {
    name:"",
    age:0,
    occupation:""
}

function checkPerson(name, personsAge, occupation){
    var age = parseInt(personsAge)
    if(name == "" || age < 0 || occupation == ""){
        window.alert("invalid Input");
    } else {
        person.name = name;
        person.age = personsAge;
        person.occupation = occupation;
    
        if(person.age >= 20 && person.age <= 40){
            window.alert(person.name + " is between 20 and 40 years old");
        } else {
            window.alert(person.name + " is not between 20 and 40 years old");
        }
    }
}