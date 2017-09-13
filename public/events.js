var button = document.getElementById('begin')
var header = document.getElementsByTagName('header')[0]
var main = document.getElementsByTagName('main')[0]
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

var scene_5c = ['Daggers text', 'none', 'none', 'none']

var scene_5b = ['Staff text', 'none', 'none', 'none']

var scene_5a = ['Axe text', 'none', 'none', 'none']

var scene_4 = ['> You head down a corridor and enter a torch-lit room.\n> You see a table with an axe, a magic staff, and a pair of daggers.\n> Which weapon do you choose?\n\nPress a number:\n1. Axe - Barbarian\n2. Staff - Mage\n3. Daggers - Rogue', scene_5a, scene_5b, scene_5c]

var scene_3c = ['> Grol shakes the ground as he jumps up and down with excitement\n> Grol: "Yes! Grol be free of masters! All Grol want is munch time on rocks and quiet for sleep time. Grol no ask for much."\n> The rock troll steps out of the way and lets you out of the cell.\n\nPress enter to continue...', scene_4, 'none', 'none', 'continue']

var scene_3b = ['(Failed)\n> Grol: "Grol is not caring. Masters already know Grol sleeps all day. Go tell masters. Grol gets beat either way."\n\nPress enter to return to last checkpoint', 'none', 'none', 'none']

var scene_3a = ['> You: "Tell me more about your masters."\n> Grol: "Masters powerful with magic. Take blood from stinky humans they do. Scary angry bitey dogs they make using magic from man-blood. Grol no like scary masters pets. Bitey dogs bark and snap at poor Grol"\n\nPress a number:\n1. Threaten to tell on Grol for sleeping (Intimidate)\n2. Offer your help with getting rid of Grol\'s masters (Persuade)', scene_3b, scene_3c, 'none']

var scene_2b = ['> You: "Are you in charge here?"\n> Grol: "Grol work for masters. Masters beat Grol for too much sleep, make Grol watch over stinky humans"\n\nPress a number:\n1. Ask for more info on Grol\'s masters\n2. Threaten to tell on Grol for sleeping (Intimidate)\n3. Offer your help with getting rid of Grol\'s masters (Persuade)', scene_3a, scene_3b, scene_3c, 'checkpoint']

var scene_2a = ['> Bad move\n> The troll tears you apart limb from limb\n\nPress enter to return to last checkpoint', 'none', 'none', 'none']

var scene_1c = ['> The troll grumbles, gets up, and flings the gate open.\n> Towering over you he bellows, "Why you wake Grol?!"\n\nPress a number:\n1. Attack!\n2. Talk to troll', scene_2a, scene_2b, 'none', 'checkpoint']

var scene_1b = ['> The cell is cramped and empty.\n> There\'s nothing you can use here.\n\nPress a number:\n1. Check gate\n2. Attempt to wake up the troll', scene_1a, scene_1c, 'none']

var scene_1a = ['> The gate is locked.\n\nPress a number:\n1. Look around the cell\n2. Attempt to wake up the troll', scene_1b, scene_1c, 'none', 'checkpoint']

var scene_0 = ['> You find yourself in a cold dark cell.\n> A rock troll sleeps just outside the gate shaking the room with deafening snores.\n> What do you do?\n\nPress a number:\n1. Check gate\n2. Look around the cell\n3. Attempt to wake up the troll', scene_1a, scene_1b, scene_1c]

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
  var newP = document.createElement('p')
  newP.innerText = scene[0]
  main.append(newP)
  newOptions(scene[1], scene[2], scene[3])
}

function clearText() {
  main.innerText = ''
}

function beginQuest() {
  nextScene(scene_0)
}
