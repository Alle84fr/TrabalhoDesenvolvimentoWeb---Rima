const url = 'https://go-wash-api.onrender.com/api/user';
async function cadastroUsuário(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value; 

    let api = await fetch(url, {method:"post", 
        body:JSON.stringify({
            
            "name":"Rima",
            "email":"fokkulikku@gufum.com",
            "user_type_id":1,
            "password": "123456",
            "cpf_cnpj": "44644465232",
            "terms": 1,
            "birthday":"2000-10-12"  
        }), 
        headers:{
            'Content-Type: application/json'
        }
    })
    
    if (api.ok){ 
        let response = await api.json();
        console.log(response)
        return;
    }
    let responseError =  await api.json()
    alert(responseError.data.errors.cpf_cnpj[0]);

}