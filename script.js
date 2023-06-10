const entrada = document.querySelector(".text-in");
const salida = document.querySelector(".text-out");
const copy = document.querySelector("#copiar");
const oculto = document.querySelector(".hidden");
copy.style.display= "none";
oculto.style.display = "";

function validarTxt()
{
    let textoEs = document.querySelector(".text-in").value;
    let vali = textoEs.match(/^[a-z && " "]*$/);
    if(!vali || vali === 0){
        alert("Sólo letras minúsculas y sin acentos.");
        entrada.focus();
        location.reload();
        return true;
    }
}

function copyElement() {

    var content = document.getElementById('Out-Text');
    content.select();
    document.execCommand('copy');
    salida.value = "";
    alert("El texto se ha copiado");
    oculto.style.display="flex";
    entrada.focus();
    entrada.placeholder="Ingrese texto aquí";
    copy.style.display="none";
}

function buttonEncriptar()
{
    if(!validarTxt())
    {
        const txtEncrip = encriptar(entrada.value)
        salida.value = txtEncrip
        salida.style.backgroundImage = "none";
        entrada.value = "";
        entrada.placeholder="";
        copy.style.display = "block";
        oculto.style.display = "none";
    }
}

function buttonDesencriptar()
{
    if(!validarTxt())
    {
        const txtEncrip = desencriptar(entrada.value)
        salida.value = txtEncrip;
        entrada.value = "";
        entrada.placeholder="";
        copiar.style.display = "block";
        oculto.style.display = "none";
        
    }
    
}

function encriptar(mensajeEncriptado)
{
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", " "]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();
    for (let i = 0; i < codigo.length; i++)
    {
        if(mensajeEncriptado.includes(codigo[i][0]))
        {
            mensajeEncriptado = mensajeEncriptado.replaceAll(codigo[i][0], codigo[i][1])
        } 
    }
    return mensajeEncriptado;
}

function desencriptar(mensajeDesencriptado)
{
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], [" ", " "]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();
    for(let i = 0; i<codigo.length; i++)
    {
        if(mensajeDesencriptado.includes(codigo[i][1]))
        {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return mensajeDesencriptado;
}