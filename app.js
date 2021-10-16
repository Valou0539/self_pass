let notesValue = document.querySelectorAll('.note_value')

notesValue.forEach(note => 
    note.textContent = Math.round(Math.random() * (18 - 9) + 9).toString() + ',00'
)

document.querySelector('#cours' + Math.round(Math.random() * (2 - 1) + 1).toString()).style.display = 'block'

const months = [
    'janv.',
    'févr',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juil.',
    'août',
    'sept.',
    'otc.',
    'nov.',
    'déc.'
]

let todayDate = new Date()
let day = todayDate.getDate()
let month = todayDate.getMonth()
let noteDate = document.querySelectorAll('.note_info .date')

for (let i = 0; i < noteDate.length; i++) {
    let date = noteDate[i]
    date.textContent = 'le ' + day.toString() + ' ' + months[month]
    day = day - Math.round(Math.random() * (3 - 0) + 0)
    if (day < 1) {
        day = 30
        month = month - 1
    }
}