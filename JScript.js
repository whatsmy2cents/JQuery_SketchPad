$(document).ready( function() {
		$('#screen').empty();
		$('#screen').append('<table id="grid"></table>')
		
		var width = $('#screen').width() / 10;
		var height = $('#screen').height() / 10;
		
		for(row = 0; row <= (10 - 1); row++)
		{
			$('#grid').append('<tr id="'+ row + '">');
			for(col = 0; col <= (10 - 1); col++)
			{
				$('#' + row + '').append('<td class="pix" style="height: ' + height + '; width:' + width +';"></td>');
			}
			$('#grid').append('</tr>');
		}

		$('td').hover(function() {
			$(this).css("background-color","Black");
		});
	$('#gridBtn').click( function () {
		var usrInput = prompt("Enter squar grid size!");
		$('#screen').empty();
		$('#screen').append('<table id="grid"></table>')
		
		var width = $('#screen').width() / usrInput;
		var height = $('#screen').height() / usrInput;
		
		for(row = 0; row <= (usrInput - 1); row++)
		{
			$('#grid').append('<tr id="'+ row + '">');
			for(col = 0; col <= (usrInput - 1); col++)
			{
				$('#' + row + '').append('<td class="pix" style="height: ' + height + '; width:' + width +';"></td>');
			}
			$('#grid').append('</tr>');
		}

		$('td').hover(function() {
			$(this).css("background-color","Black");
		});
	});
	$('#RainbowBtn').click( function () {
		$('td').hover(function() {
			var red = Math.floor((Math.random() * 256));
			var green = Math.floor((Math.random() * 256));
			var blue = Math.floor((Math.random() * 256));
			
			$(this).css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
		});
	});

	$('#permBtn').click( function () {
				$('td').hover(function() {
			$(this).css("background-color","Black");
		});
	});
	$('#EraserBtn').click( function () {
				$('td').hover(function() {
			$(this).css("background-color","White");
		});
	});
});