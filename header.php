<header>
  <nav>
    <a href="index.php" <?php if ($_SERVER['REQUEST_URI'] === '/index.php') echo 'class="ativa"'; ?>>Home</a>
    <a href="game.php" <?php if ($_SERVER['REQUEST_URI'] === '/game.php') echo 'class="ativa"'; ?>>Game</a>
    <a href="formulario.php" <?php if ($_SERVER['REQUEST_URI'] === '/formulario.php') echo 'class="ativa"'; ?>>Formulario</a>
  </nav>
</header>