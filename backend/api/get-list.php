<?php 

// leggo il file json che si trova in data
$json_list_content = file_get_contents('../data/todolist.json');

// specifico che il contenuto è in json e non in html
header('Content-Type: applications/json');

// stampo gli elementi del file 
echo $json_list_content;