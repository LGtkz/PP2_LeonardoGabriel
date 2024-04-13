<?php   
            include("conexao.php");
            $nome = $_GET['user'];
            $comentario = $_GET['comment'];
            $sql = 'INSERT INTO comentarios(username, comentario)
                VALUES(:nome, :comentario);';
            $stmt = $conexao->prepare($sql);
            $stmt->bindParam(':nome', $nome);
            $stmt->bindParam(':comentario', $comentario);
            $stmt->execute();

            $sql = 'DELETE FROM comentarios(username, comentario) WHERE nome = "teste"';
            $conexao = null;
            header("Location: index.php");
exit;
?>