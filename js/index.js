// Agregamos un listener para escuchar cuando se hace clic en el bot�n del men� hamburguesa
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    // Agregamos o removemos la clase 'collapsed' al bot�n para animarlo
    this.classList.toggle('collapsed');
    // Obtenemos el div con la clase 'navbar-collapse' y agregamos o removemos la clase 'show'
    document.querySelector('.navbar-collapse').classList.toggle('show');
  });
  //?capturo el onload para ocultar y mostar
  document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el contenedor principal
    document.getElementById("main-container").style.display = "block";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("plan_7semanas").style.display = "none";
    document.getElementById("nosotros").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("inicio").style.display = "none";
  });
function exportToPdf() {
    // Crea un nuevo documento PDF
    var doc = new jsPDF();
    // Obtiene los datos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var creditCard = document.getElementById("credit-card").value;
    var expiration = document.getElementById("expiration").value;
    var cvv = document.getElementById("cvv").value;
  
    // Agrega los datos al documento PDF
    doc.text("Name: " + name, 10, 10);
    doc.text("Email: " + email, 10, 20);
    doc.text("Address: " + address, 10, 30);
    doc.text("Phone: " + phone, 10, 40);
    doc.text("Credit Card: " + creditCard, 10, 50);
    doc.text("Expiration: " + expiration, 10, 60);
    doc.text("CVV: " + cvv, 10, 70);
  
    // Guarda el documento PDF
    doc.save("formulario.pdf");
  }

  //?agrego efecto scrollreaveal beautifull
//   const sr = ScrollReveal({
//     duration: 1000, // duraci�n de la animaci�n (en milisegundos)
//     delay: 200, // retardo antes de que se inicie la animaci�n (en milisegundos)
//     distance: '50px', // distancia desde donde empieza la animaci�n
//     easing: 'ease-out', // tipo de aceleraci�n de la animaci�n
//     origin: 'bottom', // direcci�n desde donde viene la animaci�n
//   });
  
//   sr.reveal('.seccion', { // selecciona la clase de las secciones que quieres animar
//     interval: 200, // retardo entre la animaci�n de cada secci�n (en milisegundos)
//   });

  //?detecto el scroll para cambiar el color del nav
//   window.addEventListener("scroll", function() {
//     var navbar = document.getElementById("navbar");
//     if (window.scrollY > 50) {
//       navbar.classList.add("scrolled");
//     } else {
//       navbar.classList.remove("scrolled");
//     }
//   });
  
  //?intento crear el formulario de guia
  let currentQuestion = 1;
  var progressBar = document.getElementById("progress");
function nextQuestion(questionNumber) {
    console.log(questionNumber)
    currentQuestion = questionNumber;
    
    const questionContainer = document.getElementById('question-container');
    if (questionNumber==1) {
        
    }
    if (questionNumber==2) {
        console.log(progressBar.style.width)
        progressBar.style.width = '30%'
        document.getElementById('question').style.display='none'
        document.getElementById('q1').style.display='none'
        document.getElementById('salir').innerHTML=`
        <button type="button" class=" position-absolute top-0 end-0" aria-label="Cerrar" style="margin-top: -3rem; border:none; background-color:transparent;" onclick="irIni()"><i class="bi bi-arrow-left text-black"></i></button>
`;
      questionContainer.innerHTML = `
      
      <div class="form-group d-grid">
        <h1 for="experience-input" style="color:#4e3f8a;font-size: 3rem;">¿Cuál es su nivel de experiencia en marketing?</h1>
        <div class="btn-group-vertical mt-3 mb-3 mx-auto">
            <button type="button" class="btn btn-primary btn-block" onclick="nextQuestion(3)">PRINCIPIANTE</button>
            <button type="button" class="btn btn-primary btn-block" onclick="nextQuestion(3)">INTERMEDIO</button>
            <button type="button" class="btn btn-primary btn-block" onclick="nextQuestion(3)">EXPERTO</button>
        </div>
        </div>
        <div id="main-content" style="display: flex; justify-content: center; align-items: center;">
            
        <p style="color:#8983b0">Esto nos ayuda a determinar cuánto debe incluir en su plan de acción.</p>
      </div>
    
      `;
    }
    if (questionNumber==3) {
        progressBar.style.width = '45%'
        document.getElementById('salir').innerHTML=`
        <button type="button" class=" position-absolute top-0 end-0" aria-label="Cerrar" style="margin-top: -3rem; border:none; background-color:transparent;" onclick="nextQuestion(2)"><i class="bi bi-arrow-left text-black"></i></button>
`;
      questionContainer.innerHTML = `
        <div class="form-group d-grid">
          <h1 for="control-input" style="color:#4e3f8a;font-size: 3rem;">¿Qué quieres lograr con más tráfico?</h1>
          <div class="btn-group-vertical mt-3 mb-3 mx-auto">
            <button type="button" class="btn btn-primary" onclick="nextQuestion(4)">GENERAR MAS CLIENTES POTENCIALES</button>
            <button type="button" class="btn btn-primary" onclick="nextQuestion(4)">AUMENTAR NUMERO DE VENTAS</button>
            <button type="button" class="btn btn-primary" onclick="nextQuestion(4)">AUMENTAR EL CONOCIMIENTO DE LA MARCA</button>

          </div>
        </div>
        <div id="main-content" style="display: flex; justify-content: center; align-items: center;">
            
        <p style="color:#8983b0">Queremos brindarle un plan de acción que pueda implementar fácilmente con sus recursos actuales</p>
      </div>
      `;
    }
    if (questionNumber==4) {
        progressBar.style.width = '60%';
        document.getElementById('salir').innerHTML=`
        <button type="button" class=" position-absolute top-0 end-0" aria-label="Cerrar" style="margin-top: -3rem; border:none; background-color:transparent;" onclick="nextQuestion(3)"><i class="bi bi-arrow-left text-black"></i></button>
`;
      questionContainer.innerHTML = `
      <div class="form-group d-grid">
      <h1 for="control-input" style="color:#4e3f8a;font-size: 3rem;">¿Cuántos ingresos genera al año?</h1>
      <div class="btn-group-vertical mt-3 mb-3 mx-auto">
        <button type="button" class="btn btn-primary" onclick="nextQuestion(5)">0-500K</button>
        <button type="button" class="btn btn-primary" onclick="nextQuestion(5)">500K-1MM</button>
        <button type="button" class="btn btn-primary" onclick="nextQuestion(5)">1MM-3MM</button>
        <button type="button" class="btn btn-primary" onclick="nextQuestion(5)">3MM+</button>

      </div>
    </div>
    <div id="main-content" style="display: flex; justify-content: center; align-items: center;">
            
    <p style="color:#8983b0">Queremos darte un plan a la escala adecuada para tu negocio.</p>
  </div>
  `;
     }
     if (questionNumber==5) {
        progressBar.style.width = '75%';
        document.getElementById('salir').innerHTML=`
        <button type="button" class=" position-absolute top-0 end-0" aria-label="Cerrar" style="margin-top: -3rem; border:none; background-color:transparent;" onclick="nextQuestion(4)"><i class="bi bi-arrow-left text-black"></i></button>
`;
        questionContainer.innerHTML = `
        <div class="form-group d-grid">
        <h1 for="control-input" style="color:#4e3f8a;font-size: 3rem;">¿Cuál es su presupuesto de marketing por mes?</h1>
        <div class="btn-group-vertical mt-3 mb-3 mx-auto">
          <button type="button" class="btn btn-primary" onclick="nextQuestion(6)">0-$750</button>
          <button type="button" class="btn btn-primary" onclick="nextQuestion(6)">$750-$1.5K</button>
          <button type="button" class="btn btn-primary" onclick="nextQuestion(6)">$1.5K-$5K</button>
          <button type="button" class="btn btn-primary" onclick="nextQuestion(6)">$5K-10K</button>
  
        </div>
      </div>
      <div id="main-content" style="display: flex; justify-content: center; align-items: center;">
            
    <p style="color:#8983b0">Esto nos ayuda a comprender los recursos que tiene disponibles para que podamos escalar su plan de manera adecuada.</p>
  </div>
    `;
       }
       if (questionNumber==6) {
        progressBar.style.width = '90%';
        document.getElementById('salir').innerHTML=`
        <button type="button" class=" position-absolute top-0 end-0" aria-label="Cerrar" style="margin-top: -3rem; border:none; background-color:transparent;" onclick="nextQuestion(5)"><i class="bi bi-arrow-left text-black"></i></button>
`;
        questionContainer.innerHTML = `
        <div class="form-group d-grid">
        <h1 for="control-input" style="color:#4e3f8a;font-size: 2rem;">¡Felicitaciones! Estás a un paso de tu plan de acción de 7 semanas.
        ¿Cómo preferirías implementarlo?</h1>
        <div class="btn-group-vertical mt-3 mb-3 mx-auto">
          <button type="button" class="btn btn-primary" onclick="nextQuestion(7)">LO IMPLEMENTARE YO MISMO</button>
          <button type="button" class="btn btn-primary" onclick="nextQuestion(7)">PLANEO SUBCONTRATAR PARTE DE ESTO</button>
          <button type="button" class="btn btn-primary" onclick="nextQuestion(7)">QUIERO QUE SU EQUIPO ME AYUDE</button>
  
        </div>
      </div>
      <div id="main-content" style="display: flex; justify-content: center; align-items: center;">
            
    <p style="color:#8983b0">Queremos brindarle un plan de acción que pueda implementar fácilmente con sus recursos actuales.</p>
  </div>
    `;
       }
       if (questionNumber==7) {
        progressBar.style.width = '100%';
        document.getElementById('salir').style.display='none'
        questionContainer.innerHTML = `
        <form>
        <div class="form-group">
          <h1 class="text-center mb-5" for="control-input" style="color:#4e3f8a;font-size: 3rem;">¡Tus resultados están listos!</h1>
          <h3 class="text-center mb-5" style="color:#8983b0">Para obtener sus resultados y una guía paso a paso sobre cómo aumentar su tráfico, simplemente ingrese su nombre, correo electrónico y número de teléfono.</h3>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
              </div>
              <input
                type="text"
                class="form-control"
                id="nombre"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-telephone-fill"></i></span>
              </div>
              <input type="tel" class="form-control" id="telefono" placeholder="Ingresa tu número de teléfono" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="bi bi-envelope-fill"></i></span>
              </div>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>
          </div>
          
          <button id='enviar_form' type="button" class="btn btn-primary" style="background-color:#fbc20a;border-color:#fbc20a; color:#fafafa;" onclick='validoForm()' >SI, ENVIAME LOS RESULTADOS</button>
        </div>
      </form>
      

    `;
       }
     if (questionNumber>9) {
      // Hide the question container and show the main content
      questionContainer.style.display = 'none';
      const mainContent = document.getElementById('main-content');
      mainContent.style.display = 'block';
     }
  
}

function sendForm() {
  // Get the form data
  const presupuesto = document.getElementById('presupuesto-input').value;
  const nombre = document.getElementById('nombre-input').value;
  const email = document.getElementById('email-input').value;
  const telefono = document.getElementById('telefono-input').value;
    
  // Do something with the form data (e.g. send it to a server)
    
  // Hide the question container and show the main content
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.display = 'none';
  const mainContent = document.getElementById('main-content');
  mainContent.style.display = 'block';
}

nextQuestion(1);

function oculatrMostrar(){
    document.getElementById("main-container").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("plan_7semanas").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}

function salir(){
    document.getElementById("main-container").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("plan_7semanas").style.display = "block";
    document.getElementById("footer").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}

function irIni(){
    document.getElementById('question').style.display='block'
        document.getElementById('q1').style.display='block'
        progressBar.style.width = '15%';
        document.getElementById('salir').innerHTML=`
        <button type="button" class="btn-close position-absolute top-0 end-0" aria-label="Cerrar" style="margin-top: -3rem;" onclick="salir()"></button>`;
    document.getElementById('irIni').innerHTML=`
        
            
          <form style="display: grid; justify-items: center;">
            <h1 id="q1" style="color:#4e3f8a;display: grid; justify-items: center; font-size: 3.5rem;">¿Quieres más tráfico SEO?</h1>
            <div id="question" class="form-group  mt-3 mb-3 ">
              <div class="container boton_text">
                    <label for="url-input" style="color:#4e3f8a">Ingresa la URL de tu sitio web</label>
                    <input type="text" class="form-control" id="url-input" required>
                    <button id="prox" type="button" class="btn btn-primary" onclick="nextQuestion(2)">Próximo</button>
                    <div id="main-content" style="display: flex; justify-content: center; align-items: center;">
                    
                        <p style="color:#8983b0">Analizamos su sitio web para identificar errores de SEO, oportunidades de palabras clave y competencia.</p>
                    </div>
                </div>
            </div>
            <div id="question-container"></div>
          </form>
          
        
        `;
}

const urlInput = document.getElementById("url-input");
const nextBtn = document.getElementById("prox");

nextBtn.addEventListener("click", () => {
  // Validar la URL ingresada
  const url = urlInput.value;
  if (!isValidUrl(url)) {
    alert("Por favor ingrese una URL válida");
    return;
  }

  // Ejecutar la función del botón "Próximo"
  nextQuestion(2);
});

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

//?valido que los campos esten completos para poder enviar el formulario 
const form = document.querySelector('form');
const aceptarCheckbox = document.querySelector('#aceptar');

function validarCampos() {
  const nombreInput = document.querySelector('#nombre');
  const telefonoInput = document.querySelector('#telefono');
  const emailInput = document.querySelector('#email');
  if (!nombreInput.value || !telefonoInput.value || !emailInput.value) {
    alert('Por favor completa todos los campos requeridos.');
    return false;
  }
  return true;
}


function validoForm(){
  if (!validarCampos() ) {
    event.preventDefault();
  }else{
    oculatrMostrar();
  }

}


function planes(){
    document.getElementById("plan_7semanas").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("footer").style.display = "block";
    document.getElementById("planes").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}

function acercade(){
    document.getElementById("plan_7semanas").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("footer").style.display = "block";
    document.getElementById("planes").style.display = "none";
    document.getElementById("nosotros").style.display = "block";
    document.getElementById("inicio").style.display = "none";
}

function inicio(){
    document.getElementById("plan_7semanas").style.display = "none";
    document.getElementById("navbar").style.display = "flex";
    document.getElementById("footer").style.display = "block";
    document.getElementById("planes").style.display = "none";
    document.getElementById("nosotros").style.display = "none";
    document.getElementById("inicio").style.display = "block";
}

function SEO(){
    document.getElementById("main-container").style.display = "block";
    document.getElementById("navbar").style.display = "none";
    document.getElementById("plan_7semanas").style.display = "none";
    document.getElementById("nosotros").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("planes").style.display = "none";
    document.getElementById("inicio").style.display = "none";
}

//?inicio temperatura funciones
function getIcon(icon3d) {
    if (icon3d == "01d") {
    //soleado sin nubes
    return "./img/climaDinamic/day.svg";
    } else if (icon3d == "01n") {
    //noche sin nubes
    return "./img/climaDinamic/night.svg";
    } else if (icon3d == "02d") {
    //dia soleado nubes normales
    return "./img/climaDinamic/cloudy-day-2.svg";
    } else if (icon3d == "02n") {
    //noche con nubes normales
    return "./img/climaDinamic/cloudy-night-2.svg";
    } else if (icon3d == "04d" || icon3d == "04n") {
    //nublado
    return "./img/climaDinamic/cloudy.svg";
    } else if (
    icon3d == "09d" ||
    icon3d == "10d" ||
    icon3d == "11d" ||
    icon3d == "09n" ||
    icon3d == "10n" ||
    icon3d == "11n"
    ) {
    //lluvia
    return "./img/climaDinamic/rainy-5.svg";
    } else if (icon3d == "11d" || icon3d == "11n") {
    //lluvia con rayos
    return "./img/climaDinamic/thunder.svg";
    } else {
    return "./img/climaDinamic/day.svg";
    }
}
const apiKey = "8fb8a8f95983b6752acee95d7579284a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;

navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    if(lat!=""){
    const url = `${apiUrl}&lat=${lat}&lon=${lon}&units=metric`;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.weather[0].icon);
        const icon3d = data.weather[0].icon;
        const temperature = Math.ceil(data.main.temp);
        const weatherIcon = document.getElementById("weather-icon");
        const iconElement = getIcon(icon3d);
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", iconElement);
        weatherIcon.innerHTML = "";
        weatherIcon.appendChild(imgElement);
        weatherIcon.innerHTML += `${temperature+1}°C`;
    });
}
});