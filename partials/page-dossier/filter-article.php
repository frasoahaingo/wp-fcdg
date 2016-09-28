<?php  // -- FILTER ARTICLE ?>

	<section class="cover-page">
		<div class="container">
			<div class="mixology-row">
				<div class="content col-xs-12">
					 <div class="container">
						<div class="mixology-row">
							<div class="col-xs-12">
								<span class="type"></span>
							</div>
						</div>

						<!-- TITRE -->
						<div class="mixology-row">
							<div class="col-xs-12">
								<h1><?php the_title(); ?></h1>
							</div>
						</div>

						<!-- FILTRES PERIODE / THEME -->
						<div class="mixology-row">
							<div class="filters">
								<span>Filtrer par</span>
								<a href="#" class="btn-simple filter-category filter-btn">
									<span>Catégorie</span>
									<span class="icon-flechesmall"></span>
								</a>
								<input type="text" name="keyword" class="btn-simple filter-keyword" placeholder="Mots clés" />
							</div>

							<!-- CATEGORIES -->
							<div class="choices categories">
								<?php
								if ($categories) {
									foreach ($categories as $category) {
										?>
										<div class="choice">
											<input name="category[]" id="<?php echo $category->term_id; ?>" type="checkbox" value="<?php echo $category->term_id; ?>">
											<label for="<?php echo $category->term_id; ?>">
												<span><?php echo $category->name; ?></span>
											</label>
										</div>
										<?php
									}
								}
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
