console.log("zzz")

const generatepassword=(base,length)=>{
let passwordd=""
for(let i=0;i<length;i++){
    let ramdon=Math.floor(Math.random()*base.length)
    passwordd+=base.charAt(ramdon)
}

return passwordd;

}


const generate=()=>{
let lengthh=parseInt(passss.value)

let base="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const numberss="0123456789"
const symbols="!*-+=?"

if(checkboxnumber.checked) base+=numberss
if(checkboxsymbols.checked) base+=symbols

const mostrar=document.getElementById("ez")



if(lengthh<50){
    mostrar.classList.add("visible")
    passwordgene.innerText=generatepassword(base,lengthh),""

}
if(!lengthh){
    passwordgene.innerText="coloca un numero"
    mostrar.classList.add("visible")
}
if(lengthh>50){
    mostrar.classList.add("visible")
    passwordgene.innerText="Es muy larga, intenta que sea menor a 50 caracteres"
} 


}

const btnGenerate=document.getElementById("btngenerate")
 btnGenerate.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("gggggg")
    generate()
})

 


