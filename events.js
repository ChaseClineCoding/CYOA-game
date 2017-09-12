var button = document.getElementById('begin')
var header = document.getElementsByTagName('header')[0]
var main = document.getElementsByTagName('main')[0]

// Scenes

var scene_0 = '> You find yourself in a cold dark cell.\n> Next to you, a rock troll fills the room with deafening snores.\n> What do you do?\n\nPress a number:\n1. Check gate\n2. Look around the cell\n3. Attempt to wake up the troll'

var scene_1a = '> The gate is locked.\n\nPress a number:\n1. Look around the cell\n2. Attempt to wake up troll'

var scene_1b = '> The cell is small and empty except for your noisy cellmate.\n> There\'s nothing you can use here.\n\nPress a number:\n1. Check gate\n2. Attempt to wake up the troll'

var scene_1c = '> The troll stirs, grumbles, and bellows "Why have you disturbed my sleep?!"\n\nPress a number:\n1. Attack troll\n2. Attempt to make friends'

var currScene = ''

button.addEventListener('click', (event) => {
  event.preventDefault()
  header.removeChild(button)
  beginQuest()
})


function firstOptions(op1, op2, op3) {
  window.addEventListener('keyup', function func(event) {
    if (event.code == 'Digit1') {
      clearText()
      newOptions(scene_1b, scene_1c)
      nextScene(op1)
    } else if (event.code == 'Digit2' && op2 !== undefined) {
      clearText()
      nextScene(op2)
    } else if (event.code == 'Digit3' && op3 !== undefined) {
      clearText()
      nextScene(op3)
    }
  })
}

function newOptions(op1, op2, op3) {
  // console.log(typeof func)
  // if (typeof func === 'function') {
    // window.removeEventListener('keyup', func)
  // }
  window.addEventListener('keyup', function func(event) {
    if (event.code == 'Digit1') {
      clearText()
      nextScene(op1)
    } else if (event.code == 'Digit2' && op2 !== undefined) {
      clearText()
      nextScene(op2)
    } else if (event.code == 'Digit3' && op3 !== undefined) {
      clearText()
      nextScene(op3)
    }
  })
}

function nextScene(scene) {
  currScene = scene
  var newP = document.createElement('p')
  newP.innerText = scene
  main.append(newP)
}

function clearText() {
  main.innerText = ''
}

// function check() {
//   if (currScene === scene_1a) {
//     console.log('Scene 1')
//     newOptions(scene_1b, scene_1c)
//   } else if (currScene === scene_1b) {
//     console.log('Scene 2')
//     newOptions(scene_1a, scene_1c)
//   } else if (currScene === scene_1c) {
//     console.log('Scene 3')
//     nextScene('Hello!')
//   } else {
//     console.log('Doesn\'t work')
//   }
// }

function beginQuest() {
  // display initial text
  nextScene(scene_0)
  // look for user input
  firstOptions(scene_1a, scene_1b, scene_1c)
  // continue with story
  // check()
}
