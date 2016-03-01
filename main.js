'use strict';

$(document).ready(init);

function init() {


	$('#getMovie').click(getMovie);
}


function getMovie() {
	
	//console.log("hey");
	var $input = $("#enter-movie").val();
	var $yearInput = $("#")
	$.ajax('http://www.omdbapi.com/?y=&plot=short&r=json&t=' + $input, {
		success: function(data) {
			var $link = $('<a>IMDB</a>');
			var $img = $('<img>');
			var $p = $('<p>');
			var $year = $('<p>');
			var $li = $('<li>');
			
			//$p.text(data.Director);
			$year.text(data.Year);
			$p.text(data.Title).fadeIn();
			//$li.text(data.Plot).fadeIn();
			$img.attr('src', data.Poster).addClass('confined').fadeIn();
			$link.attr('href', 'http://www.imdb.com/title/' + data.imdbID);
			

			$('#movie').append($img);
			$('#idk').append($p, $link);
			//$('#movie-info').append($li);
			$('#enter-movie').val('');
			$('#enter-year').val('');


			console.log(data);


		},

		error: function(error) {
			console.log(error);
		}
	})
}

// function removeInfo {


// }