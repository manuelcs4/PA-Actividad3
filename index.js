let randomTempManana; 
let randomTempTarde; 
let randomTempNoche; 
let randomClimaManana; 
let randomClimaTarde; 
let randomClimaNoche; 

const displayClimaManana = document.getElementById('climaManana');
const displayTempManana = document.getElementById('tempManana');
const displayClimaTarde = document.getElementById('climaTarde');
const displayTempTarde = document.getElementById('tempTarde');
const displayClimaNoche = document.getElementById('climaNoche');
const displayTempNoche = document.getElementById('tempNoche');


var dateForm = document.getElementById('date-form'); 

let delayTime = Math.floor((Math.random())*10000);

setTimeout(inicializar, delayTime); 

function generateRandomTemp(min, max){
    return Math.floor(Math.random() * (max - min + 1) +min );  
}

function generateRandomClima(min, max){
    let randomClima = Math.floor(Math.random() * (max - min +1) +min); 
    let clima
  
    switch(randomClima){
        case 1: 
            clima = "Despejado";
        break; 
        case 2: 
            clima = "Nublado"; 
        break; 
        case 3: 
            clima = "Lluvioso"
        break; 
        default: 
            clima = "Indeterminado"
    }
    return clima
}


function inicializar(){
    dateForm.addEventListener('submit', function (evento){
        evento.preventDefault(); 
    
        randomTempManana = generateRandomTemp(5,30); 
        tempManana.innerHTML = randomTempManana; 
        randomTempTarde = generateRandomTemp(5,30);
        tempTarde.innerHTML = randomTempTarde;  
        randomTempNoche = generateRandomTemp(5,30);
        tempNoche.innerHTML = randomTempNoche;  
    
        console.log(randomTempManana); 
        console.log(randomTempTarde); 
        console.log(randomTempNoche); 
    
        randomClimaManana = generateRandomClima(1,3);
        climaManana.innerHTML = randomClimaManana; 
        
        //imagen para Manana 
        switch(randomClimaManana){
            case 'Despejado': 
                imagenManana.innerHTML = '<img src="./images/soleado.png" width="65" />'
                break;
            case 'Nublado':
                imagenManana.innerHTML = '<img src="./images/nublado.png" width="65" />'
                break; 
            case 'Lluvioso': 
                imagenManana.innerHTML = '<img src="./images/lluvia.png" width="65" />'
                break; 
            default:
                
        }
    
        randomClimaTarde = generateRandomClima(1,3);
        climaTarde.innerHTML = randomClimaTarde;  
        
          //imagen para Tarde 
          switch(randomClimaTarde){
            case 'Despejado': 
                imagenTarde.innerHTML = '<img src="./images/soleado.png" width="65" />'
                break;
            case 'Nublado':
                imagenTarde.innerHTML = '<img src="./images/nublado.png" width="65" />'
                break; 
            case 'Lluvioso': 
                imagenTarde.innerHTML = '<img src="./images/lluvia.png" width="65" />'
                break; 
            default:
                
        }
    
        randomClimaNoche = generateRandomClima(1,3); 
        climaNoche.innerHTML = randomClimaNoche; 
    
          //imagen para Noche
          switch(randomClimaNoche){
            case 'Despejado': 
                imagenNoche.innerHTML = '<img src="./images/soleado.png" width="65" />'
                break;
            case 'Nublado':
                imagenNoche.innerHTML = '<img src="./images/nublado.png" width="65" />'
                break; 
            case 'Lluvioso': 
                imagenNoche.innerHTML = '<img src="./images/lluvia.png" width="65" />'
                break; 
            default:
                
        }
    
        console.log(randomClimaManana); 
        console.log(randomClimaTarde); 
        console.log(randomClimaNoche); 
    
    }); 
}; 










