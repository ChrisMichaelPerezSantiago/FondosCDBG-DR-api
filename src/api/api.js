const cheerio = require('cheerio');
const tabletojson = require('tabletojson').Tabletojson;
const {requests , renameKey} = require('./utils/index');
const {BASE_URL} = require('./urls/index');

const contracts = async() =>{
  const res = await requests(`${BASE_URL}/contratos/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Nombre del Contratista' , 'nombre_de_contratista');
    renameKey(obj , 'Solicitado por' , 'solicitado_por');
    renameKey(obj , 'Fecha de Ejecución' , 'fecha_de_ejecucion');
    renameKey(obj , 'Cantidad Total' , 'cantidad_total');
  });

  const documents = []
  $('table tbody tr td a').each((index , element) => {
    const $element = $(element);
    const url_doc = $element.attr('href');
    documents.push({download_doc: url_doc});
  });

  const _table = []; 
  Array.from({length: table[0].length} , (v , k) =>{
    const descargar_doc = documents[k].download_doc || null;
    const nombre_de_contratista = table[0][k].nombre_de_contratista || null;
    const solicitado_por = table[0][k]. solicitado_por || null;
    const fecha_de_ejecucion = table[0][k].fecha_de_ejecucion || null;
    const cantidad_total = table[0][k].cantidad_total || null;
    _table.push({
      nombre_de_contratista,
      solicitado_por,
      fecha_de_ejecucion,
      cantidad_total,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};


module.exports = {
  contracts,
}