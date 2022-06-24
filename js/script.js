let person = {
    name: '',
    age: '',
    doneHw: function(){
        let name;
        while(true){
            name = this.name
            name = prompt('Enter your name');
            if(name.trim().length > 0) break
        }
        let age
        while(true){
            age = this.age
            age = prompt('Enter your age');
            if(age.trim().length > 0) break
        }
            console.log(`Your Name: ${name}\n` + `Your age: ${age}`)
        },
}

let car = {
    modelOfcar: '',
    feature: '',
    showFeatureCar: function(){
        let model;
        while(true){
            model = this.modelOfcar
            model = prompt('Enter model of your car:');
            if(model.trim().length > 0) break
        }
        let feature;
        while(true){
            feature = this.feature
            feature = prompt('Enter feature your car separated by ","');
            if(feature.trim().length > 0) break
        }
        console.log(`Model of your car is  ${model}`);
        feature.split(',').forEach((item) => {
            console.log(`Your car have feature: ${item}`);
        });
    }
}
person.doneHw()
car.showFeatureCar()