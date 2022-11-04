const app = document.getElementById("app")
const countryList = [
    "Nigeria",
    "Germany",
    "USA",
    "Ghana",
    "China",
    "South Korea",
    "North Korea",
    "Canada",
    "Russia",
    "Ukraine"
]

function method1(){
    countryList.forEach(country=>{
        app.innerHTML +=`
        <div class="country">
        <p>${country}</p>
        </div>
        `
    })
}
function method2(){
    countryList.forEach(country=>{
       const div = document.createElement("div")
       const p = document.createElement("p")
       div.className = "country"
       const pTextNode = document.createTextNode(country)
       p.appendChild(pTextNode)
       div.appendChild(p)

       app.appendChild(div)
    })
}
window.addEventListener("load",function(){
    method2()
})