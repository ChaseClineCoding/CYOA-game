var button = document.getElementById('begin')
var header = document.getElementsByTagName('header')[0]
var main = document.getElementsByTagName('main')[0]
var scene_11 = []
var scene_10b = []
var scene_10a = []
var scene_9b = []
var scene_9a = []
var scene_8b = []
var scene_8a = []
var scene_7 = []
var scene_6 = []
var scene_5c = []
var scene_5b = []
var scene_5a = []
var scene_4 = []
var scene_3c = []
var scene_3b = []
var scene_3a = []
var scene_2b = []
var scene_2a = []
var scene_1c = []
var scene_1b = []
var scene_1a = []
var scene_0 = []

// Scenes

var currScene = ''

scene_11 = ['> Congratulations!\n> You made it out alive!\n\nPress enter to play again', 'restart', 'none', 'none', 'gif', 'zDBUT0lkIdiYo']

scene_10b = ['> The beast leads you right to its masters.\n> The three powerful mages focus their dark powers on you.\n> You feel your blood begin to boil.\n> As your vessels rupture, you violently erupt in a shower of blood, tissue, and bone.\n\nPress enter to return to last checkpoint', 'none', 'none', 'none', 'gif', '3oriO7Cxcsc2Qw7Aje']

scene_10a = ['> You proceed forward through the labyrinth of corridors.\n> You turn a corner and see sunlight at the end of the hall.\n\nPress enter to continue', scene_11, 'none', 'none', 'continue']

scene_9b = ['> You give the creature everything you\'ve got.\n> You manage to injure the beast and it takes off down the corridor.\n\nEnter a number:\n1. Continue in opposite direction\n2. Chase beast down and finish it off', scene_10a, scene_10b, 'none', 'checkpoint']

scene_9a = ['> You bolt down the next corridor and attempt to outrun the beast, but you are no match for its speed.\n> It catches you and rips you in half.\n\nPress enter to return to last checkpoint', 'none', 'none', 'none', 'gif', '3o6ZsVVxlkWVP4PW2k']

scene_8b = ['> You manage to help their victim escape.\n> Unfortunately, the dark mages now turn their attention towards you and continue their chanting.\n> You feel your skin stretching and tearing as something within you tries to make its way out.\n> You writhe in agony as you make your transformation from man to beast.\n\nPress enter to return to last checkpoint', 'none', 'none', 'none', 'gif', 'zarMsdsEnGcWA']

scene_8a = ['> You watch in horror as the poor man\'s skin begins shifting and stretching.\n> Razor sharp claws rip through his body from the inside.\n> Like a snake shedding its skin, a monstrous creature makes its way out and lets its ravaged man suit collapse to the ground.\n> The acolytes leave but the beast now paces the room.\n\nEnter a number:\n1. Flee\n2. Fight', scene_9a, scene_9b, 'none', 'checkpoint']

scene_7 = ['> You sneak into the room at the end of the hall where you find the source of sinister voices.\n> Three Acolytes of Darkness surround a beaten and bloodied man.\n> They appear to be performing some sort of ritual sacrifice.\n> What do you do?\n\nEnter a number:\n1. Stay hidden\n2. Stop the ritual', scene_8a, scene_8b, 'none', 'checkpoint']

scene_6 = ['> With weapon in hand, you continue down the corridor.\n> You hear chanting in an unfamiliar tongue off in the distance.\n> As you close in on the strange voices, the darkness around you deepens.\n> You hear a blood curdling scream.\n> The torches that line the corridor flicker.\n> The darkness appears to be growing, suppressing all sources of light.\n\nPress enter to continue', scene_7, 'none', 'none', 'continue']

scene_5c = ['> You have chosen the path of the Rogue.\n> You use your stealth and cunning to sneak by enemies undected or take them out silenty with your trusty daggers.\n\nPress enter to continue', scene_6, 'none', 'none', 'continue']

scene_5b = ['> You have chosen the path of the Mage.\n> You use your arcane knowledge and spell-casting abilities in order to manipulate the elements and disintegrate your enemies.\n\nPress enter to continue', scene_6, 'none', 'none', 'continue']

scene_5a = ['> You have chosen the path of the Barbarian.\n> You use your overwhelming strength to wield heavy weapons and hack your enemies to pieces.\n\nPress enter to continue', scene_6, 'none', 'none', 'continue']

scene_4 = ['> You head down a corridor and enter a torch-lit room.\n> You see a table with an axe, a magical staff, and a pair of daggers.\n> Which weapon do you choose?\n\nPress a number:\n1. Axe - Barbarian\n2. Staff - Mage\n3. Daggers - Rogue', scene_5a, scene_5b, scene_5c]

scene_3c = ['> Grol shakes the ground as he jumps up and down with excitement\n> Grol: "Yes! Grol be free of masters! All Grol want is rocks to munch on and quiet for sleep time. Grol no ask for much."\n> The rock troll lumbers out of the doorway and allows you to pass.\n\nPress enter to continue', scene_4, 'none', 'none', 'continue']

scene_3b = ['(Failed)\n> Grol: "Grol is not caring. Masters already know Grol sleeps all day. Go tell masters. Grol gets beat either way."\n\nPress enter to return to last checkpoint', 'none', 'none', 'none']

scene_3a = ['> You: "Tell me more about your masters."\n> Grol: "Masters powerful with magic. Is taking stinky humans and turning them into ugly bitey monsters. Grol no like angry masters pets. Bitey critters snarl and snap at poor Grol."\n\nPress a number:\n1. Threaten to tell on Grol for sleeping (Intimidate)\n2. Offer your help with getting rid of Grol\'s masters (Persuade)', scene_3b, scene_3c, 'none']

scene_2b = ['> You: "Are you in charge here?"\n> Grol: "Grol work for masters. Masters beat Grol for too much sleep, make Grol watch over stinky humans."\n\nPress a number:\n1. Ask for more info on Grol\'s masters\n2. Threaten to tell on Grol for sleeping (Intimidate)\n3. Offer your help with getting rid of Grol\'s masters (Persuade)', scene_3a, scene_3b, scene_3c, 'checkpoint']

scene_2a = ['> Bad move.\n> The troll grabs you by the skull and tears you apart like string cheese.\n\nPress enter to return to last checkpoint', 'none', 'none', 'none', 'gif', 'l41JFruERBjM13fPO']

scene_1c = ['> The troll grumbles, stands up, and flings the gate open.\n> Towering over you he bellows, "Why you wake Grol?!"\n\nPress a number:\n1. Attack!\n2. Talk to troll', scene_2a, scene_2b, 'none', 'checkpoint']

scene_1b = ['> The cell is cramped and empty.\n> There\'s nothing you can use here.\n\nPress a number:\n1. Check gate\n2. Attempt to wake up the troll', scene_1a, scene_1c, 'none']

scene_1a = ['> The gate is locked.\n\nPress a number:\n1. Look around the cell\n2. Attempt to wake up the troll', scene_1b, scene_1c, 'none', 'checkpoint']

scene_0 = ['> You find yourself in a cold dark cell.\n> A rock troll sleeps just outside the gate shaking the room with deafening snores.\n> What do you do?\n\nPress a number:\n1. Check gate\n2. Look around the cell\n3. Attempt to wake up the troll', scene_1a, scene_1b, scene_1c]

var saveScene = scene_1a

button.addEventListener('click', (event) => {
  event.preventDefault()
  header.removeChild(button)
  beginQuest()
})


function newOptions(op1, op2, op3) {
  window.addEventListener('keyup', function func(event) {
    if (event.code == 'Digit1') {
      if (op1.length === 0) {
        clearText()
        nextScene(saveScene)
      } else {
        clearText()
        nextScene(op1)
      }
    } else if (event.code == 'Digit2' && op2 !== 'none') {
      clearText()
      nextScene(op2)
    } else if (event.code == 'Digit3' && op3 !== 'none') {
      clearText()
      nextScene(op3)
    }
    window.removeEventListener('keyup', func)
  })
}

function nextScene(scene) {
  currScene = scene
  if (scene[4] === 'checkpoint') {
    saveScene = scene
  }
  if (scene[1] === 'none') {
    window.addEventListener('keyup', function enter(event) {
      if (event.code === 'Enter') {
        clearText()
        nextScene(saveScene)
      }
      window.removeEventListener('keyup', enter)
    })
  }
  if (scene[4] === 'continue') {
    window.addEventListener('keyup', function enter(event) {
      if (event.code === 'Enter') {
        clearText()
        nextScene(scene[1])
      }
      window.removeEventListener('keyup', enter)
    })
  }
  if (scene[1] === 'restart') {
    window.addEventListener('keyup', function enter(event) {
      if (event.code === 'Enter') {
        clearText()
        nextScene(scene_0)
      }
      window.removeEventListener('keyup', enter)
    })
  }
  if (scene[4] === 'gif') {
    getGif(scene[5])
  }
  var newP = document.createElement('p')
  newP.innerText = scene[0]
  main.append(newP)
  newOptions(scene[1], scene[2], scene[3])
}

function getGif(endpoint) {
  fetch('https://api.giphy.com/v1/gifs/' + endpoint + '?api_key=d964f0a82ef84598bba1d5f95b1a590d')
    .then((response) => {
      return response.json()
        .then((gif) => {
          var newImg = document.createElement('img')
          newImg.setAttribute('src', gif.data.images.original.url)
          newImg.setAttribute('alt', ' ')
          console.log(newImg)
          main.append(newImg)
        })
    })
}

function clearText() {
  main.innerText = ''
}

function beginQuest() {
  nextScene(scene_0)
}
