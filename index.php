<html lang="en">
<?php


$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://v3-static.supadu.io/dev/products/9780060577315.json',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_SSL_VERIFYPEER => 0 ,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
$prod = json_decode($response);

//print_r($prod);
//  echo $prod->description;

$author = $prod->contributors;
$prodImage__small = $prod->image;
$proImage__big = str_replace('145','400',$prodImage__small);

foreach($author as $auth) {
    $autherName = $auth->contributor->name; 
    $autherImage = $auth->contributor->image;
    $authBio = $auth->contributor->bio;
}

// Price  
$locale = 'USD';
$priceArray = $prod->prices;


// Formnats

$formats = $prod->formats;

// Retailers 
$retailers = $prod->retailers;

// Reviews

$reviews = $prod->reviews;


// Sales date

 $salesdate = strtotime($prod->sale_date->date);
 $salesdate = date('d/m/Y', $salesdate);   
// echo $salesdate;

?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $prod->title ?></title>
    <meta name="description" content="<?php echo $prod->summary; ?>" />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="dist/theme.css">
</head>


<body>
    <header>
        <!-- Empty -->
    </header>
    <main>
        <div class="PageContainer">
            <div class="Pro__container">


                <!-- Product Image & sub desc -->
                <section class="ProductOverview">
                    <div class="ProductOverview__images">
                        <div class="ProductOverview__images--frame">
                            <img src="<?php echo $proImage__big ?>" alt="">
                        </div>
                    </div>
                    <div class="ProductOverview__header">
                        <h1 class="ProductOverview__title"><?php echo $prod->title ?></h1>
                        <span class="ProductOverview__author author--modal" data-module="author">
                            <?php echo $autherName; ?>
                        </span>

                        <div class="ProductOverview__summary">
                            <p><?php echo $prod->summary ?></p>
                        </div>

                        <div class="SalesDate">
                            <span class="Sales__date">Sale Date: <span
                                    class="Date"><?php echo  $salesdate; ?></span></span>
                        </div>

                        <div class="ProFormat">
                            <?php foreach($formats as $format) {
                            //print_r($formats)
                           $priceCount = count($format->prices);
                            $formatCode = $format->format->code;
                           if($priceCount>0){
                            ?>
                            <div class="ProFormat__box">
                                <span class="Format__title"><?php echo  $format->detail; ?></span>

                                <div class="ProFormat__summary">
                                    <span
                                        class="Format__price"><?php foreach($format->prices as $price) echo  $price->locale == $locale ? '$'.$price->amount : '' ?></span>
                                    <a href="" class="Bt--cta">Buy Now</a>
                                </div>
                            </div>
                            <?php }} ?>
                        </div>

                        <div class="Retailer__box">
                            <span class="Title">Retailers</span>
                            <div class="Reatiler__col" data-module="retailer">
                                <?php foreach($retailers as $retail){
                                            if($formatCode == $retail->format){
                                        ?>
                                <a href="<?php echo $retail->path; ?>" class="Retailer__cta" target="_blank"><img
                                        src="./images/<?php echo $retail->seo; ?>.png" class="RetailImg"
                                        alt="<?php echo $retail->label; ?>"></a>
                                <?php } }?>
                            </div>

                        </div>


                    </div>
                </section>
                <!--Product Image & sub desc -->

                <!-- Product Tab -->

                <section class="ProTab__container" data-module="proTab">
                    <div class="ProTab__btn--group">
                        <button class="Btn Btn--tab Btn--tab-1 Btn--tab--active" data-tab="1">Book Description</button>

                        <button class="Btn Btn--tab Btn--tab-2 " data-tab="2">Reviews</button>


                        <select name="" id="" class="Pro__select">
                            <option value="1" data-tab="1">Book Description</option>
                            <option value="2" data-tab="2">Reviews</option>
                        </select>
                    </div>
                    <div class=" ProTab__content ProTab__content--1 ProTab__content--active">
                        <p><?php  echo $prod->description; ?></p>
                    </div>
                    <div class=" ProTab__content ProTab__content--2">
                        <?php foreach($reviews as $review) { ?>
                        <div class="Review__box">
                            <span class="Review__desc"><?php echo $review->review->description ?></span>
                            <spam class="Review__title"><?php echo $review->review->reviewer ?></spam>
                        </div>

                        <?php } ?>
                    </div>

                </section>

                <!-- End product tabs -->

            </div>
        </div>


    </main>
    <footer>
        <!-- Empty -->
    </footer>

    <div class="Modal hidden">
        <button class="btn--close-modal">×</button>
        <div class="Modal__summary">
            <?php if($autherImage) {?>
            <img src="<?php  echo $autherImage; ?>" alt="<?php echo $autherImage; ?>">
            <?php } ?>
        </div>
        <h2 class="Modal__header"><?php echo $autherName; ?></h2>
        <div class="Modal___desc">
            <p><?php echo $authBio; ?></p>
        </div>

    </div>
    <div class="overlay hidden"></div>


    <script src="dist/theme.js"></script>
</body>

</html>