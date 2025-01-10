

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
