if (document.querySelectorAll('[data-bss-baguettebox]').length > 0) {
   baguetteBox.run('[data-bss-baguettebox]', { animation: 'slideIn' });
}
function popUp() {
    var loader = document.getElementById('preloader');
    loader.style.visibility = "visible";
  setTimeout(function () {
    document.getElementById('preloader').style.display = "none";
  }, 5000);   
});
popUp();