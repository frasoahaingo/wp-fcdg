<?php // --- FORM SUCCESS ?>

	<?php
	$code = $_GET['code'];
	if ($code == 'success') {
		$message = "Votre message a bien été envoyé.";
	}
	else if ($code == 'success_confirm') {
		$message = "Votre inscription à la newsletter a bien été enregistrée.";
	}
	?>
	<section class="confirm-form">
		<figure>
			<span class="icon-thumb"></span>
		</figure>
		<p><?php echo $message; ?></p>
		<a href="<?php echo site_url('/'); ?>" class="btn-simple arrow-left">
			<span class="btn-animate">
				<span class="icon-flecheleft"></span>
			</span>
			Retour à la l'accueil
		</a>
	</section>