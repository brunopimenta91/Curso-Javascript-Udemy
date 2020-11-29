
// IIFE - Immediately Invoked Function Expression (Expressão de função imediata invocada)

//é o tipo de envolvimento de função usado para fugir do escopo global (principalmente o 'window', no browser)

// Com o par de parenteses digitado logo apos a declaração da função
(function() {

    console.log("Será executado na hora! ") 
    console.log("Foge do escopo mais abrangente.")  

})()

