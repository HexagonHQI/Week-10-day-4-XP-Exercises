//EX1:


javascript
fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
 .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error fetching data');
    }
  })
 .then(data => {
    console.log(data);
  })
 .catch(error => {
    console.error('Error:', error);
  });



  //EX2:


  javascript
fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
 .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Error fetching data');
    }
  })
 .then(data => {
    console.log(data);
  })
 .catch(error => {
    console.error('Error:', error);
  });



  //EX3:



  javascript
async function getStarship() {
  try {
    const response = await fetch("https://www.swapi.tech/api/starships/9/");
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const objectStarWars = await response.json();
    console.log(objectStarWars.result);
  } catch (error) {
    console.error('Error:', error);
  }
}

getStarship();



//EX4:


calling
//wait for 2 seconds 
resolved