<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width">
  <title>project</title>
<?php include('incl/header.php'); ?>

  <div class="content inner-p">
    <div class="wrapper">

      <div class="side-bar">
        <div class="wrapp-left-p">
          <div class="title line">Контент</div>
          <ul class="menu-left menu-line">
            <li><a href="#">Категоия 1</a></li>
            <li><a href="#">Категоия 2</a></li>
            <li><a href="#">Категоия 3</a></li>
          </ul>

          <div class="head">формат контента</div>
          <form class="radiobtn" action="post">
            <div><input name="rn" type="radio" id="option1"><label for="option1">аудио</label></div>
            <div><input name="rn" type="radio" id="option2"><label for="option2">видео</label></div>
            <div><input name="rn" type="radio" id="option3"><label for="option3">текст</label></div>

            <input class="link-1" type="submit" value="подобрать">
          </form>
        </div>
        <div class="left-side-img">
          Настоящий идеалист <br>
          <span>стремится</span> к деньгам
        </div>
        <div class="vertical-text">наши <span>мероприятия</span></div>
      </div>

      <div class="right-block right-block-lg">
        <div class="video">
          <iframe width="980" height="344" src="https://www.youtube.com/embed/IyTv_SR2uUo" frameborder="0" allowfullscreen></iframe>
        </div>
        <p class="main-p">
          <span>Lorem ipsum dolor sit amet</span>, consectetur adipiscing elit. Nunc volutpat, nunc tincidunt varius 
          vehicula, ipsum massa aliquam massa, eu hendrerit nisi arcu sit amet ligula. Donec sagittis 
          pretium scelerisque. In non maximus elit. Quisque fringilla sed ligula nec egestas. 
        </p>

        <h2 class="full">полный видеокурс можно приобрести в нашем магазине</h2>
        <div class="center">
          <a href="#" class="link-1">купить</a>
        </div>
      </div>
    </div>

  </div>
<?php include('incl/footer.php'); ?>
</body>
</html>