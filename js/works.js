$(function() {
	$.ajax({
		url: '../worksconfig.xml',
		dataType: 'xml',
		success: function(data) {

			var insertContents = '';
			$('item', data).each(function() {
				var thisItem = $(this);
        			insertContents += '<li>';
					insertContents += '<status>';
					insertContents += thisItem.children('status').text();
					insertContents += '</status>';
					insertContents += '<p>';
					insertContents += '<a href="' + thisItem.children('link').text() + '" target="_blank">';
					insertContents += thisItem.children('name').text();
					insertContents += '</a>';
					insertContents += '</p>';
        			insertContents += '</li>';
			});
			$('.linkbox-news').append(insertContents);
		}
	});
});