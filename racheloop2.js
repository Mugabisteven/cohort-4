// function continent()
//     {
//         this.name
//         this.number_of_countries
//         this.size
//         this.population
//         this.number_of_lakes

//     }
//     var europe= new continent()
//     europe.name="europe"
//     europe.number_of_countries=44
//     europe.size="10.18M"
//     europe.population="741.4M"
//     europe.number_of_lakes=5
//     console.log(europe.name)
//     console.log(europe)
     
//     var africa= new continent()
//     africa.name="africa"
//     africa.number_of_countries=53
//     africa.size="5.56M"

/** Defining a method for object continent with
 *  five properties, five instances and printing them out */    
    function continent(name,number_of_countries,size,population,number_of_lakes) 
        {
             this.name=name
            this.number_of_countries=number_of_countries
            this.size=size
            this.population=population
            this.number_of_lakes=number_of_lakes
        }
        var asia= new continent("asia",27, "27.8M", "6B", "none")
        var africa= new continent("africa", 53, "5.56M", "1.3B", 20)
        var europe= new continent("europe", 44, "10.18M", "741.4M", 5)
        var southamerica= new continent("south america", 14, "17.84M", "422.5M", 4)
        var antartica= new continent("antartica", 12, "14M", 1106, 400 )
        console.log(asia)
        console.log(africa)
        console.log(europe)
        console.log(southamerica)
        console.log(antartica)