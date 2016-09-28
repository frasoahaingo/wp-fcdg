<?php // -- FORM INSCRIPTION NEWSLETTER ?>

	<input type="hidden" name="type" value="newsletter" />
	<input type="hidden" name="page_id" value="<?php echo $page_id; ?>" />
	
	<fieldset>
		<label for="newsletter-lastname"><sup>*</sup>Nom : </label>
		<div class="input">
			<input class="text" id="newsletter-lastname" name="lastname" type="text" placeholder="De Gaulle ..." value="<?php echo isset($lastname) ? $lastname : ''; ?>">
			<span class="validation"></span>
			<?php
			if (isset($_GET['code']) && $_GET['code'] == 'fields' && !isset($lastname)) {
				?><span class="validation error"><?php echo $error; ?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="newsletter-firstname"><sup>*</sup>Prénom : </label>
		<div class="input">
			<input class="text" id="newsletter-firstname" name="firstname" type="text" placeholder="Charles ..." value="<?php echo isset($firstname) ? $firstname : ''; ?>">
			<span class="validation"></span>
			<?php
			if (isset($_GET['code']) && $_GET['code'] == 'fields' && !isset($firstname)) {
				?><span class="validation error"><?php echo $error; ?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="newsletter-email"><sup>*</sup>Email : </label>
		<div class="input">
			<input class="text" id="newsletter-email" name="email" type="text" placeholder="Charlesdegaulle@gmail.com ..." value="<?php echo isset($email) ? $email : ''; ?>">
			<span class="validation"></span>
			<?php
			if (isset($_GET['code']) && ($_GET['code'] == 'fields' || $_GET['code'] == 'email') && !isset($email)) {
				?><span class="validation error"><?php echo $error; ?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<span class="required-fields"><sup>*</sup>Champs obligatoires</span>
	
	<fieldset>
		<label class="submit" for="newsletter-submit">Envoyer <span class="icon-share"></span></label>
		<input id="newsletter-submit" type="submit">
	</fieldset>
	