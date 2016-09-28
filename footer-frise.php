		
		</div> <!-- #end .main-wrapper.chronologie -->
		
		<?php wp_footer(); ?>
		
		<!--
		Fonts typekit
		Kit ID: nzl0tjc
		-->
		<script src="//use.typekit.net/nzl0tjc.js"></script>
		<script>try{Typekit.load({ async: true });}catch(e){}</script>
		
		<script type="text/javascript">
			<!-- CHOIX PERIODES MOBILE -->
			$(document).ready(function(e){ 
				$('#selectPeriod').on('change', function() {
					window.location = $(this).val();
				});
			});
		</script>
	</body>
</html>