// Creare un array di Oggetti per le card da generare
// iterare sull'array per avere tutti i dati da inserire
// Generare le card con i dati ricavati dall'Array

// Permettere all'utente di inserire un nuovo membro, andando a prendere i Value della form infondo componendo cosi un nuovo oggetto.

// Pushare l'oggetto ottenuto nell'array di oggetti(membri)
// Generare la nuova card nel DOM.


// Array di membri
const members = [
    {
        foto: 'img/wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
    },
    {
        foto: 'img/angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
    },
    {
        foto: 'img/walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
    },
    {
        foto: 'img/angela-lopez-social-media-manager.jpg',
        nome: ' Angela Lopez',
        ruolo: 'Social Media Manager',
    },
    {
        foto: 'img/scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer',
    },
    {
        foto: 'img/barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
    },
];

// Iterare sull array per avere i dati
const card = document.querySelector('.team-container')

for (let i = 0; i < members.length; i++){
    const user = members[i]
    // Generazione HTML
    card.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="
            ${user.foto}"
            />
        </div>
        <div class="card-text">
            <h3>${user.nome}</h3>
            <p>${user.ruolo}</p>
        </div>
    </div>`
}

const btn = document.getElementById('addMemberButton')


btn.addEventListener('click' , function(){
    const username = document.getElementById('name').value
    const job = document.getElementById('role').value
    const img = document.getElementById('image').value

    console.log(username, job, img);
    
})
