/** //Declared object movies and intialised it with properties.
let movies = {Genre:"horror", Duration:"1hr 30mins",Ratings:5.3/10,Year:2019,Size:698} 
//Printed out properties for object movies.
      console.log(movies.Genre)
      console.log(movies.Duration)
      console.log(movies.Ratings)
      console.log(movies.Year)
      console.log(movies.Size)

//Declared object dog and intailised it with its properties.
let dog = {Name:"Rex", Breed:"Mongolian",Age:5,Category:"khavsar",Appearance:"Bushy tail"} 
//Printed out object dog and its properties.
      console.log(dog.Name)
      console.log(dog.Breed)
      console.log(dog.Age)
      console.log(dog.Category)
      console.log(dog.Appearance)

//Declared object phone and intialised it with its properties.
let phone = {Storage:"8gb", Version:7.0,Language:"English",Devicename:"Tecnowx3P",Screenresolution:854*480} 
//Printed out properties for object phone.
      console.log(phone.Storage)
      console.log(phone.Version)
      console.log(phone.Language)
      console.log(phone.Devicename)
      console.log(phone.Screenresolution)

//Declared object headphones and intialised it with its properties.
let headphones = {Brand:"JBL", color:"white",weight:"0.05kg",Connection:"wireless",Size:"medium"} 
//Printed out properties for object headphones.
      console.log(headphones.Brand)
      console.log(headphones.color)
      console.log(headphones.weight)
      console.log(headphones.Connection)
      console.log(headphones.Size)

//Declared object bulb and intialised it with its properties.
let bulb = {color:"white", wattage:"40amps",Diameter:"16mm",weight:"0.4kg",make:"China"} 
//Printed out properties for object bulb.
      console.log(bulb.color)
      console.log(bulb.wattage)
      console.log(bulb.Diameter)
      console.log(bulb.weight)
      console.log(bulb.make)
      **/



    //Another way of expressing features in objects 
    //Defined object animal
      function animal()
     {
    //Object animal is having five features
         this.name
         this.size
         this.type
         this.category
         this.age
     }

     //Declaring varible dog and instantalizing it to object new animal
     var dog=new animal()
     dog.name="Rex"
     dog.size="medium"
     dog.type="Mongolian"
     dog.category="Domestic"
     dog.age=5
     //Printed out all the 5 features
     console.log(dog)

     //Declaring varible horse and instantalizing it to object new animal
     var horse=new animal()
     horse.name="Dusty"
     horse.size="medium"
     horse.type="Arabian" 
     horse.category="Warmbloods"
     horse.age=7
     //Printed out all the 5 features
     console.log(horse)

     //Declaring varible lion and instantalizing it to object new animal
     var lion=new animal()
     lion.name="Simba"
     lion.size="medium"
     lion.type="Barbary"
     lion.category="Panthera"
     lion.age=8
     //Printed out all the 5 features
     console.log(lion)

     //Defined object movies
     function movies()
     {
      //Object movies is having 5 features
      this.name
      this.size
      this.ratings
      this.duration
      this.year
     }
     //Declaring varible horror and instantalizing it to object new movies
     var horror=new movies()
     horror.name="Us"
     horror.size="900mbs"
     horror.ratings="6.3/10"
     horror.duration="140mins"
     horror.year=2019
     //Printed out all the 5 features
     console.log(horror)

       //Declaring varible comedy and instantalizing it to object new movies
     var comedy=new movies()
     comedy.name="Shazam"
     comedy.size="780mbs"
     comedy.ratings="7/10"
     comedy.duration="133mins"
     comedy.year=2019
     //Printed out all the 5 features
     console.log(comedy)

       //Declaring varible action and instantalizing it to object new movies
     var action=new movies()
     action.name="Terminator"
     action.size="780mbs"
     action.ratings="6/10"
     action.duration="128mins"
     action.year=2019
     //Printed out all the 5 features
     console.log(action)

     //Defined object phone
     function phone()
     {
    //Object phone is having 5 features
     this.capacity
     this.batterylife
     this.color
     this.language
     this.version
     }

     //Declaring varible tecno and instantalizing it to object new phone
     var tecno=new phone()
     tecno.capacity="4gb"
     tecno.batterylife="4500mA"
     tecno.color="black"
     tecno.language="English"
     tecno.version=7
     //Printed out all the 5 features
     console.log(tecno)
     
     //Declaring varible samsung and instantalizing it to object new phone
     var samsung=new phone()
     samsung.capacity="8gb"
     samsung.batterylife="400mA"
     samsung.color="white"
     samsung.language="kiswahili"
     samsung.version=5
     //Printed out all the 5 features
     console.log(samsung)

     //Declaring varible itel and instantalizing it to object new phone
     var itel=new phone()
     itel.capacity="4gb"
     itel.batterylife="300mA"
     itel.color="black"
     itel.language="french"
     itel.version=8
     //Printed out all the 5 features
     console.log(itel)

     //Defined object school
     function school()
     {
     //Object school has 5 features           
     this.location
     this.population
     this.no_computers
     this.no_classrooms
     this.no_teachers
     }
     //Declaring varible refactory and instantalizing it to object new school
      var refactory=new school()
      refactory.location="muyenga" 
      refactory.population=94 
      refactory.no_computers=21 
      refactory.no_classrooms=7 
      refactory.no_teachers=9
      //Printed out all the 5 features 
     console.log(refactory)

     //Declaring varible uict and instantalizing it to object new school
     var uict=new school()
     uict.location="Nakawa"
     uict.population=357
     uict.no_computers=34
     uict.no_classrooms=16
     uict.no_teachers=17
     //Printed out all the 5 features
     console.log(uict)

     //Declaring varible kiu and instantalizing it to object new school
     var kiu=new school()
     kiu.location="kansanga"
     kiu.population=5000
     kiu.no_computers=84
     kiu.no_classrooms=56
     kiu.no_teachers=200
     //Printed out all the 5 features
     console.log(kiu)

     //Defined object house
     function house ()
     {
      //Object house has 5 features
     this.location
     this.no_rooms
     this.type
     this.color
     this.no_bathrooms
     }

     //Declaring varible flat and instantalizing it to object new house
     var flat=new house()
     flat.location="mbuya"
     flat.no_rooms=3
     flat.kitchen=2
     flat.color="white"
     flat.no_bathrooms=2
     //Printed out all the 5 features
     console.log(flat)

     //Declaring bungalow and instantalizing it to object new house
     var bungalow=new house()
     bungalow.location="bukasa"
     bungalow.no_rooms=3
     bungalow.kitchen=2
     bungalow.color="white"
     bungalow.no_bathrooms=2
     //Printed out all the 5 features
     console.log(bungalow)

     //Declaring varible apartment and instantalizing it to object new house
     var apartment=new house()
     apartment.location="mutungo"
     apartment.no_rooms=4
     apartment.kitchen=1
     apartment.color="grey"
     apartment.no_bathrooms=2
     //Printed out all the 5 features
     console.log(apartment)