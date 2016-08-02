var lyric = '';

$.get('/api/lyrics', function(data){
	lyric = data;
	console.log(lyric);
});