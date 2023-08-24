const container = document.querySelector('.container');
const nameList = document.querySelector('.name');
const priceList = document.querySelector('.price');
const jobList = document.querySelector('.job');
const average = document.querySelector('.average');

const names = [
    "PeePee",
    "Dr. Eggman",
    "Prof",
    "Roland",
    "Shelly",
    "Mr. Bowers",
    "PooPoo",
    "Joenathan",
    "Karen",
    "Hillary",
    "Simon",
    "Conway",
    "Mr. Beef",
    "Dr. Skel E. Ton",
    "Mrs. Skill",
    "Donny",
    "Leland",
    "Sir Gun",
    "Mario",
    "Daisy"
  ];
  
const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "driver",
    "chef",
    "editor",
    "voice actor",
    "pet sitter",
    "electrician",
    "janitor"
  ];

function randomFreelancer(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const occupationIdx = Math.floor(Math.random()*occupations.length);
    const price = Math.ceil(Math.random()*100);
    const freelancer = {
      name: names[nameIdx],
      occupation: occupations[occupationIdx],
      startingPrice: price
    };
    return freelancer;
  }
  
const freelancers = [
    randomFreelancer(),
    randomFreelancer()
  ];

  function render(){
    const html = freelancers.map(function(freelancer){
      return `
        <div class="name"><ul><li>${freelancer.name}</li></ul></div>
        <div class="job"><ul><li>${freelancer.occupation}</ul></div>
        <div class="price"><ul><li>$${freelancer.startingPrice}</ul></div>`;
    });
    container.innerHTML = html.join('');
  }
  
render();
setInterval(function(){
    const newFreelancer = randomFreelancer();
    freelancers.push(newFreelancer);
    render();
  }, 5000);