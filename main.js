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
   }
}

// Get Villager's Info
function getVillagersInfo(e){
    const villager = e.target.value
    fetch(`http://acnhapi.com/v1/villagers/${villager}`)
    .then(res => res.json())
    .then(info => renderVillagersInfo(info))
    .catch(error => alert(error))
}

// Render info on website
function renderVillagersInfo(villagers){
   renderVillagerCard(villagers)
}

function renderVillagerCard(villager){
    const villagerName = villager.name["name-USen"]
    const {birthday, gender, hobby, personality, saying, species, 
        ["catch-phrase"]: catchPhrase,
        ["icon_uri"]: iconURI,
        ["image_uri"]: imageURI
    } = villager
    console.log(villagerName)

}


