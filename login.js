// ----------------LOGIN----------------------------

function loguear() {

	let user=document.getElementById("usuario").value;
	let pass=document.getElementById("clave").value;

	if(user=="Javi" && pass=="1234" || user=="Saray" && pass=="1313") {
		window.location="index.html";
	} else {
		alert("Datos incorrectos");
	}
}
