function HouseKeeper(name , age , hobby , workPermit ) {

    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.workPermit = workPermit;
    this.duty = function(){
        console.log("cleaning in progsses...")
    }


}

var houseKeeper1 = new HouseKeeper('missy' , 19 , ['singing','study','cooking'] , true);


console.log(houseKeeper1.duty())