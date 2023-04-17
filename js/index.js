// Agregamos un listener para escuchar cuando se hace clic en el bot�n del men� hamburguesa

  //?capturo el onload para ocultar y mostar
  document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el contenedor principal
    $("#main-container").show();
    $("#navbar").hide();
    $("#plan_7semanas").hide();
    $("#nosotros").hide();
    $("#footer").hide();
    $("#planes").hide();
    $("#inicio").hide();
  });
  function exportToPdf() {
    // Crea un nuevo documento PDF
    $('#myModal2').modal('hide');
    var doc = new jsPDF();
    
    // Recupera los datos del LocalStorage
    var datosJSON = localStorage.getItem('datos');
    var datos = JSON.parse(datosJSON);
    var lineasLista = doc.splitTextToSize(datos.lista.join(", "), 150);
    
    // Agrega la información de la compra al documento PDF
    doc.setFontSize(14);
    doc.text("Recibo de Pago", 105, 10, {align: 'center'});
    doc.setFontSize(10);
    doc.text("Numero de orden: " + generateOrderNumber(), 10, 30);
    doc.text("Fecha: " + formatDate(new Date()), 10, 40);
    doc.text("Plan: " + datos.titulo, 10, 50);
    doc.text("Precio: " + datos.precio, 10, 60);
    doc.text("Beneficios:", 10, 70);
    doc.setFontSize(10);
    doc.text(lineasLista, 20, 80);
    
    // Calcula los impuestos y el total
    var subtotal = parseFloat(datos.precio.replace('$', ''));
    var impuestos = subtotal * 0.15;
    var total = subtotal + impuestos;
    
    // Agrega la información de los impuestos y el total al documento PDF
    doc.text("Subtotal: $" + subtotal.toFixed(2), 10, 120);
    doc.text("impuestos (15%): $" + impuestos.toFixed(2), 10, 130);
    doc.setFontType('bold');
    doc.text("Total: $" + total.toFixed(2), 10, 140);
    
    // Guarda el documento PDF
    doc.save("payment-receipt.pdf");
  }

  function generateOrderNumber() {
    return Math.floor(Math.random() * 1000000) + 1;
  }
  function formatDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return day + '/' + month + '/' + year + ' ' + hour + ':' + minute + ':' + second;
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
    $("#main-container").hide()
    $("#navbar").css("display", "flex");
    $("#plan_7semanas").show()
    $("#footer").show()
    $("#inicio").hide()
}

function salir(){
    $("#main-container").hide()
    $("#navbar").css("display", "flex");
    $("#plan_7semanas").show()
    $("#footer").show()
    $("#inicio").hide()
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

$("#prox").click(() => {
  // Validar la URL ingresada
  const url = $("#url-input").val();
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
  const nombreInput = $('#nombre');
  const telefonoInput = $('#telefono');
  const emailInput = $('#email');
  if (!nombreInput.val() || !telefonoInput.val() || !emailInput.val()) {
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
    $("#plan_7semanas").hide()
    $("#navbar").css("display", "flex");
    $("#footer").show();
    $("#planes").show();
    $("#inicio").hide()
}

function acercade(){
    $("#plan_7semanas").hide()
    $("#navbar").css("display", "flex");
    $("#footer").show();
    $("#planes").hide()
    $("#nosotros").show();
    $("#inicio").hide()
}

function inicio(){
    $("#plan_7semanas").hide()
    $("#navbar").css("display", "flex");
    $("#footer").show();
    $("#planes").hide()
    $("#nosotros").hide()
    $("#inicio").show();
}

function SEO(){
    $("#main-container").show();
    $("#navbar").hide();
    $("#plan_7semanas").hide();
    $("#nosotros").hide();
    $("#footer").hide();
    $("#planes").hide();
    $("#inicio").hide();
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


// navigator.geolocation.getCurrentPosition((position) => {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     if(lat!=""){
//     const url = `${apiUrl}&lat=${lat}&lon=${lon}&units=metric`;

//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.weather[0].icon);
//         const icon3d = data.weather[0].icon;
//         const temperature = Math.ceil(data.main.temp);
//         const weatherIcon = document.getElementById("weather-icon");
//         const iconElement = getIcon(icon3d);
//         const imgElement = document.createElement("img");
//         imgElement.setAttribute("src", iconElement);
//         weatherIcon.innerHTML = "";
//         weatherIcon.appendChild(imgElement);
//         weatherIcon.innerHTML += `${temperature+1}°C`;
//     });
// }
// });
const apiKey = "8fb8a8f95983b6752acee95d7579284a";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}`;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    if (lat != "") {
      const url = `${apiUrl}&lat=${lat}&lon=${lon}&units=metric`;
      $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success: function (data) {
          console.log(data.weather[0].icon);
          const icon3d = data.weather[0].icon;
          const temperature = Math.ceil(data.main.temp);
          const weatherIcon = $("#weather-icon");
          const iconElement = getIcon(icon3d);
          const imgElement = $("<img>").attr("src", iconElement);
          weatherIcon.html("").append(imgElement);
          weatherIcon.append(`${temperature+1}°C`);
        },
        error: function (error) {
          console.log(error);
        }
      });
    }
  });
}

function servicios(){
  $("#main-container").hide();
  $("#navbar").css("display", "flex");
  $("#plan_7semanas").show();
  $("#nosotros").hide();
  $("#footer").show();
  $("#planes").hide();
  $("#inicio").hide();
}


//?usamos validate para este form
$(document).ready(function() {
  $('#contactModal form').validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Por favor ingresa tu nombre",
        minlength: "El nombre debe tener al menos 3 caracteres"
      },
      email: {
        required: "Por favor ingresa tu correo electrónico",
        email: "Por favor ingresa una dirección de correo electrónico válida"
      },
      message: {
        required: "Por favor ingresa un mensaje",
        minlength: "El mensaje debe tener al menos 10 caracteres"
      }
    },
    submitHandler: function(form) {
      // Aquí puedes agregar tu código para enviar el formulario
      alert('El formulario se ha enviado correctamente');
      console.log('Datos Obtenidos del form contacto')
      console.log($(form).serialize());
      form.reset();
      $('#contactModal').hide();
      $('.modal-backdrop').hide();
    }
  });
});

//?crear galeria
const accessKey = '';

const imgBuscar = 'estrategias';
function gallery() {
  const search = $('#inputBusqueda').val();
  $.ajax({
    url: `https://api.unsplash.com/search/photos?query=${search ? search : imgBuscar}&per_page=10&client_id=${accessKey}`,
    method: 'GET'
  })
  .done(function(data) {
    console.log(data);
    if (data.results.length == 0) {
      alert('No hay resultados para tu búsqueda. Intenta de nuevo.');
      return;
    }
    const carouselInner = $('#carousel-inner');
    const indicators = $('#indicators');
    carouselInner.empty();//limpio antes de pintar nuevamente
    indicators.empty();//to me
    data.results.forEach((photo, index) => {
      const img = $('<img>', {
        src: `${photo.urls.regular}&w=400&h=400`,
        class: 'd-block w-100 img-fluid'
      });
      const carouselItem = $('<div>', {
        class: `carousel-item ${index === 0 ? 'active' : ''}`
      }).append(img);
      carouselInner.append(carouselItem);

      const indicator = $('<li>', {
        'data-target': '#myCarousel',
        'data-slide-to': index
      });
      if (index === 0) {
        indicator.addClass('active');
      }
      indicators.append(indicator);

      const sidebarImg = $('<img>', {
        src: photo.urls.thumb
      });
      sidebarImg.on('click', () => {
        $('#myCarousel').carousel(index);
      });
    });
  })
  .fail(function(error) {
    console.log(error);
  });
}



//?bton pagar 
// Manejar el clic del botón de pago
function pagar(boton) {
  // Mostrar el modal de pago
  $('#myModal2').modal('show');
  var padre = boton.parentNode;
  var titulo = padre.querySelector('h4').innerText;
  var precio = padre.querySelector('h3').innerText;
  var lista = padre.querySelectorAll('ul li');
  var textoLista = [];
  for (var i = 0; i < lista.length; i++) {
    textoLista.push(lista[i].innerText);
  }
  var datos = {
    titulo: titulo,
    precio: precio,
    lista: textoLista
  };
  var datosJSON = JSON.stringify(datos);
  localStorage.setItem('datos', datosJSON);//los guardo en el local storage
}
function cancelarpagar() {
  // Mostrar el modal de pago
  $('#myModal2').modal('hide');
}
// Manejar el clic del botón de enviar pago
document.getElementById("submitPayment").addEventListener("click", function() {
  // Enviar los datos de la transacción a MercadoPago
  // Mostrar un mensaje de confirmación o un mensaje de error según el resultado
});
      