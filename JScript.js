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
		$('td').off();
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
				$('#' + row + '').append('<td class="pix" style="opacity:0.1; height: ' + height + '; width:' + width +';"></td>');
			}
			$('#grid').append('</tr>');
		}

		$('td').hover(function() {
			$(this).css("background-color","Black");
		});
	});

	
	$('#RainbowBtn').click( function () {
		$('td').off();
		$('td').hover(function() {
			$(this).css("opacity",1);
			var red = Math.floor((Math.random() * 256));
			var green = Math.floor((Math.random() * 256));
			var blue = Math.floor((Math.random() * 256));
			
			$(this).css("background-color", "rgb(" + red + "," + green + "," + blue + ")");
		});
	});
	
	$('#shadeBtn').click( function () {
		$('td').off();
		$('td').hover(function() {
			if(parseFloat($(this).css("opacity")) < 1)
			{
				var opacity = parseFloat($(this).css("opacity"));
				opacity += 0.10;
				
				$(this).css("opacity",opacity);
			}
			else
			{
				$(this).css("opacity",0.1);
			}	
		});
	});

	$('#permBtn').click( function () {
		$('td').off();
		$('td').hover(function() {
			$(this).css("opacity",1);
			$(this).css("background-color","rgba(0,0,0,1)");
		});
	});
	
	$('#EraserBtn').click( function () {
		$('td').off();
		$('td').hover(function() {
			$(this).css("background-color","White");
		});
	});
	$('#clrBtn').click( function () {
		$('td').off();
		$('td').css("background-color","White");
		$(this).css("background-color","rgba(0,0,0)");
	});
});