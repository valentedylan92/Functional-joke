function selfPleasure(){
  let $wrists = $('.wrist');
  $.getJSON('pornSites.json', function(data) {
    findPerfectVideo(data.categorie,data.actress,15);
  });
  initWrist(left);
  $wrist.addEventListener('moneyshot',terminate);
  findTissue();
}

function findPerfectVideo(cat,act,timeAvailable){}

function initWrist(side){
  

}


function terminate(){};

function findTissue(){
  let distanceToDo = []

  $.getJSON('tissue.json', function(data) {
      if(data.tissue == true){
        distanceToDo.push(data.distanceCm);
      }
      return Math.min(distanceToDo);
  });
};



// Exemple JSON findTissue
{
  "location":"nightstand",
  "tissue": true ,
  "distanceCm": 157
}
