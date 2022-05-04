const btnAbrir = document.querySelector('#btnAbrir'),
      navegacion = document.querySelector('.navegacion__enlaces'),

      // Section two slider
      seccion2_btnSlider = document.querySelectorAll('.seccion2__textos__nav span'),
      slider_titulo = document.querySelector('.seccion2__textos__parrafos h1'),
      slider_texto = document.querySelector('.seccion2__textos__parrafos p'),
      slider_detalles = document.querySelectorAll('.seccion2__textos__detalles__item h1'),
      destinoImg = document.querySelector('.seccion2__imagen img'),

      // Section three slider
      seccion3_btnSlider = document.querySelectorAll('.seccion3__botones input'),
      slider_area = document.querySelector('.seccion3__textos__parrafos h2'),
      slider_nombre = document.querySelector('.seccion3__textos__parrafos h1'),
      slider_bio = document.querySelector('.seccion3__textos__parrafos p'),
      personImg = document.querySelector('.seccion3__imagen'),

      // Section four slider
      seccion4_btnSlider = document.querySelectorAll('.seccion4__textos__parrafos__item h1'),
      slider_tecnlogica = document.querySelector('.seccion4__textos__parrafos__item:last-child h1'),
      slider_tecnologia_desc = document.querySelector('.seccion4__textos__parrafos__item p'),
      slider_tecnologia_img = document.querySelector('.seccion4__imagen img');

      // Content Slider
      /*
      content_slider_btn = document.querySelectorAll('.navegacion__enlaces a'),
      seccion = document.querySelectorAll('section');
        */

for (let index = 0; index < seccion2_btnSlider.length; index++) {
    seccion2_btnSlider[index].addEventListener('click', function(){
        const slider2_active = document.querySelectorAll('.slider2__activo');
        fetch('data.json')
        .then(res => res.json())
        .then(datos => {
            if (slider2_active.length > 0) {
                slider2_active.forEach(posicion =>{
                    posicion.classList.remove('slider2__activo')
                });
            }
            seccion2_btnSlider[index].classList.add('slider2__activo');
            slider_titulo.textContent = datos.destinations[index].name;
            slider_texto.textContent = datos.destinations[index].description;
            slider_detalles[0].textContent = datos.destinations[index].distance;
            slider_detalles[1].textContent = datos.destinations[index].travel;
            destinoImg.src = datos.destinations[index].images.png;
        });
    });
}

for (let index = 0; index < seccion3_btnSlider.length; index++) {
    seccion3_btnSlider[index].addEventListener('click', function(){
        fetch('data.json')
        .then(res => res.json())
        .then(datos => {
            slider_area.textContent = datos.crew[index].role;
            slider_nombre.textContent = datos.crew[index].name;
            slider_bio.textContent = datos.crew[index].bio;
            personImg.style.backgroundImage = `url(${datos.crew[index].images.png})`;
        });
    });
}

for (let index = 0; index < seccion4_btnSlider.length; index++) {
    seccion4_btnSlider[index].addEventListener('click', function(){
        const slider4_active = document.querySelectorAll('.slider4__activo');
        fetch('data.json')
        .then(res => res.json())
        .then(datos => {
            if (slider4_active.length > 0) {
                slider4_active.forEach(posicion =>{
                    posicion.classList.remove('slider4__activo')
                });
            }
            seccion4_btnSlider[index].classList.add('slider4__activo');
            slider_tecnlogica.textContent = datos.technology[index].name;
            slider_tecnologia_desc.textContent = datos.technology[index].description;
            slider_tecnologia_img.src = datos.technology[index].images.portrait;
        });
    });
}

/*
let contador = 0;

for (let i = 0; i < content_slider_btn.length; i++) {
    content_slider_btn[i].addEventListener('click', function(){

        const seccion_activa = document.querySelectorAll('section');
            seccion_activa.forEach(posicion =>{
                posicion.classList.remove('translate');
        });

        seccion[i].classList.add('translate');
    });
};
*/
btnAbrir.addEventListener('click', function() {
    navegacion.classList.toggle('dpflex');
});