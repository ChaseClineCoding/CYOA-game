var button = document.getElementById('begin')
var header = document.getElementsByTagName('header')[0]
var main = document.getElementsByTagName('main')[0]
var scene_2b = []
var scene_2a = []
var scene_1c = []
var scene_1b = []
var scene_1a = []
var scene_0 = []

// Scenes

var scene_2b = ['> You offer to work with the troll to find a way out\n> The troll is pleased and gives you a crushing hug that leaves you gasping for air', 'none', 'none', 'none']

var scene_2a = ['> The troll rips you apart limb from limb\n> Bad move\n\nPress enter to return to previous scene', 'none', 'none', 'none']

var scene_1c = ['> The troll stirs, grumbles, and bellows "Why have you disturbed my sleep?!"\n\nPress a number:\n1. Attack troll\n2. Attempt to make friends', scene_2a, scene_2b, 'none']

var scene_1a = ['> The gate is locked.\n\nPress a number:\n1. Look around the cell\n2. Attempt to wake up troll', scene_1b, scene_1c, 'none']

var scene_1b = ['> The cell is small and empty except for your noisy cellmate.\n> There\'s nothing you can use here.\n\nPress a number:\n1. Check gate\n2. Attempt to wake up the troll', scene_1a, scene_1c, 'none']

var scene_1a = ['> The gate is locked.\n\nPress a number:\n1. Look around the cell\n2. Attempt to wake up troll', scene_1b, scene_1c, 'none']

var scene_0 = ['> You find yourself in a cold dark cell.\n> Next to you, a rock troll fills the room with deafening snores.\n> What do you do?\n\nPress a number:\n1. Check gate\n2. Look around the cell\n3. Attempt to wake up the troll', scene_1a, scene_1b, scene_1c]

var currScene = ''

button.addEventListener('click', (event) => {
  event.preventDefault()
  header.removeChild(button)
  beginQuest()
})


function newOptions(op1, op2, op3) {
  window.addEventListener('keyup', function func(event) {
    if (event.code == 'Digit1') {
      if (op1.length === 0){
        clearText()
        nextScene(currScene)
        var newP = document.createElement('p')
        newP.innerText = "> Try something else"
        main.append(newP)
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
  console.log(currScene)
  var newP = document.createElement('p')
  newP.innerText = scene[0]
  main.append(newP)
  newOptions(scene[1], scene[2], scene[3])
}

function clearText() {
  main.innerText = ''
}

function beginQuest() {
  // display initial text
  nextScene(scene_0)
  // look for user input
  // continue with story
}
