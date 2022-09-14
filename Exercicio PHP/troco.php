<?php

// retornar troco ao cliente com o menor numero de notas possiveis.
// notas disponiveis 2, 5, 10, 20 e 50
// função retorna array com a quantidade de cada nota necessaria para o troco
// 0 = 50; 1 = 20; 2 = 10; 3 = 5; 4 = 2    indices e notas respectivamente

print_r(troco(35));

function troco($valor){
    $resposta = [0,0,0,0,0];
    $notas = [50,20,10,5,2];

    for($i=0; $i<count($resposta);$i++){
        $resposta[$i] = floor($valor / $notas[$i]);
        $valor -= $resposta[$i] * $notas[$i];
    }
    return $resposta;
}


?>