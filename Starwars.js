async function planets () {
    let response1 = await fetch("https://swapi.dev/api/planets");
    let response2 = await response1.json();
    let response3 = response2.results
    let result = response3.map(planet => `<li> name: ${planet.name} ----- rotation period: ${planet.rotation_period}----- poulation: ${planet.population}------ residents: ${planet.residents}</li>`)
    return document.body.innerHTML = result.join("");
}
planets()
