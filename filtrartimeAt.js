const json = require('./_data.json'),
  cheerio = require('cheerio'),
  request = require('request'),
  _ = require('lodash'),
  linkes = [],
  moment = require('moment'),
  fs = require('fs');


const  pub = [ 
  'Publicado em 25 de mar de 2013',
  'Publicado em 25 de mar de 2013',
  'Publicado em 25 de mar de 2013',
  'Publicado em 7 de jun de 2013',
  'Publicado em 25 de mar de 2013',
  'Publicado em 25 de mar de 2013',
  'Publicado em 20 de jun de 2013',
  'Publicado em 29 de abr de 2013',
  'Publicado em 8 de jul de 2013',
  'Publicado em 8 de jul de 2013',
  'Publicado em 15 de jul de 2013',
  'Publicado em 16 de jul de 2013',
  'Publicado em 29 de abr de 2013',
  'Publicado em 19 de mar de 2013',
  'Publicado em 10 de jul de 2013',
  'Publicado em 7 de jun de 2013',
  'Publicado em 11 de jun de 2013',
  'Publicado em 11 de jun de 2013',
  'Publicado em 7 de ago de 2013',
  'Publicado em 7 de ago de 2013',
  'Publicado em 4 de set de 2013',
  'Publicado em 14 de ago de 2013',
  'Publicado em 4 de set de 2013',
  'Publicado em 18 de ago de 2013',
  'Publicado em 16 de set de 2013',
  'Publicado em 16 de set de 2013',
  'Publicado em 3 de nov de 2013',
  'Publicado em 30 de out de 2013',
  'Publicado em 16 de set de 2013',
  'Publicado em 27 de out de 2013',
  'Publicado em 7 de nov de 2013',
  'Publicado em 4 de dez de 2013',
  'Publicado em 27 de out de 2013',
  'Publicado em 12 de nov de 2013',
  'Publicado em 23 de nov de 2013',
  'Publicado em 29 de nov de 2013',
  'Publicado em 10 de dez de 2013',
  'Publicado em 13 de jan de 2014',
  'Publicado em 24 de jan de 2014',
  'Publicado em 2 de fev de 2014',
  'Publicado em 7 de fev de 2014',
  'Publicado em 29 de jan de 2014',
  'Publicado em 11 de fev de 2014',
  'Publicado em 15 de fev de 2014',
  'Publicado em 16 de mai de 2014',
  'Publicado em 13 de mai de 2014',
  'Publicado em 3 de mai de 2014',
  'Publicado em 19 de mai de 2014',
  'Publicado em 23 de mai de 2014',
  'Publicado em 6 de mar de 2014',
  'Publicado em 28 de mai de 2014',
  'Publicado em 27 de mar de 2014',
  'Publicado em 4 de abr de 2014',
  'Publicado em 30 de mai de 2014',
  'Publicado em 9 de jun de 2014',
  'Publicado em 15 de jul de 2014',
  'Publicado em 4 de jul de 2014',
  'Publicado em 22 de jul de 2014',
  'Publicado em 17 de jun de 2014',
  'Publicado em 29 de jun de 2014',
  'Publicado em 29 de jul de 2014',
  'Publicado em 5 de ago de 2014',
  'Publicado em 14 de ago de 2014',
  'Publicado em 21 de ago de 2014',
  'Publicado em 23 de set de 2014',
  'Publicado em 1 de out de 2014',
  'Publicado em 17 de out de 2014',
  'Publicado em 25 de out de 2014',
  'Publicado em 9 de out de 2014',
  'Publicado em 13 de nov de 2014',
  'Publicado em 5 de nov de 2014',
  'Publicado em 6 de dez de 2014',
  'Publicado em 20 de nov de 2014',
  'Publicado em 28 de nov de 2014',
  'Publicado em 17 de dez de 2014',
  'Publicado em 16 de jan de 2015',
  'Publicado em 25 de dez de 2014',
  'Publicado em 23 de jan de 2015',
  'Publicado em 6 de fev de 2015',
  'Publicado em 30 de jan de 2015',
  'Publicado em 30 de dez de 2014',
  'Publicado em 19 de fev de 2015',
  'Publicado em 10 de jan de 2015' ]

const datas = []

const mon = ['jan' , 'fev' , 'mar' , 'abr' , 'mai',
  'jun' , 'jul' , 'ago' , 'set' , 'out',
  'nov' , 'dez'];          

pub.forEach(function(data) {
  const data = data.substr(13).split(' ');
  const mes = (mon.indexOf(data[2])+1) <= 9?
    '0'+(mon.indexOf(data[2])+1):+(mon.indexOf(data[2])+1);
  datas.push(data[4]+'/'+mes+'/'+data[0]);
})

const completeDate = [];

datas.forEach(function(data) {
  completeDate.push(new Date(data));
})

completeDate = completeDate.sort((a, b) => new Date(a) - new Date(b));

const DateInOrder = [];

completeDate.forEach(function(data , index) {
  json[index].published_at = moment(data).format("YYYYMMDD");
});

json[83].published_at = json[82].published_at;

salconstJson(json);

function salconstJson (data) {
  fs.writeFile("_data1.json", JSON.stringify(data, null, 4));
}
