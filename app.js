'use strict';

const cheerio         = require('cheerio');
const  request        = require('request');
const  fs             = require('fs');
const  linkoOfChannel = process.argv[2];
const  jsonSave       = process.argv[3];
const  hrefLinks      = [];

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
        const site = $(value.children[1]).text();
        hrefLinks[index].site = site;
      });
      $('.timestamp').each(function(index , value) {
        const time = $(value.children[0]).text();
        hrefLinks[index].duration = time;     
      });
      salconstJson(hrefLinks);
    }
  });

function takeDateFromPlayList (argument) {
  const urlIncial =  process.argv[2];
  const start = 1;
  const end = process.argv[3];
  const data = [];
  for(const i = 0; i < end-1; i++ ){
    request(urlInicial, function(err, res , body) {

    });
  }
}

function trin(text) {
  return text.replace(/^\s+|\s+$/gm,'');
}

function salconstJson(data) {
  fs.writeFile(jsonSave, JSON.stringify(data, null, 4));
}
