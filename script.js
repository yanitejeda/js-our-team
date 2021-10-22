//- Creiamo il nostro array di oggetti che rappresentano ciascun MEMBRO DEL TEAM. 
    //Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

   // - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

  //- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
   

  const teamContainer = document.querySelector(".team-container"); //prendo l'elemento nel mio dom dove devo inserire le card
    console.log(teamContainer);

    const addMemberButton = document.getElementById("addMemberButton") //prenso il bottone
    
    
  //per prima cosa creare un OBJECT con i vari membri del team
let gruppoPersonaggi = {singleElement : [
    {
        nome:'Wayne Barnett',
        text:'Founder & CEO',
        image:'img/wayne-barnett-founder-ceo.jpg',
    },
    {
      nome:'Angela Caroll',
      text:'Chief Editor',
      image:'img/angela-caroll-chief-editor.jpg',
  },
  {
      nome:'Walter Gordon',
      text:'Office Manager',
      image:'img/walter-gordon-office-manager.jpg',
  },
  {
      nome:'Angela Lopez',
      text:'Social Media Manager',
      image:'img/angela-lopez-social-media-manager.jpg',
  },
  {
      nome:'Scott Estrada',
      text:'Developer',
      image:'img/scott-estrada-developer.jpg',
  },
  {
      nome:'Barbara Ramos',
      text:'Graphic Designer',
      image:'img/barbara-ramos-graphic-designer.jpg',
  }
]

};



 
  //tramite un ciclo for seleziono i singoli elementi nel mio object
let personaggi = gruppoPersonaggi['singleElement']; 


for (let i = 0, len = personaggi.length; i<len; i++) {
    
    console.log(personaggi[i]);
    console.log(personaggi[i].nome);
    console.log(personaggi[i].text);
    console.log(personaggi[i].image);

    teamContainer.innerHTML += `

    <div class="team-card">
        <div class="card-image">
          <img
            src="${personaggi[i].image}"
            alt="${personaggi[i].nome}"
          >
        </div>
        <div class="card-text">
          <h3>${personaggi[i].nome}</h3>
          <p>${personaggi[i].text}</p>
        </div>
      </div>
    


    `;

}

//al clic del bottone l'utente può aggiungere un nuovo membro
//bisogna creare un bottone che al suo click compie un'azione
addMemberButton.addEventListener('click', function(){
    personaggi.push({
        nome:'pino',
        text:'',
        image:'',
    })
    console.log(personaggi);
    
   

})