validation = document.getElementById("valider")
validation.addEventListener('click', function () 
{let prenom = document.getElementById("prenom").value
  let nom = document.getElementById('pseudo').value
  let mdp = document.getElementById("motdepass").value
  let mdps = document.getElementById("motdepasse").value
if(mdp == mdps) {
   alert('Bonjour Monsieur ou madame '+  prenom  +'  ' + nom)
  }
  else {
    alert ("Veuillez bien vouloir vérifié que les mots de passe inséré snt similaire")
     event.preventDefault()
  }

})
window.addEventListener('unload' , function rien()
{
 alert("Bonjour")
})
/*let prenom = document.getElementById("prenom").value
  let nom = document.getElementById('pseudo').value
   */