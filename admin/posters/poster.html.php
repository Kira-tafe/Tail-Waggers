<!-- ****************************************** 1 . Using the Helpers file for htmlspecialchars *** -->
<?php include_once $_SERVER['DOCUMENT_ROOT'] . '../includes/helpers.inc.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Manage Posters</title>
  </head>
  <body>
    <h1>Manage Posters</h1>
    <p><a href="?add">Add new poster</a></p> <!-- *** 2. Link sends query string (?add) to contoller *** -->
    <ul>
      <?php foreach ($posters as $poster): ?>
        <li>
          <form action="" method="post"> <!-- *** 3. Empty action, form will either be edit or delete *** -->
            <div>
              <?php htmlout($poster['name']); ?> <!-- *** 4. Use the htmlout function to output username safely *** -->
              <input type="hidden" name="id" value="<?php
                  echo $poster['id']; ?>">
              <input type="submit" name="action" value="Edit"> <!-- *** 5. Two buttons have same name attribute *** -->
              <input type="submit" name="action" value="Delete">
            </div>
          </form>
        </li>
      <?php endforeach; ?>
    </ul>
    <p><a href="..">Return to CMS home </a></p>
  </body>
  <?php echo  $_SERVER['DOCUMENT_ROOT'] ?>
</html>
