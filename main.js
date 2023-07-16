// http://acnhapi.com/v1/villagers


// Elements
const selectVillager = document.querySelector(".villagers")

// Function Calls
getVillager()

// Event Listeners
selectVillager.addEventListener("change", getVillagersInfo)

// Fetching villager data
function getVillager(){
    fetch("http://acnhapi.com/v1/villagers")
    .then(res => res.json())
    .then(villagers => {
        villagerOptions(Object.values(villagers))
        // getVillagersId(Object.values(villagers))
    })
    .catch(error => alert(error))
}

// Dropdown Option
function villagerOptions(villagers) {
   for (const villager of villagers){
    const option = document.createElement("option")
    option.id = villager.id
    option.value = villager["file-name"]
    option.textContent = villager.name["name-USen"]
    selectVillager.append(option)
    // console.log(villager.name["name-USen"])
   }
}

function getVillagersInfo(e){
    // debugger
    const villager = e.target.value
    console.log(villager)
    fetch(`http://acnhapi.com/v1/villagers/${villager}`)
    .then(res => res.json())
    .then(info => console.log(info))
    .catch(error => alert(error))
}

// function renderVillagersInfo(villagers){
//     console.log(villagers)
// }



