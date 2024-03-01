<?php

// task da aggiungere
$new_task = [
    'task' => $_POST['task'],
    'done' => $_POST['done'] === 'true',
];

// recupero il file json e lo trasformo in php
$todolist = json_decode(file_get_contents('..data/todolist.json'));

// aggiungo la nuova task al file json_decode
$todolist[] = $new_task;

//trasformo l'array associativo in json e aggiungo a quello originale
$json_todolist = json_encode($todolist);
file_put_contents('../data/todolist.json', $json_todolist);

//avviso che invierò un file json e non html
header('Content-Type: application/json');

//stampo la lista aggiornata
echo $json_todolist;



