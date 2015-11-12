var	cheerio					= require('cheerio'),
		request					= require('request'),
		fs							= require('fs'),
		linkoOfChannel	= process.argv[2],
		jsonSave				= process.argv[3],
		hrefLinks				= [];



request(linkoOfChannel,
	function (error, response, body) {
		if (!error && response.statusCode == 200) {
		$ = cheerio.load(body);
		$(".pl-video-title-link").each(function(index,links){
			hrefLinks.push({ 
				"title" : trin($(links).text()),
				"description" : "Estrutura de Dados Descomplicada em C aula "+(index+1),
				"duration": "",
				"level": "b",
				"url" : "https://www.youtube.com"+ $(links).attr('href').split('&')[0],
				"published_at": "",
				"site" : "",
				"site_url": "https://programacaodescomplicada.wordpress.com",
				"lang": "pt-br",
				"image": "cdescoplicado.jpg",
				"publish": true
			});
		});
		$('.pl-video-owner').each(function(index , value) {
			var site = $(value.children[1]).text();
			hrefLinks[index].site = site;
		});
		$('.timestamp').each(function(index , value) {
			var time = $(value.children[0]).text();
			hrefLinks[index].duration = time;     
		});
		salvarJson(hrefLinks);
	}
});

function takeDateFromPlayList (argument) {
	var urlIncial =  process.argv[2];
	var start = 1;
	var end = process.argv[3];
	var data = [];
	for(var i = 0; i < end-1; i++ ){
		request(urlInicial, function(err, res , body) {
      
		});
	}
}

function trin(text) {
	return text.replace(/^\s+|\s+$/gm,'');
}

function salvarJson(data) {
	fs.writeFile(jsonSave, JSON.stringify(data, null, 4), function(err){
		console.log(err || "success");
	});
}
