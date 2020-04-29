const cheerio = require('cheerio');
const tabletojson = require('tabletojson').Tabletojson;
const {requests , renameKey} = require('./utils/index');
const {BASE_URL} = require('./urls/index');


const multisectoral = async() =>{
  const res = await requests(`${BASE_URL}/programas/multisectorial`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Programa' , 'programa');
    renameKey(obj , 'Asignación' , 'asignacion');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
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
    const programa = table[0][k].programa || null;
    const asignacion = table[0][k].asignacion || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    _table.push({
      programa,
      asignacion,
      fecha_de_publicacion,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const infrastructure = async() =>{
  const res = await requests(`${BASE_URL}/programas/infraestructura`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Programa' , 'programa');
    renameKey(obj , 'Asignación' , 'asignacion');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
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
    const programa = table[0][k].programa || null;
    const asignacion = table[0][k].asignacion || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    _table.push({
      programa,
      asignacion,
      fecha_de_publicacion,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const economy = async() =>{
  const res = await requests(`${BASE_URL}/programas/economia`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Programa' , 'programa');
    renameKey(obj , 'Asignación' , 'asignacion');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
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
    const programa = table[0][k].programa || null;
    const asignacion = table[0][k].asignacion || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    _table.push({
      programa,
      asignacion,
      fecha_de_publicacion,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const livingPlace = async() =>{
  const res = await requests(`${BASE_URL}/programas/vivienda`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Programa' , 'programa');
    renameKey(obj , 'Asignación' , 'asignacion');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
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
    const programa = table[0][k].programa || null;
    const asignacion = table[0][k].asignacion || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    _table.push({
      programa,
      asignacion,
      fecha_de_publicacion,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const planning = async() =>{
  const res = await requests(`${BASE_URL}/programas/planificacion`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Programa' , 'programa');
    renameKey(obj , 'Asignación' , 'asignacion');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
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
    const programa = table[0][k].programa || null;
    const asignacion = table[0][k].asignacion || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    _table.push({
      programa,
      asignacion,
      fecha_de_publicacion,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const programs = async() =>{
  const res = await requests(`${BASE_URL}/programas/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Programa' , 'programa');
    renameKey(obj , 'Asignación' , 'asignacion');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
    renameKey(obj , 'Tipo de Programa' , 'tipo_de_programa');
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
    const programa = table[0][k].programa || null;
    const asignacion = table[0][k].asignacion || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    const tipo_de_programa = table[0][k].tipo_de_programa || null;
    _table.push({
      programa,
      asignacion,
      fecha_de_publicacion,
      tipo_de_programa,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const fundOpportunities = async() =>{
  const res = await requests(`${BASE_URL}/oportunidades-de-fondo/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  

  table[0].forEach((obj) =>{
    renameKey(obj , 'Nombre del Documento' , 'nombre_del_documento');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
    renameKey(obj , 'Categoría' , 'categoria');
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
    const nombre_del_documento = table[0][k].nombre_del_documento || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
    const categoria = table[0][k].categoria || null;
    _table.push({
      nombre_del_documento,
      fecha_de_publicacion,
      categoria,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const purchases = async() =>{
  const res = await requests(`${BASE_URL}/compras`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  

  table[0].forEach((obj) =>{
    renameKey(obj , 'Nombre de la compra' , 'nombre_de_la_compra');
    renameKey(obj , 'Entidad Solicitante' , 'entidad_solicitante');
    renameKey(obj , 'Descripción' , 'descripcion');
    renameKey(obj , 'Fecha de envío de cotizaciones' , 'fecha_de_envio_de_cotizaciones');
    renameKey(obj , 'Estatus' , 'estatus');
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
    const nombre_de_la_compra = table[0][k].nombre_de_la_compra || null;
    const entidad_solicitante = table[0][k].entidad_solicitante || null;
    const descripcion = table[0][k].descripcion || null;
    const fecha_de_envio_de_cotizaciones = table[0][k].fecha_de_envio_de_cotizaciones || null;

    _table.push({
      nombre_de_la_compra,
      entidad_solicitante,
      descripcion,
      fecha_de_envio_de_cotizaciones,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const DRGRActionPlan = async() =>{
  const res = await requests(`${BASE_URL}/plan-accion-drgr/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  

  table[0].forEach((obj) =>{
    renameKey(obj , 'Nombre del Documento' , 'nombre_del_documento');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicacion');
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
    const nombre_del_documento = table[0][k].nombre_del_documento || null;
    const fecha_de_publicacion = table[0][k].fecha_de_publicacion || null;
 
    _table.push({
      nombre_del_documento,
      fecha_de_publicacion,
      descargar_doc
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const reports = async() =>{
  const res = await requests(`${BASE_URL}/reportes/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Nombre del Reporte' , 'nombre_del_reporte');
    renameKey(obj , 'Fecha de Publicación' , 'fecha_de_publicación');
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
    const nombre_del_reporte = table[0][k].nombre_del_reporte || null;
    const fecha_de_publicación = table[0][k].fecha_de_publicación || null;
    _table.push({
      nombre_del_reporte,
      fecha_de_publicación,
      descargar_doc
    });
  });

  const data = [{table: _table}];

  return Promise.all(data)
}

const programManagers = async() =>{
  const res = await requests(`${BASE_URL}/gerentes-de-programas/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Gerentes de Programas' , 'gerentes_de_programas');
    renameKey(obj , 'Nombre (si aplica)' , 'nombre');
    renameKey(obj , 'Correo electrónico' , 'correo_electronico');
    renameKey(obj , 'Número de contácto\n(Recursos humanos o principal)' , 'numero_de_contacto');
  });

  const _table = []; 
  Array.from({length: table[0].length} , (v , k) =>{
    const gerentes_de_programas = table[0][k].gerentes_de_programas || null;
    const nombre = table[0][k]. nombre || null;
    const correo_electronico = table[0][k].correo_electronico || null;
    const numero_de_contacto = table[0][k].numero_de_contacto || null;
    const sitio_web = table[0][k].Website || null;
    _table.push({
      gerentes_de_programas,
      nombre,
      correo_electronico,
      numero_de_contacto,
      sitio_web
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

const constructionManagers = async() =>{
  const res = await requests(`${BASE_URL}/gerentes-de-construccion/`);
  const $ = cheerio.load(res);
  const html = $.html();
  const table = tabletojson.convert(html);  
  
  table[0].forEach((obj) =>{
    renameKey(obj , 'Gerentes de Construcción' , 'gerentes_de_construccion');
    renameKey(obj , 'Nombre (si aplica)' , 'nombre');
    renameKey(obj , 'Correo electrónico' , 'correo_electronico');
    renameKey(obj , 'Número de contácto\n(Recursos humanos o principal)' , 'numero_de_contacto');
  });

  const _table = []; 
  Array.from({length: table[0].length} , (v , k) =>{
    const gerentes_de_construccion = table[0][k].gerentes_de_construccion || null;
    const nombre = table[0][k]. nombre || null;
    const correo_electronico = table[0][k].correo_electronico || null;
    const numero_de_contacto = table[0][k].numero_de_contacto || null;
    const sitio_web = table[0][k].Website || null;
    _table.push({
      gerentes_de_construccion,
      nombre,
      correo_electronico,
      numero_de_contacto,
      sitio_web
    });
  });

  const data = [{table: _table}];
  
  return Promise.all(data);
};

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
  constructionManagers,
  programManagers,
  reports,
  DRGRActionPlan,
  purchases,
  fundOpportunities,
  programs,
  planning,
  livingPlace,
  economy,
  infrastructure,
  multisectoral
}