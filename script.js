
// Définition des options du QR code
var options = {
    text: 'https://brave.com', // texte à afficher dans le QR code
    width: 200, // largeur du QR code
    height: 200, // hauteur du QR code
    colorDark: '#000000', // couleur de fond du QR code
    colorLight: '#ffffff', // couleur de texte du QR code
};

// Génération du QR code
toDataURL(options, function (error, url) {
    if (error) {
        console.error(error);
    } else {
        console.log('QR code généré avec succès !');
        // affichage de l'image du QR code
        var img = new Image();
        img.src = url;
        document.body.appendChild(img);
    }
});