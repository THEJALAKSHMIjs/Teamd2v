const section = document.getElementById("accordionSection")

const stayBtn = document.getElementById("stayBtn")
const hotelBtn = document.getElementById("hotelBtn")

function resetButtons(){

stayBtn.classList.remove("active")
hotelBtn.classList.remove("active")

}

/* STAYCLUB */

function openStayClub(selectedProperty=null){

resetButtons()

stayBtn.classList.add("active")

const kochiProps = ["river","luna","tranquil"]
const ootyProps = ["woody","container","yrt","hillheaven","littlehome"]
const munnarProps = ["mist"]

const cityOpen = kochiProps.includes(selectedProperty)
const hillOpen = ootyProps.includes(selectedProperty) || munnarProps.includes(selectedProperty)

const ootyOpen = ootyProps.includes(selectedProperty)
const munnarOpen = munnarProps.includes(selectedProperty)

section.innerHTML = `

<details ${cityOpen ? "open":""}>
<summary>City</summary>

<details class="nested" ${cityOpen ? "open":""}>
<summary>Properties in Kochi</summary>

<button class="hotel-btn ${selectedProperty==='river'?'active':''}" onclick="openPropertyPage('river')">
River Vill'e
</button>

<button class="hotel-btn ${selectedProperty==='luna'?'active':''}" onclick="openPropertyPage('luna')">
Luna Nest
</button>

<button class="hotel-btn ${selectedProperty==='tranquil'?'active':''}" onclick="openPropertyPage('tranquil')">
Tranquil
</button>

</details>
</details>

<details ${hillOpen ? "open":""}>
<summary>Hill Stations</summary>

<details class="nested" ${ootyOpen ? "open":""}>
<summary>Properties in Ooty</summary>

<button class="hotel-btn ${selectedProperty==='woody'?'active':''}" onclick="openPropertyPage('woody')">
Woody & Co
</button>

<button class="hotel-btn ${selectedProperty==='container'?'active':''}" onclick="openPropertyPage('container')">
The Leafy Nook Container Stay
</button>

<button class="hotel-btn ${selectedProperty==='yrt'?'active':''}" onclick="openPropertyPage('yrt')">
The Nilgiri Paradise
</button>

<button class="hotel-btn ${selectedProperty==='hillheaven'?'active':''}" onclick="openPropertyPage('hillheaven')">
The Hill Heaven
</button>

<button class="hotel-btn ${selectedProperty==='littlehome'?'active':''}" onclick="openPropertyPage('littlehome')">
Little Home
</button>

</details>

<details class="nested" ${munnarOpen ? "open":""}>
<summary>Properties in Munnar</summary>

<button class="hotel-btn ${selectedProperty==='mist'?'active':''}" onclick="openPropertyPage('mist')">
The Mist'e Munnar
</button>

</details>

</details>

`

section.scrollIntoView({behavior:"smooth"})

}

/* HOTEL */

function openHotels(selectedHotel=null){

resetButtons()

hotelBtn.classList.add("active")

const thrissurHotels = ["central","amaravati"]
const kochiHotels = ["dana","palm","zoot","saaaj"]

const thrissurOpen = thrissurHotels.includes(selectedHotel)
const kochiOpen = kochiHotels.includes(selectedHotel)

section.innerHTML = `

<details ${thrissurOpen ? "open":""}>
<summary>Hotels in Thrissur</summary>

<button class="hotel-btn ${selectedHotel==='central'?'active':''}" onclick="openHotelPage('central')">
Central Hotel by D2V
</button>

<button class="hotel-btn ${selectedHotel==='amaravati'?'active':''}" onclick="openHotelPage('amaravati')">
Hotel Amaravati by D2V
</button>

</details>

<details ${kochiOpen ? "open":""}>
<summary>Hotels in Kochi</summary>

<button class="hotel-btn ${selectedHotel==='dana'?'active':''}" onclick="openHotelPage('dana')">
Dana Residency
</button>

<button class="hotel-btn ${selectedHotel==='palm'?'active':''}" onclick="openHotelPage('palm')">
Palm Grove by D2V
</button>

<button class="hotel-btn ${selectedHotel==='zoot'?'active':''}" onclick="openHotelPage('zoot')">
Zoot Kochi Infopark
</button>

<button class="hotel-btn ${selectedHotel==='saaaj'?'active':''}" onclick="openHotelPage('saaaj')">
Hotel Saaaj
</button>

</details>

`

section.scrollIntoView({behavior:"smooth"})

}

/* OPEN HOTEL PAGE */

function openHotelPage(hotel){

window.location.href = "hotel.html?name=" + hotel + "&from=hotel"

}

/* OPEN PROPERTY PAGE */

function openPropertyPage(property){

window.location.href = "stayclub.html?name=" + property + "&from=stayclub"

}

/* AUTO OPEN AFTER BACK */

const params = new URLSearchParams(window.location.search)

const open = params.get("open")
const property = params.get("property")
const hotel = params.get("hotel")

if(open === "stayclub"){
openStayClub(property)
}

if(open === "hotel"){
openHotels(hotel)
}

/* CLICK OUTSIDE RESET */

document.addEventListener("click", function(e){

if(
!stayBtn.contains(e.target) &&
!hotelBtn.contains(e.target) &&
!section.contains(e.target)
){

resetButtons()
section.innerHTML=""

}

})