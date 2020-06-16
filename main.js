let body = document.querySelector('body')
let createMain = document.createElement('main')
let createButton = document.createElement('button')
createButton.append('This is a Button')
body.prepend(createMain)
body.prepend(createButton)

let main = document.querySelector('main')
let createImg = document.createElement('img')
createImg.src = 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/86383753_10158648156061412_5836468901491245056_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=N2D5Rvlz8UsAX9mmKo9&_nc_ht=scontent-lga3-1.xx&oh=258106f1a269861b73627176dfe6870f&oe=5F0F2BA5'
createImg.className = 'image'
main.append(createImg)
let createLink = document.createElement('a')
createLink.href = 'https://www.instagram.com/bulbytheboston/'
createLink.target = 'blank'
createLink.className = 'link'
createLink.append('This is a link to Bulbasaur\'s instagram!')
main.append(createLink)

createButton.addEventListener('click', function() {
    body.remove(createMain)
})