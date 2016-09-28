<?php
	// -- CHAPEAU
		
	$picto = get_field('chapeau_picto', $post_id);
	$content = get_field('chapeau_content', $post_id);
	
	if ($picto && $content) {
		$icon = "";
		
		if ($picto == 'quote') {
			$icon = "icon-quote";
		}
		else if ($picto == 'pin') {
			$icon = "icon-pin";
		}
		?>		
		<section class="quote">
			<div class="container">
                <div class="mixology-row">
                    <div class="col-sm-3 col-md-3 col-lg-3 hidden-xs">
                        <span class="<?php echo $icon; ?>"></span>
                    </div>
                    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                        <blockquote>
                            <?php echo $content; ?>
                        </blockquote>
                    </div>
                </div>
			</div>
		</section>
		<?php
	}
	
	