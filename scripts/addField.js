//procurar o botão
document.querySelector("#add-time")
.addEventListener('click', cloneField)
// quando clicar no botão 

//executar uma ação
function cloneField(){
    console.log("cheguei aqui")


    //duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos. que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""    
    });
    

    //colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}