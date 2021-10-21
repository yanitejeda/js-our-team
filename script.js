//- Creiamo il nostro array di oggetti che rappresentano ciascun MEMBRO DEL TEAM. 
    //Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.

   // - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.

  //- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
   


  //per prima cosa creare un OBJECT con i vari membri del team

  const membriTeam = [
      {
          'nome':'Wayne Barnett',
          'text':'Founder & CEO',
          'image':'wayne-barnett-founder-ceo.jpg',
      },
      {
        'nome':'Angela Caroll',
        'text':'Chief Editor',
        'image':'angela-caroll-chief-editor.jpg',
    },
    {
        'nome':'Walter Gordon',
        'text':'Office Manager',
        'image':'walter-gordon-office-manager.jpg',
    },
    {
        'nome':'Angela Lopez',
        'text':'Social Media Manager',
        'image':'angela-lopez-social-media-manager.jpg',
    },
    {
        'nome':'Scott Estrada',
        'text':'Developer',
        'image':'scott-estrada-developer.jpg',
    },
    {
        'nome':'Barbara Ramos',
        'text':'Graphic Designer',
        'image':'barbara-ramos-graphic-designer.jpg',
    },
  ];

  for (let key in membriTeam) {
      console.log(membriTeam[key]);
  }

 