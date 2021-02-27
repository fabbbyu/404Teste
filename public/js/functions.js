/* VALIDAÇÃO DO FORM INICIO*/

(function() {
'use strict';
window.addEventListener('load', function() {

    var forms = document.getElementsByClassName('was-validated');
    var validation = Array.prototype.filter.call(forms, function(form) {
    
        form.addEventListener('submit', function(event) {
        
            if(form.checkValidity() === false){
                event.preventDefault();
                event.stopPropagation();
            }else{

                event.preventDefault();
                event.stopPropagation();

                var selecteNegativado = document.getElementById("negativadoSelect");
                var isNegativado = selecteNegativado.value;

                if(isNegativado == "Sim"){
                    window.open('https://www.serasa.com.br/', '_blank');
                }else{
                    window.open('https://cartoes.itau.com.br/', '_blank');
                }

            }

        }, false);

    });

}, false);
})();

/* VALIDAÇÃO DO FORM FIM*/    


/* THE CHECKER INICIO*/ 

const checkValidate = () => {

    let nome = document.getElementById("name_input").value;
    let email = document.getElementById("email_input").value;    
    let key = "84acd91ab22e919e5e6d8ff9966e5bca3fc9e35fd60df15945ec21ef122e80f9";
    let url = 'https://api.thechecker.co/v2/verify?email='+email+'&api_key='+key;

    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
        
        let theCheckerResult = data.result;
        console.log("The Checker status: "+theCheckerResult)

        if(theCheckerResult == "deliverable"){
            sendToActivecampaign(email, nome);
        }
    })
    .catch(function(error) {
        console.log(error);
    });

}

/* THE CHECKER FIM*/ 

/* ACTIVE CAMPAIGN INICIO*/ 

const sendToActivecampaign = (email, nome) => {

    let url = 'https://hca4043046.api-us1.com/api/3/contacts';
    let key = "6f61573afff4effb273eddf6d3a7b802afe4919ed9625b875112204a1f9ce6cd991a2aa8"; 

    let jsonToSend =    {
                            "contact": {
                                "email": email,
                                "firstName": nome
                            }
                        }

    fetch(url, {
    method: 'post',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        "Content-Type": "application/json",
        'Api-Token': key
    },
    body: JSON.stringify(jsonToSend)
    })
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data)        
    })


}

/* ACTIVE CAMPAIGN FIM*/ 