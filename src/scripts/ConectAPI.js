fetchProfileData()
async function fetchProfileData() {
    const response = await fetch('/data/receita.json')
    let profileData = await response.json()
    return(profileData)
}