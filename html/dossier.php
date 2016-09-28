<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../fonts/sources/icomoon/style.css">
    <link rel="stylesheet" href="../css/cdg.css">
</head>
<body>
    <div class="main-wrapper">
        <?php include('includes/header.html'); ?>
        <?php include('includes/dossier.html'); ?>
        <?php include('includes/footer.html'); ?>
    </div>
    <div class="overlay"></div>
    <div class="overlay-search">
        <form class="col-xs-6 search-form" action="">
            <div class="container">
                <div class="mixology-row">
                    <div class="col-xs-1">
                        <label for="search-query"><span class="icon-search"></span></label>
                    </div>
                    <div class="col-xs-10">            
                        <input id="search-query" type="text" placeholder="Recherche...">
                    </div>
                    <div class="col-xs-1">            
                        <button type="submit" class="btn-submit"><span class="icon-flecheright"></span></button>
                    </div>
                </div>
            </div>
        </form>
        <div class="bg"></div>
    </div>

    <script src="../js/dist/libs.js"></script>
    <script src="../js/dist/cdg.js"></script>
    <!--
    Fonts typekit
    Kit ID: nzl0tjc
    -->
    <script src="//use.typekit.net/nzl0tjc.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>
</body>
</html>