<!DOCTYPE html>
<html lang="pt-br">
<?php
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <META http-equiv="Content-Type" content="text/html; charset= ISO-8859-1">
    <title>2048</title>
</head>

<body>
    <?php
    include("header.php");
    ?>
    <main>
        <div class="comoJogar">
            <h1 id="titulo">2048: Deslize, combine e conquiste!</h1>
            <p>2048 é um jogo de quebra-cabeça desafiador e viciante que te convida a deslizar peças numeradas em um
                tabuleiro 4x4. O objetivo é combinar peças com o mesmo número para criar novas peças com valores
                maiores. A cada movimento, uma nova peça aparece aleatoriamente no tabuleiro, aumentando a dificuldade e
                a emoção do jogo.</p>
            <div class="regras">
                <h1>Como jogar</h1>
                <p>Use as setas para cima, baixo, esquerda e direita para deslizar as peças no tabuleiro.</p>
                <img src="img/imagem3.png" alt="" srcset="">
                <p>Quando duas peças com o mesmo número se tocam, elas se combinam em uma única peça com o valor
                    dobrado.</p>
                <img src="img/imagem2.png" alt="" srcset="">
                <p>Continue deslizando e combinando peças até alcançar o número 2048, ou até que o tabuleiro fique
                    bloqueado sem jogadas válidas.</p>
                <p>Comece com peças de valor 2 e 4, e progrida para números cada vez maiores: 8, 16, 32, 64, 128,
                    256, 512, 1024 e finalmente, 2048!</p>
                <img src="img/imagem1.png" alt="" srcset="">
            </div>
        </div>
        <div class="comand">
            <h1>Regras:</h1>
            <p>A cada jogada, um novo bloco 2 ou 4 aparece em uma posição vazia.</p>
            <p>Ao mover os blocos, eles se combinam se tiverem o mesmo número.</p>
            <p>A combinação de dois blocos com o mesmo número resulta em um bloco com o dobro do valor.</p>
            <p>O jogo termina quando você alcançar o bloco 2048 ou quando não houver mais jogadas válidas.</p>
            <a href="game.php" id="jogoB">Vamos jogar</a>
        </div>
        <div class="coment">
            <h1>Deseja fazer algum comentario?</h1>
            <form action="comentario.php" method="get">
                <div class="areaComment">
                    <div>
                        <label for="name">Insira seu nome</label>
                        <input name="user" id="name" type="text" placeholder="Digite seu nome">
                    </div>
                    <div>
                        <label for="comment">Comente</label>
                        <textarea name="comment" id="comentarios" cols="30" rows="10" placeholder="Digite aqui seu comentario"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
        <?php
        include("conexao.php");
        // Consulta SQL para recuperar os comentários
        $sql = "SELECT * FROM comentarios";
        $stmt = $conexao->query($sql);

        // Verifica se existem comentários
        if ($stmt->rowCount() > 0) {
            // Exibe os comentários
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                echo '<div class="blocoComentario">';
                echo "<h3>Autor: " . $row['username'] . "</h3>";
                echo "<p>Comentário: " . $row['comentario'] . "</p>";
                echo "</div>";
            }
        } else {
            echo "<p>Nenhum comentário encontrado.</p>";
        }
        ?>
    </main>
    <script src="js/validaComment.js"></script>
    <?php include("footer.php"); ?>
</body>

</html>