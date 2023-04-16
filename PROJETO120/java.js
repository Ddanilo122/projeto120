

var cameraa=document.getElementById('cameraa');

Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90
})
Webcam.attach(cameraa);

function tirafoto(){
    Webcam.snap((uri)=>{
document.getElementById('resultado').innerHTML='<img id="result" src ='+uri+'>'

    })
}









