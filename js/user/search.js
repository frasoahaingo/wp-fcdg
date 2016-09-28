// LOAD MORE SEARCH
$(document).ready(function(e){
	$('.search .more.link').on('click', function() {					
		var action = $(this).data('action'),
			search = $(this).data('search'),
			paged = $(this).data('paged'),
			total = $(this).data('total'),
			posts_per_page = $(this).data('limit');
						
		$.ajax({
			method: 'post',
			url : action,
			data: {
				search : search,
				paged: paged
			},
			success: function (data) {
				$('#results').append(data);
				if (total < posts_per_page * paged) {
					// bouton load more caché
					$('#btnLoadMore').empty();
				}
				else {
					$('.more.link').data('paged', (paged+1));
				}
			}
		});					
		return false;
	});				
});