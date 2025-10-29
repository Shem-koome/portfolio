<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shem Koome | Full Stack Developer & Designer</title>
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
</head>
<body>

<!-- HEADER -->
<header>
  <nav class="navbar">
    <div class="logo">
      <a href="index.php">SHEM KOOME</a>
    </div>

    <!-- Navigation Links -->
    <ul class="nav-links" id="navLinks">
      <li><a href="index.php" class="<?php if(basename($_SERVER['PHP_SELF'])=='index.php'){echo 'active';} ?>">Home</a></li>
      <li><a href="about.php" class="<?php if(basename($_SERVER['PHP_SELF'])=='about.php'){echo 'active';} ?>">About</a></li>
      <li><a href="projects.php" class="<?php if(basename($_SERVER['PHP_SELF'])=='projects.php'){echo 'active';} ?>">Projects</a></li>
      <!-- <li><a href="contact.php" class="<?php if(basename($_SERVER['PHP_SELF'])=='contact.php'){echo 'active';} ?>">Contact</a></li> -->
    </ul>

    <!-- Theme Toggle -->
    <div class="theme-toggle" id="themeToggle" title="Switch Theme">
      <i class="fa-solid fa-moon"></i>
    </div>

    <!-- Hamburger Menu -->
    <div class="menu-toggle" id="menuToggle">
      <span></span><span></span><span></span>
    </div>
  </nav>
</header>
<!-- END OF HEADER -->

<script src="js/script.js"></script>
</body>
</html>
