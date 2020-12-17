/* 10) Crie uma função que vê se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function numero_multiplo_3(numero) {
    let teste

    if(numero % 3 == 0) {
        teste = true
    } else {
        teste = false
    }

    return teste
}

//diversas chamadas à função numero_multiplo_3() que testa se o numero é divisivel por 3.
console.log(numero_multiplo_3(30))
console.log(numero_multiplo_3(20))
console.log(numero_multiplo_3(999))
console.log(numero_multiplo_3(-100))
