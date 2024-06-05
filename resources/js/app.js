import "./bootstrap";
import "~resources/scss/app.scss";
import * as bootstrap from "bootstrap";
import.meta.glob(["../img/**", "../fonts/**"]);


document.getElementById('search-icon').addEventListener('click', function() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
        searchBar.focus();
    } else {
        searchBar.style.display = 'none';
    }
});

// prendo la casella di input 
const image = document.getElementById('upload_image');

// se esiste nella pagina 
if (image) {
    image.addEventListener('change', () => {

        // prendo l'elemento img dove voglio la preview
        const preview = document.getElementById('uploadPreview');

        // creo nuovo oggetto file reader
        const oFReader = new FileReader();

        // uso il metodo readAsDataURL per leggere il file dell'immagine
        oFReader.readAsDataURL(image.files[0]);
        // al termine della lettura del file
        oFReader.onload = function(event){
            // metto nel src della preview l'immagine
            preview.src = event.target.result;
        }
    });
}