<?php // -- FORM DEMANDE DE CONTACT ?>

	<input type="hidden" name="type" value="contact" />
	<input type="hidden" name="page_id" value="<?php echo $page_id; ?>" />
	
	<?php
	if (isset($_GET['code']) && $_GET['code'] == 'error_insert') {
		?>
		<fieldset>
			<span class="validation error"><?php echo $error;?></span>
		</fieldset>
		<?php
	}
	?>
	
	<fieldset>
		<label for="contact-lastname"><sup>*</sup>Nom : </label>
		<div class="input">
			<input class="text" id="contact-lastname" name="lastname" type="text" placeholder="De Gaulle ..." value="<?php echo (isset($lastname)) ? $lastname : ''; ?>" />
			<span class="validation"></span>
			<?php 
			if (isset($_GET['code']) && $_GET['code'] == 'fields' && !isset($lastname)) {
				?><span class="validation error"><?php echo $error;?></span><?php
			}
			?>			
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contact-firstname"><sup>*</sup>Prénom : </label>
		<div class="input">
			<input class="text" id="contact-firstname" name="firstname" type="text" placeholder="Charles ..." value="<?php echo (isset($firstname)) ? $firstname : ''; ?>" />
			<span class="validation"></span>
			<?php 
			if (isset($_GET['code']) && $_GET['code'] == 'fields' && !isset($firstname)) {
				?><span class="validation error"><?php echo $error;?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contact-email"><sup>*</sup>Email : </label>
		<div class="input">
			<input class="email" id="contact-email" name="email" type="text" placeholder="Charlesdegaulle@gmail.com ..." value="<?php echo (isset($email)) ? $email : ''; ?>" />
			<span class="validation"></span>
			<?php 
			if (isset($_GET['code']) && ($_GET['code'] == 'fields' || $_GET['code'] == 'email') && !isset($email)) {
				?><span class="validation error"><?php echo $error;?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contact-company">Société : </label>
		<div class="input">
			<input id="contact-company" name="company" type="text" placeholder="Nom de votre société ..." value="<?php echo (isset($company)) ? $company : ''; ?>" />
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contact-function">Fonction : </label>
		<div class="input">
			<input id="contact-function" name="job" type="text" placeholder="Intitulé de la fonction ..." value="<?php echo (isset($job)) ? $job : ''; ?>" />
		</div>
	</fieldset>
	
	<fieldset class="long-field">
		<label for="contact-message"><sup>*</sup>Votre demande : </label>
		<textarea class="message" name="message" id="contact-message" cols="30" rows="10" placeholder="Ma demande ..."><?php echo (isset($message)) ? $message : ''; ?></textarea>
		<span class="validation"></span>
		<?php 
		if (isset($_GET['code']) && ($_GET['code'] == 'fields' || $_GET['code'] == 'message')) {
			?><span class="validation error"><?php echo $error;?></span><?php
		}
		?>
	</fieldset>
	
	<span class="required-fields"><sup>*</sup>Champs obligatoires</span>
	
	<fieldset>
		<label class="submit" for="contact-submit">Envoyer <span class="icon-share"></span></label>
		<input id="contact-submit" type="submit">
	</fieldset>
	