<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require './vendor/autoload.php';
use PhpAmqpLib\Connection\AMQPStreamConnection;

$connection = new AMQPStreamConnection('localhost', 5672, 'guest', 'guest');
$channel = $connection->channel();

$channel->queue_declare('task_queue', false, false, false, false);

echo " [*] Waiting for messages. To exit press CTRL+C\n";

$callback = function ($msg) {
  echo ' [x] Received ', $msg->body, "\n";
  sleep(substr_count($msg->body, '.'));
  $json = json_decode($msg->body);
  if ($json) {
    sendTask($json);
  }
  echo " [x] Done\n";
  $msg->ack();
};

$channel->basic_consume('task_queue', 'task-created', false, false, false, false, $callback);

while ($channel->is_consuming()) {
    $channel->wait();
}

$channel->close();
$connection->close();

function sendTask($json) {
    $test = json_encode($json);
    $client = $test->data;

    $client     = $json['client'];
    $task       = $json['task'];
    $timeWork   = $json['timeWork'];
    $timeWork   = preg_replace("/[^0-9]/", "", $timeWork);

    if(empty($json['client']) || empty($json['task']) || empty($json['timeWork']))
    {
        echo $json['client'];
        echo "Fill all the required fields";
        return;
    }

    define("API_KEY",'22cf0daaab908d986c661a5340e3bb46');
    define("ID_LIST",'62669da528b2a60ccab74ff1');
    define("TOKEN",'c651399d140c61789922ade859dce357234befcc87e1ea75616622ac02f20be1');

    $hours = $timeWork;
    $formattedDate = date("Y-m-d H:i:s", strtotime('+'.$hours.' hours'));

    $url = 'https://api.trello.com/1/cards';
    $query = array(
        'idList' => ID_LIST,
        'name'=>"Nova tarefa para $client",
        'desc'=>$task,
        'key' => API_KEY,
        'token' => TOKEN,
        'due' => $formattedDate
      );

    $fields_string = http_build_query($query);
    $ch = curl_init();
    curl_setopt($ch,CURLOPT_URL, $url);
    curl_setopt($ch,CURLOPT_POST, true);
    curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
    $result = curl_exec($ch);   
}

?>