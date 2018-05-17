$("#realizarAccion").click(function() {
    var accion = $("#accion").val();
    var numeroA = $("#numeroA").val();
    var numeroB = $("#numeroB").val();
    var resultado = null;

    alert(accion);

    switch (accion) {
        case "por":
            if (numeroA == "" || numeroB == "") {
                resultado = "";
                break

            } else {
                resultado = numeroA * numeroB;

                break;
            }
        case "mas":
            if (numeroA == "" || numeroB == "") {
                resultado = "";
                break;
            } else {
                resultado = parseInt(numeroA) + parseInt(numeroB);
                break;
            }

        case "menos":
            if (numeroA == "" || numeroB == "") {
                resultado = "";
                break;
            } else {
                resultado = numeroA - numeroB;
                break;
            }


        case "dividir":
            if (numeroA == "" || numeroB == "") {
                resultado = "";
                break;
            } else {


                if (numeroB == 0) {
                    alert("no se puede dividir entre 0");
                    resultado="";
                    break;

                } else {
                    resultado = numeroA / numeroB;
                    break;
                }
            }
    };

    $("#resultado").val(resultado);

});