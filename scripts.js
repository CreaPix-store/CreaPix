 // Définir la date cible (par exemple, le 1er janvier 2025 à minuit)
 const targetDate = new Date('May 1, 2025 00:00:00').getTime();



 // Fonction de mise à jour du compte à rebours
 function updateCountdown() {
     const now = new Date().getTime();
     const timeLeft = targetDate - now;

     if (timeLeft >= 0) {
         // Calculer les jours, heures, minutes et secondes restants
         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

         // Mettre à jour les éléments du DOM
         document.getElementById('days').textContent = days;
         document.getElementById('hours').textContent = hours;
         document.getElementById('minutes').textContent = minutes;
         document.getElementById('seconds').textContent = seconds;
     } else {
         // Si la date cible est atteinte, afficher un message ou arrêter le compte à rebours
         document.querySelector('.countdown').textContent = 'Promotion terminée';
     }
 }

 // Mettre à jour le compte à rebours toutes les secondes
 setInterval(updateCountdown, 1000);

 // Appeler la fonction immédiatement pour afficher le compte à rebours initialement
 updateCountdown();



 // Observer pour détecter quand les éléments sont visibles à l'écran
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

// Sélectionner tous les éléments à animer
const elements = document.querySelectorAll('.animate-on-scroll');

// Observer chaque élément
elements.forEach(element => {
    observer.observe(element);
});

/*whatsapp*/
function openWhatsApp() {
    window.open('https://wa.me/0141334742', '_blank');
    // Here you can add the functionality to open the chatbot window or modal
}

/*animation du bonus*/
document.getElementById('gift').addEventListener('click', function() {
    const gift = document.getElementById('gift');
    const message = document.getElementById('message');
    
    // Animation du cadeau qui disparaît
    gift.style.transform = 'scale(0)';
    gift.style.transition = 'transform 1s ease';
    
    // Afficher le message après un court délai
    setTimeout(function() {
        gift.style.display = 'none';  // Cacher le cadeau
        message.classList.remove('hidden');
        message.classList.add('visible');
    }, 1000);
});

///
// Récupère l'élément vidéo
var video = document.getElementById("myVideo");

// Tente de démarrer la vidéo automatiquement avec le son
window.onload = function() {
    video.play().then(() => {
        // Lecture réussie
        console.log("La vidéo démarre avec le son.");
    }).catch((error) => {
        // Si la lecture automatique est bloquée, retire l'attribut "muted"
        video.muted = false;
        video.play();
    });
};




/** */

// Scroll to top functionality
window.onscroll = function() {
    var scrollButton = document.querySelector('.scroll-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleMessage() {
    var message = document.getElementById("message");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        message.classList.add("visible");
    } else {
        message.classList.remove("visible");
        message.classList.add("hidden");
    }
}


