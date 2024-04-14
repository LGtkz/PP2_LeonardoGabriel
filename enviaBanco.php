<?php
include("conexao.php");

// Recebendo os valores dos campos do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];
$sexo = $_POST['sexo'];
$tipoContato = $_POST['tipo'] ?? []; 
$tipoContato = implode(', ', $tipoContato);
$mensagem = $_POST['textarea'];

// Consulta SQL corrigida
$sql = "INSERT INTO formulario (nome, email, idade, sexo, duvidas, textArea)
        VALUES (:nome, :email, :idade, :sexo, :duvidas, :mensagem)";

$stmt = $conexao->prepare($sql);

$stmt->bindParam(':nome', $nome);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':idade', $idade);
$stmt->bindParam(':sexo', $sexo);
$stmt->bindParam(':duvidas', $tipoContato);
$stmt->bindParam(':mensagem', $mensagem);

// Executando a query
$stmt->execute();
$conexao = null;

header("Location: index.php");
exit;
?>
