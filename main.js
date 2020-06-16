//Main Assesment
let body = document.querySelector('body')
let createMain = document.createElement('main')
let createButton = document.createElement('button')
let createLink = document.createElement('a')
let createImg = document.createElement('img')

body.prepend(createMain)
let main = document.querySelector('main')

createButton.append('This is a Button')
body.prepend(createButton)

createImg.src = 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/86383753_10158648156061412_5836468901491245056_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=N2D5Rvlz8UsAX9mmKo9&_nc_ht=scontent-lga3-1.xx&oh=258106f1a269861b73627176dfe6870f&oe=5F0F2BA5'
createImg.className = 'image'
main.append(createImg)

createLink.href = 'https://www.instagram.com/bulbytheboston/'
createLink.target = 'blank'
createLink.className = 'link'
createLink.append('This is a link to Bulbasaur\'s instagram!')
main.append(createLink)

createButton.addEventListener('click', function () {
    console.log('You clicked the remove "main" button')
    main.remove()
})

//Stretch Goal 1
let createInput = document.createElement('input')
createInput.id = 'createInput'
body.append(createInput)

let removeElementButton = document.createElement('button')
removeElementButton.append('Remove Element')
removeElementButton.id = 'removeElementButton'
body.append(removeElementButton)
// let rmvBttn = document.querySelector('#removeElementButton')

removeElementButton.addEventListener('click', function () {
    console.log('You clicked the remove element button')
    let removeInputValue = createInput.value
    let removeElement = document.querySelector(removeInputValue)
    console.log(removeInputValue)
    removeElement.remove()
})

//Stretch Goal 2
let createInputAdd = document.createElement('input')
createInputAdd.id = 'addInput'
body.append(createInputAdd)

let addElementButton = document.createElement('button')
addElementButton.append('Add Element')
addElementButton.id = 'addElementButton'
body.append(addElementButton)

newDiv = document.createElement('div')

addElementButton.addEventListener('click', function () {
    console.log('You clicked the add element button')
    let addInputValue = createInputAdd.value
    // let addElement = document.querySelector(addInputValue)
    newDiv.append(addInputValue)
    body.append(newDiv)
    
})