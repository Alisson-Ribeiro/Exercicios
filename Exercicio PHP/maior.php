<?php

echo maior([20,33,10,50,5,8]);

function maior($pacotes){
    $maior = 0;
    for ($i=0; $i<count($pacotes);$i++){
        if ($pacotes[$i] > $maior){
            $maior = $pacotes[$i];
        }
    }
    return $maior;
}


// MAX() método nativo do PHP


function maior_main($pacotes){
    return max($pacotes);
}


?>