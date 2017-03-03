var ligas = {};
var partidosLiga = {};


// Codigo para usar los end-point creados en el servidor.
$.getJSON("/users/ligas", function (p_ligas) {
  ligas=p_ligas;
  console.log("Se reciben las ligas");
  obtenerLigas();
});
var obtenerLigas = function ()
{
  ligas.forEach(function(l)
  {
    //console.log(l.caption);

  });
};


// En lugar del 428 va el id de la liga.
$.getJSON("/users/ligas/428", function (p_ligas) {
  partidosLiga=p_ligas.fixtures;
  obtenerPartidos();
});
var obtenerPartidos = function ()
{
  partidosLiga.forEach(function(p)
  {
    //console.log(p.homeTeamName +' vs '+ p.awayTeamName);

  });
};
