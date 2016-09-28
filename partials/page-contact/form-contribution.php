<?php // -- FORM CONTRIBUER AU SITE ?>

	<input type="hidden" name="type" value="site" />
	<input type="hidden" name="page_id" value="<?php echo $page_id; ?>" />
	
	<fieldset>
		<label for="contribution-lastname"><sup>*</sup>Nom : </label>
		<div class="input">
			<input class="text" id="contribution-lastname" name="lastname" type="text" placeholder="De Gaulle ..." value="<?php echo (isset($lastname)) ? $lastname : ''; ?>">
			<span class="validation"></span>
			<?php
			if (isset($_GET['code']) && $_GET['code'] == 'fields' && !isset($lastname)) {
				?><span class="validation error"><?php echo $error; ?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contribution-firstname"><sup>*</sup>Prénom : </label>
		<div class="input">
			<input class="text" id="contribution-firstname" name="firstname" type="text" placeholder="Charles ..." value="<?php echo (isset($firstname)) ? $firstname : ''; ?>">
			<span class="validation"></span>
			<?php
			if (isset($_GET['code']) && $_GET['code'] == 'fields' && !isset($firstname)) {
				?><span class="validation error"><?php echo $error; ?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contribution-email"><sup>*</sup>Email : </label>
		<div class="input">
			<input class="email" id="contribution-email" name="email" type="text" placeholder="Charlesdegaulle@gmail.com ..." value="<?php echo (isset($email)) ? $email : ''; ?>">
			<span class="validation"></span>
			<?php
			if (isset($_GET['code']) && ($_GET['code'] == 'fields' || $_GET['code'] == 'email') && !isset($email)) {
				?><span class="validation error"><?php echo $error; ?></span><?php
			}
			?>
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contribution-company">Société : </label>
		<div class="input">
			<input id="contribution-company" name="company" type="text" placeholder="Nom de votre société ..." value="<?php echo (isset($company)) ? $company : ''; ?>">
		</div>
	</fieldset>
	
	<fieldset>
		<label for="contribution-function">Fonction : </label>
		<div class="input">
			<input id="contribution-function" name="job" type="text" placeholder="Intitulé de la fonction ..." value="<?php echo (isset($job)) ? $job : ''; ?>">
		</div>
	</fieldset>
	
	<fieldset class="long-field">
		<label for="contribution-message"><sup>*</sup>Expliquez votre contribution : </label>
		<textarea class="message" name="message" id="contribution-message" cols="30" rows="10" placeholder="Ma demande ..."><?php echo (isset($message)) ? $message : ''; ?></textarea>
		<span class="validation"></span>
		<?php
		if (isset($_GET['code']) && ($_GET['code'] == 'fields' || $_GET['code'] == 'message')) {
			?><span class="validation error"><?php echo $error; ?></span><?php
		}
		?>
	</fieldset>
	
	<fieldset class="long-field">
		<label>Téléchargez une pièce jointe : </label>
		<ul class="uploaded-files"></ul>
		<label  class="upload" for="contribution-files">Parcourir <span class="icon-plus"></span></label>
		<input type="file" id="contribution-files" value="">
		<span class="validation"></span>
	</fieldset>
	
	<fieldset>
		<label><sup>*</sup>Vous êtes : </label>
		<div class="choices">
			<div class="choice">
                <input class="radio" name="you_are" id="contribution-role-teacher" type="radio" value="teacher" <?php echo (isset($you_are) && $you_are == 'teacher') ? 'checked="checked"' : '';?>>
                <label for="contribution-role-teacher">
                    <span>Un enseignant</span>
                 </label>
            </div>
            <div class="choice">
                <input class="radio" name="you_are" id="contribution-role-student" type="radio" value="student" <?php echo (isset($you_are) && $you_are == 'student') ? 'checked="checked"' : '';?>>
                <label for="contribution-role-student">
                    <span>Un étudiant</span>
                </label>
            </div>
            <div class="choice">
                <input class="radio" name="you_are" id="contribution-role-other" type="radio" value="other" <?php echo (isset($you_are) && $you_are == 'other') ? 'checked="checked"' : '';?>>
				<label for="contribution-role-other">
                    <span>Autre</span>
				</label>
            </div>
		</div>
		<span class="validation"></span>
	</fieldset>
	
	<span class="required-fields"><sup>*</sup>Champs obligatoires</span>
	
	<fieldset>
		<label class="submit" for="contribution-submit">Envoyer <span class="icon-share"></span></label>
		<input id="contribution-submit" type="submit">
	</fieldset>
	