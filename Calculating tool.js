

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
        return PayTaxes
    }else if (option1==="3A",option2==="2B"){
        var PayTaxes=a3b2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else if (option1==="3A",option2==="2C"){
        var PayTaxes=a3c2.taxOfPop*population
        
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else if (option1==="3B",option2==="2A"){
        var PayTaxes=b3a2.taxOfPop*population
        
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else if (option1==="3B",option2==="2B"){
        var PayTaxes=b3b2.taxOfPop*population
        
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else if (option1==="3B",option2==="2C"){
        var PayTaxes=b3c2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else if (option1==="3C",option2==="2A"){
        var PayTaxes=c3a2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else if (option1==="3C",option2==="2B"){
        var PayTaxes=c3b2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }
    else if (option1==="3C",option2==="2C"){
        var PayTaxes=c3c2.taxOfPop*population
        console.log("You should pay:$"+PayTaxes+" tax.")
        return PayTaxes

    }else{
        console.log("something went wrong")
        return
    }
}

class welfareStateHealth{
constructor(healthPolicy,taxMultiplier4){
    this.healthPolicy=healthPolicy;
    this.taxMultiplier4=taxMultiplier4
}
}
const A4=new welfareStateHealth("4A",2)
const B4=new welfareStateHealth("4B",1)
const C4=new welfareStateHealth("4C",0)

class welfareStateEdu{
    constructor(eduPolicy,taxMultiplier5){
        this.eduPolicy=eduPolicy;
        this.taxMultiplier5=taxMultiplier5
    }
    }
const A5=new welfareStateEdu("5A",2)
const B5=new welfareStateEdu("5B",1)
const C5=new welfareStateEdu("5C",0)

class tax{
    constructor(taxPolicy,basicMultiplier,welfareMultiplier){
        this.taxPolicy=taxPolicy;
        this.basicMultiplier=basicMultiplier;
        this.welfareMultiplier=welfareMultiplier
    }
}

const A3=new tax("3A",3,2)
const B3=new tax("3B",2,1)
const C3=new tax("3C",1,0)

function taxMultiplierCal(policy3,policy4,policy5){
    if(policy3==="3A"){
        if(policy4==="4A"){
            if(policy5==="5A"){
                var taxMultiplier=A3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=A3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
        }else if(policy5==="5C"){
            var taxMultiplier=A3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
            console.log(taxMultiplier)
            return taxMultiplier
        }
        }else if(policy4==="4B"){
            if(policy5==="5A"){
                var taxMultiplier=A3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=A3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5C"){
                var taxMultiplier=A3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
            return taxMultiplier
            }
        }else if(policy4==="4C"){
            if(policy5==="5A"){
                var taxMultiplier=A3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=A3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5C"){
                var taxMultiplier=A3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
            return taxMultiplier
            }
        }
    }else if(policy3==="3B"){
        if(policy4==="4A"){
            if(policy5==="5A"){
                var taxMultiplier=B3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=B3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
        }else if(policy5==="5C"){
                var taxMultiplier=B3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }
        }else if(policy4==="4B"){
            if(policy5==="5A"){
                var taxMultiplier=B3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=B3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5C"){
                var taxMultiplier=B3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }
        }else if(policy4==="4C"){
            if(policy5==="5A"){
                var taxMultiplier=B3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=B3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5C"){
                var taxMultiplier=B3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }
        }
    }else if(policy3==="3C"){
        if(policy4==="4A"){
            if(policy5==="5A"){
                var taxMultiplier=C3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=C3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
        }else if(policy5==="5C"){
                var taxMultiplier=C3.basicMultiplier+A4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
        }
        }else if(policy4==="4B"){
            if(policy5==="5A"){
                var taxMultiplier=C3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=C3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5C"){
                var taxMultiplier=C3.basicMultiplier+B4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }
        }else if(policy4==="4C"){
            if(policy5==="5A"){
                var taxMultiplier=C3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+A5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5B"){
                var taxMultiplier=C3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+B5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }else if(policy5==="5C"){
                var taxMultiplier=C3.basicMultiplier+C4.taxMultiplier4*A3.welfareMultiplier+C5.taxMultiplier5*A3.welfareMultiplier
                console.log(taxMultiplier)
                return taxMultiplier
            }
        }
    }
}



function corporateTaxCal(taxPolicy, revenue) {
    if (taxPolicy === "3A") {
      if (revenue > 5 && revenue < 9) {
        var corporateTax = 1;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 10 && revenue < 24) {
        var corporateTax = 5;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 25 && revenue < 49) {
        var corporateTax = 12;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 50 && revenue < 99) {
        var corporateTax = 24;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 100 && revenue < 199) { // Corrected condition
        var corporateTax = 40;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 200 && revenue < 299) {
        var corporateTax = 100;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 300) {
        var corporateTax = 160;
        console.log(corporateTax);
        return corporateTax;
      } else {
        return "Please input a correct number larger than 5.";
      }
    } else if (taxPolicy === "3B") {
      if (revenue > 5 && revenue < 9) {
        var corporateTax = 2;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 10 && revenue < 24) {
        var corporateTax = 5;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 25 && revenue < 49) {
        var corporateTax = 10;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 50 && revenue < 99) {
        var corporateTax = 15;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 100 && revenue < 199) { // Corrected condition
        var corporateTax = 30;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 200 && revenue < 299) {
        var corporateTax = 70;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 300) {
        var corporateTax = 120;
        console.log(corporateTax);
        return corporateTax;
      } else {
        return "Please input a correct number larger than 5.";
      }
    } else if (taxPolicy === "3C") {
      if (revenue > 5 && revenue < 9) {
        var corporateTax = 2;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 10 && revenue < 24) {
        var corporateTax = 4;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 25 && revenue < 49) {
        var corporateTax = 7;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 50 && revenue < 99) {
        var corporateTax = 10;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 100 && revenue < 199) { // Corrected condition
        var corporateTax = 20;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 200 && revenue < 299) {
        var corporateTax = 40;
        console.log(corporateTax);
        return corporateTax;
      } else if (revenue > 300) {
        var corporateTax = 60;
        console.log(corporateTax);
        return corporateTax;
      } else {
        return "Please input a correct number larger than 5.";
      }
    }
    return "Invalid tax policy.";
  }
  
  console.log(corporateTaxCal("3A", 400)); 