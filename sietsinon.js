function nature(alpha){
    if(alpha in ["e","y","a","o","u","i"]){
        return "voyelle"
    }
    else{ 
        return "con"
    }
    

}

function moyenne(moy){
if(moy>=10){
    return "admis"
}
else if((moy<=9) && (moy<10)){
    return "control"
}
else if(moy<9){
     return "redouble"}
}

function temp(t){
    if(t<0){
        return "état solide"
    }
    else if((t>=0) && (t<=100)){
        return "état liquide"
    }
else if(t>100){
    return "état gazeux"
}
}


function cout(nb){
    var arg
    if(nb<10){
        arg=nb*50
        return arg
    }
    if(nb<=10 && nb<50){
        arg=nb*40
        return arg
    }
    if(nb>=50){
        arg=nb*35
        return arg
    }
    
}

function nature(alpha){
    if(["e","y","a","o","u","i"].includes(alpha)){
        return "voyelle"
    }
    else{ 
        return "con"
    }
}

//corrig erexercice 1
function esp(ch){
    var res="seul mot"
    for(var i=0;i<ch.length;i++){
        if(ch[i]==" "){
            res="str"
        }
    }return res
}