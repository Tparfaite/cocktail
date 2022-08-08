const drinks=document.getElementById("drinks");
const search1=document.getElementById("search1");
const search2=document.getElementById("search2");
const btns=document.getElementById("fa");
console.log(search1);

let items;
const search=(value)=>{
  drinks.innerHTML=" ";
  const searched=items.filter(item=>item.strDrink.toLowerCase().includes(value.toLowerCase()))
  searched.map(item=>{
    displayData(item.strDrink,item.strDrinkThumb)
  })
}
 


search1.addEventListener("keyup",e=>{
search(search1.value)
})
search2.addEventListener("keyup",e=>{
  if(e.keyCode===13){
    search(search2.value);
  }
})
btns.addEventListener("click",e=>{
  search(search2.value);
})


const displayData=(label,src)=>{

const card=`

<div class="card">
             <div class="label">
              ${label}
             </div>
             <img src=${src}>
           </div>

`
drinks.innerHTML+=card;

}
displayData();

document.addEventListener("DOMContentLoaded",e=>{

    const fetchData=async()=>{

        items=await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((data)=>data.json())
        .then((display)=>display.drinks);
        console.log(items);
        items.map((item)=>console.log(item.strDrinkThumb))
        items.map((item)=>console.log(item.strDrink))
        items.map(item=>displayData(item.strDrink,item.strDrinkThumb))


           
    
        }

     

        fetchData();




})






















