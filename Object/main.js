    var person = {
        name:'Lee',
        sayHello : function(){
            console.log(`Hello! My name is ${this.name}.`);
        }
    };

    console.log(typeof person); //object
    console.log(person); //{name : "Lee", sayHello : f}

    var empty = {};
    console.log(typeof empty); //object