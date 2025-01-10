

/*function Tax(PlayerType,TaxPolicy,LaborPolicy){
    if(PlayerType=="Working"){
        function PayTaxes(Population){
            if(typeof(Population)!="number"&&Population<0&&Population>10){
                console.log("Please input correct Population")
            }else{
                console.log
            }
        }
    }
    if(PlayerType=="Middle"){
        
    }
    else if(PlayerType=="Capitalist"){
        
    }else{
        console.log("Please select correct PlayerType")
    }

}*/
class incomeTax{
    constructor(taxPolicy,laborPolicy,taxOfPop){
        this.taxPolicy=taxPolicy;
        this.laborPolicy=laborPolicy
        this.taxOfPop=taxOfPop
    }
   
}
const a3a2= new incomeTax("3A","2A",7)
const a3b2= new incomeTax("3A","2B",4)
const a3c2= new incomeTax("3A","2C",1)
const b3a2= new incomeTax("3B","2A",6)
const b3b2= new incomeTax("3B","2B",4)
const b3c2= new incomeTax("3B","2C",2)
const c3a2= new incomeTax("3C","2A",5)
const c3b2= new incomeTax("3C","2B",4)
const c3c2= new incomeTax("3C","2C",3)

var polulation;

function taxCalculator(option1,option2,population){
    if(option1==="3A",option2==="2A"){
        var PayTaxes=a3a2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")
    }else if (option1==="3A",option2==="2B"){
        var PayTaxes=a3b2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else if (option1==="3A",option2==="2C"){
        var PayTaxes=a3c2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else if (option1==="3B",option2==="2A"){
        var PayTaxes=b3a2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else if (option1==="3B",option2==="2B"){
        var PayTaxes=b3b2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else if (option1==="3B",option2==="2C"){
        var PayTaxes=b3c2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else if (option1==="3C",option2==="2A"){
        var PayTaxes=c3a2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else if (option1==="3C",option2==="2B"){
        var PayTaxes=c3b2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }
    else if (option1==="3C",option2==="2C"){
        var PayTaxes=c3c2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")

    }else{
        console.log("something went wrong")
        return
    }
}

