// Elements
const selectVillager = document.querySelector(".villagers")
const villagerContainer = document.querySelector(".villagerinfo-container")
const button = document.querySelector(".button")

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
    villagerContainer.replaceChildren()

   renderVillagerCard(villagers)
}

function renderVillagerCard(villager){
    const villagerName = villager.name["name-USen"]

    const {id, ["image_uri"]: imageURI} = villager

    const cardDiv = document.createElement("div")

    cardDiv.classList.add("card")
   //event listener
   button.addEventListener("click", e => getVillagerDetails(e, id))
  
    const image = document.createElement("img")
    image.src = imageURI

    const title = document.createElement("h2")
    title.textContent = villagerName

    cardDiv.append(image, title, button)
    villagerContainer.append(cardDiv)
}

function getVillagerDetails(e, id){
    fetch(`http://acnhapi.com/v1/villagers/${id}`)
    .then(res => res.json())
    .then(villager => renderVillagerDetails(villager))
    .catch(error => alert(error))
}

function renderVillagerDetails(villager){
    const villagerName = villager.name["name-USen"]
    const {id, birthday, gender, hobby, personality, saying, species, 
        ["catch-phrase"]: catchPhrase,
        ["icon_uri"]: iconURI
    }= villager
    console.log(villager)

    // Title Area
    const title = document.createElement("p")
    title.textContent = `Villager Name: ${villagerName}`
    title.style.textDecoration = "underline"
    let titleArea = document.querySelector(".villager-title")
    titleArea.replaceChildren()
    titleArea.append(title)

    // Info Area
    const infoArea = document.querySelector(".villager-information")
    const infoTitle = document.createElement("h3")
    const infoBirthday = document.createElement("p")
    const infoGender = document.createElement("p")
    const infoHobby = document.createElement("p")
    const infoPersonality = document.createElement("p")
    const infoSaying = document.createElement("p")
    const infoSpecies = document.createElement("p")
    const infoCatchPhrase = document.createElement("p")

    infoTitle.textContent = "Information"
    infoTitle.style.textDecoration = "bold"
    infoBirthday.textContent = `Date of birth: ${birthday}`
    infoGender.textContent = `Gender: ${gender}`
    infoSpecies.textContent = `Species: ${species}`
    infoPersonality.textContent = `Personality: ${personality}`
    infoHobby.textContent = `Hobby: ${hobby}`
    infoCatchPhrase.textContent = `Catch-Phrase: ${catchPhrase}`
    infoSaying.textContent = `${villagerName} says: ${saying}`

    
    infoArea.replaceChildren()
    infoArea.append(infoTitle, infoBirthday, infoGender, infoSpecies, infoPersonality, infoHobby, infoCatchPhrase, infoSaying)
}