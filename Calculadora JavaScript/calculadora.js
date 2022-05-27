function calculadora(){
    const operacao = Number(prompt("Escolha uma operacao:\n 1 - Soma (+) \n 2 - Subtracao (-) \n 3 - Multiplicacao (*) \n 4 - Divisao Real (/) \n 5 - Divisao Inteira(%) \n 6 - Potenciacao (**)"))

    if (!operacao || operacao >= 7) {
        alert("Erro - Opcao invalida")
        calculadora();
    } else {
        let n1 = Number(prompt("Insira o primeiro Valor"));
        let n2 = Number(prompt("Insira o segundo Valor"));
        let resultado;

        if (!n1 || !n2) {
            alert("Erro - Parametros Invalido")
            calculadora();
        } else {
            function soma(){
                resultado = n1 + n2
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function subtracao(){
                resultado = n1 - n2
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function multiplicacao(){
                resultado = n1 * n2
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function Divisao(){
                resultado = n1 / n2
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
    
            function DivisaoInteira(){
                resultado = n1 % n2
                alert(`O resto da divisao de ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
    
            function potenciacao(){
                resultado = n1 ** n2
                alert(`${n1} eleveado a ${n2} é igual a  ${resultado}`)
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operacao?\n 1 - Sim \n 2 - Não");
    
                if (opcao == 1) {
                calculadora();
                } else if (opcao == 2) {
                    alert("Obrigado por utilizar a minha Calculadora!")
                } else {
                    alert("Digite uma opcao valida!")
                    novaOperacao();
                }
            }
        }
    // if (operacao == 1) {
    //     soma();
    // } else if (operacao == 2){
    //     subtracao();
    // } else if (operacao == 3){
    //     multiplicacao();
    // } else if (operacao == 4){
    //     Divisao();
    // } else if (operacao == 5){
    //     DivisaoInteira();
    // } else if (operacao == 6){
    //     potenciacao();
    // }
    
    switch(operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            Divisao();
            break;
        case 5:
            DivisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
    }
}
calculadora();

