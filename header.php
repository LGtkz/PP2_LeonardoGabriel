<?php
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<header>
  <nav>
    <a href="index.php" <?php if ($currentPage == "index.php") echo 'class="ativa"' ?>>Home</a>
    <a href="game.php" <?php if ($currentPage == "game.php") echo 'class="ativa"' ?>>Game</a>
    <a href="formulario.php"<?php if ($currentPage == "formulario.php") echo 'class="ativa"' ?>>Formulario</a>
  </nav>
</header> 