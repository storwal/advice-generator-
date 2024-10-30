let btn = document.getElementById('newAdvice');
let advice = document.getElementById('advice')
let number = document.querySelector('.number')

const advices = [{
  advice: "You should play Still wakes the deep.",
  number: `advice #2`
},{
  advice: "You should play Nier replicant.",
  number: `advice #3` 
},{
  advice: "You should play Nier automata",
  number: `advice #4`  
},{
  advice: "You should play Unicorn overlord",
  number: `advice #5`   
},{
  advice: "You should play 13 sentinels aegis rim",
  number: `advice #6`    
},{
  advice: "You should play The Metro series",
  number: `advice #7`   
},{
  advice: "You should play The witcher 3",
  number: `advice #8`  
},{
  advice: "You should play The last of us",
  number: `advice #9` 
},{
  advice: "You should play Dying light",
  number: `advice #10`  
},{
  advice: "You should play Ender lilies",
  number: `advice #11` 
},]

btn.addEventListener('click', function(){



  let random = Math.floor(Math.random() * advices.length)
  
  advice.innerHTML = advices[random].advice
  number.innerHTML = advices[random].number
  })