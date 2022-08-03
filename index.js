const drinks=document.getElementById("drinks");




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

        const items=await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then((data)=>data.json())
        .then((display)=>display.drinks);
        console.log(items);
        items.map((item)=>console.log(item.strDrinkThumb))
        items.map((item)=>console.log(item.strDrink))
        items.map(item=>displayData(item.strDrink,item.strDrinkThumb))
        }
        fetchData();


        // const search1=document.getElementById("search1");

        // search1.addEventListener("keyup",e=>{
        
        // const bring=fetchData.map(item=>{
        // console.log(bring);
        
        // })
        // bring();


})






















