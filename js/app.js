var pantalla = 0;
var valor1 = 0;
var valor2 = 0;

function actualizarDisplay(){
  document.getElementById("display").innerHTML=pantalla;
}

function maximoLargo(){
  if (pantalla.length==8){
    return true;
  } else {
    return false;
  }
}

function teclaPresionada($tecla){
  if (pantalla == "0") {
    pantalla = "";
  }

function limpiarDisplay(){

}

  if (isNaN($tecla)){
    switch ($tecla) {
      case 'on':
        pantalla=0;
        actualizarDisplay();
        break;
      case "sign":

        if (!pantalla=="0"){
          cuenta = 0;
          posicion = pantalla.indexOf("-");
          while ( posicion != -1 ) {
             cuenta++;
             posicion = pantalla.indexOf("-",posicion+1);
          }
          if (cuenta==0){
            if (!pantalla==0){
              pantalla = "-" + pantalla;
              actualizarDisplay()
            } else {

            }
          } else {
            pantalla = pantalla.substr(1);
            actualizarDisplay()
          }
        }
        break;
      case "raiz":

        break;
      case "dividido":

        break;
      case "por":

        break;
      case "menos":



        break;
      case "igual":

        break;
      case "mas":

        break;
      case ".":
        if (!maximoLargo()){

          cuenta = 0;
          posicion = pantalla.indexOf(".");
          while ( posicion != -1 ) {
             cuenta++;
             posicion = pantalla.indexOf(".",posicion+1);
          }

          if (cuenta==0){
            if (pantalla==0){
              pantalla = pantalla + "0" +$tecla;
              actualizarDisplay()
            } else {
              pantalla = pantalla + $tecla;
              actualizarDisplay()
            }
          }

        }
        break;
      default:
        break;
    }
  } else {
    if (!maximoLargo()){
      pantalla = pantalla + $tecla;
      actualizarDisplay()
    }
  }
}

function presionarBotonOn(){
  document.getElementById('on').style="padding: 1px 1px;";
  teclaPresionada("on");
}
function presionarBotonSign(){
  document.getElementById('sign').style="padding: 1px 1px;";
  teclaPresionada("sign");
}
function presionarBotonRaiz(){
  document.getElementById('raiz').style="padding: 1px 1px;";
  teclaPresionada("raiz");
}
function presionarBotonDividido(){
  document.getElementById('dividido').style="padding: 1px 1px;";
  teclaPresionada("/");
}
function presionarBoton7(){
  document.getElementById('7').style="padding: 1px 1px;";
  teclaPresionada(7);
}
function presionarBoton8(){
  document.getElementById('8').style="padding: 1px 1px;";
  teclaPresionada(8);
}
function presionarBoton9(){
  document.getElementById('9').style="padding: 1px 1px;";
  teclaPresionada(9);
}
function presionarBotonPor(){
  document.getElementById('por').style="padding: 1px 1px;";
  teclaPresionada("X");
}
function presionarBoton4(){
  document.getElementById('4').style="padding: 1px 1px;";
  teclaPresionada(4);
}
function presionarBoton5(){
  document.getElementById('5').style="padding: 1px 1px;";
  teclaPresionada(5);
}
function presionarBoton6(){
  document.getElementById('6').style="padding: 1px 1px;";
  teclaPresionada(6);
}
function presionarBotonMenos(){
  document.getElementById('menos').style="padding: 1px 1px;";
  teclaPresionada("-");
}
function presionarBoton1(){
  document.getElementById('1').style="padding: 1px 1px;";
  teclaPresionada(1);
}
function presionarBoton2(){
  document.getElementById('2').style="padding: 1px 1px;";
  teclaPresionada(2);
}
function presionarBoton3(){
  document.getElementById('3').style="padding: 1px 1px;";
  teclaPresionada(3);
}
function presionarBoton0(){
  document.getElementById('0').style="padding: 1px 1px;";
  teclaPresionada(0);
}
function presionarBotonPunto(){
  document.getElementById('punto').style="padding: 1px 1px;";
  teclaPresionada(".");
}
function presionarBotonIgual(){
  document.getElementById('igual').style="padding: 1px 1px;";
  teclaPresionada("=");
}
function presionarBotonMas(){
  document.getElementById('mas').style="padding: 1px 1px 0px 0px;";
  teclaPresionada("+");
}

function liberarBotonOn()         {document.getElementById('on').style="padding: 0px 0px;";}
function liberarBotonSign()       {document.getElementById('sign').style="padding: 0px 0px;";}
function liberarBotonRaiz()       {document.getElementById('raiz').style="padding: 0px 0px;";}
function liberarBotonDividido()   {document.getElementById('dividido').style="padding: 0px 0px;";}
function liberarBoton7()          {document.getElementById('7').style="padding: 0px 0px;";}
function liberarBoton8()          {document.getElementById('8').style="padding: 0px 0px;";}
function liberarBoton9()          {document.getElementById('9').style="padding: 0px 0px;";}
function liberarBotonPor()        {document.getElementById('por').style="padding: 0px 0px;";}
function liberarBoton4()          {document.getElementById('4').style="padding: 0px 0px;";}
function liberarBoton5()          {document.getElementById('5').style="padding: 0px 0px;";}
function liberarBoton6()          {document.getElementById('6').style="padding: 0px 0px;";}
function liberarBotonMenos()      {document.getElementById('menos').style="padding: 0px 0px;";}
function liberarBoton1()          {document.getElementById('1').style="padding: 0px 0px;";}
function liberarBoton2()          {document.getElementById('2').style="padding: 0px 0px;";}
function liberarBoton3()          {document.getElementById('3').style="padding: 0px 0px;";}
function liberarBoton0()          {document.getElementById('0').style="padding: 0px 0px;";}
function liberarBotonPunto()      {document.getElementById('punto').style="padding: 0px 0px;";}
function liberarBotonIgual()      {document.getElementById('igual').style="padding: 0px 0px;";}
function liberarBotonMas()        {document.getElementById('mas').style="padding: 0px 0px;";}


document.getElementById("on").addEventListener("mousedown", presionarBotonOn);
document.getElementById("sign").addEventListener("mousedown", presionarBotonSign);
document.getElementById("raiz").addEventListener("mousedown", presionarBotonRaiz);
document.getElementById("dividido").addEventListener("mousedown", presionarBotonDividido);
document.getElementById("7").addEventListener("mousedown", presionarBoton7);
document.getElementById("8").addEventListener("mousedown", presionarBoton8);
document.getElementById("9").addEventListener("mousedown", presionarBoton9);
document.getElementById("por").addEventListener("mousedown", presionarBotonPor);
document.getElementById("4").addEventListener("mousedown", presionarBoton4);
document.getElementById("5").addEventListener("mousedown", presionarBoton5);
document.getElementById("6").addEventListener("mousedown", presionarBoton6);
document.getElementById("menos").addEventListener("mousedown", presionarBotonMenos);
document.getElementById("1").addEventListener("mousedown", presionarBoton1);
document.getElementById("2").addEventListener("mousedown", presionarBoton2);
document.getElementById("3").addEventListener("mousedown", presionarBoton3);
document.getElementById("0").addEventListener("mousedown", presionarBoton0);
document.getElementById("punto").addEventListener("mousedown", presionarBotonPunto);
document.getElementById("igual").addEventListener("mousedown", presionarBotonIgual);
document.getElementById("mas").addEventListener("mousedown", presionarBotonMas);

document.getElementById("on").addEventListener("mouseup", liberarBotonOn);
document.getElementById("sign").addEventListener("mouseup", liberarBotonSign);
document.getElementById("raiz").addEventListener("mouseup", liberarBotonRaiz);
document.getElementById("dividido").addEventListener("mouseup", liberarBotonDividido);
document.getElementById("7").addEventListener("mouseup", liberarBoton7);
document.getElementById("8").addEventListener("mouseup", liberarBoton8);
document.getElementById("9").addEventListener("mouseup", liberarBoton9);
document.getElementById("por").addEventListener("mouseup", liberarBotonPor);
document.getElementById("4").addEventListener("mouseup", liberarBoton4);
document.getElementById("5").addEventListener("mouseup", liberarBoton5);
document.getElementById("6").addEventListener("mouseup", liberarBoton6);
document.getElementById("menos").addEventListener("mouseup", liberarBotonMenos);
document.getElementById("1").addEventListener("mouseup", liberarBoton1);
document.getElementById("2").addEventListener("mouseup", liberarBoton2);
document.getElementById("3").addEventListener("mouseup", liberarBoton3);
document.getElementById("0").addEventListener("mouseup", liberarBoton0);
document.getElementById("punto").addEventListener("mouseup", liberarBotonPunto);
document.getElementById("igual").addEventListener("mouseup", liberarBotonIgual);
document.getElementById("mas").addEventListener("mouseup", liberarBotonMas);
