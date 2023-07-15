// http://acnhapi.com/v1/villagers


// Elements
const selectVillager = document.querySelector("#villagers")

// Function Calls
getVillager()
// villagerOptions()

// Fetching villager data
function getVillager(){
    fetch("http://acnhapi.com/v1/villagers")
    .then(res => res.json())
    .then(villagers => villagerOptions(Object.values(villagers)))
    .catch()
}

//All villagers data
function villagerOptions(villagers) {
   for (const villager of villagers){
    const option = document.createElement("option")
    option.value = villager.name["name-USen"]
    option.textContent = villager.name["name-USen"]
    selectVillager.append(option)
    console.log(villager.name["name-USen"])
   }
}



