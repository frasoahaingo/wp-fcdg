<?php  // -- FILTER DOSSIER ?>

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
								<a href="#" class="btn-simple filter-periode filter-btn">
									<span>Période</span>
									<span class="icon-flechesmall"></span>
								</a>
								<a href="#" class="btn-simple filter-theme filter-btn">
									<span>Thèmes</span>
									<span class="icon-flechesmall"></span>
								</a>
								<input type="text" name="keyword" class="btn-simple filter-keyword" placeholder="Mots clés" />
							</div>

							<!-- PERIODES -->
							<div class="choices periodes">
								<?php
								if ($periodes) {
									foreach ($periodes as $periode) {
										?>
										<div class="choice">
											<input name="periode[]" id="<?php echo $periode->term_id; ?>" type="checkbox" value="<?php echo $periode->term_id; ?>">
											<label for="<?php echo $periode->term_id; ?>">
												<span><?php echo $periode->name; ?></span>
											</label>
										</div>
										<?php
									}
								}
								?>
							</div>

							<!-- THEMES -->
							<div class="choices themes">
								<?php
								if ($themes) {
									foreach ($themes as $theme) {
										?>
										<div class="choice">
											<input name="theme[]" id="<?php echo $theme->term_id; ?>" type="checkbox" value="<?php echo $theme->term_id; ?>">
											<label for="<?php echo $theme->term_id; ?>">
												<span><?php echo $theme->name; ?></span>
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