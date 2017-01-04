importScripts('https://cdn.rawgit.com/gka/chroma.js/master/chroma.min.js');
importScripts('http://tools.medialab.sciences-po.fr/iwanthue/js/libs/chroma.palette-gen.js');

self.addEventListener('message', function (e) {
    var colors = paletteGenerator.generate(
    e.data.nbr, // number of colors
    function(color){ // This function filters valid colors
      var hcl = color.hcl();
      return hcl[0]>=0 && hcl[0]<=360
        && hcl[1]>=40 && hcl[1]<=70
        && hcl[2]>=15 && hcl[2]<=85;
    },
    false, // Using Force Vector instead of k-Means
    10, // Steps (quality)
    false, // Ultra precision
    'Default' // Color distance type (colorblindness)
  );
  // Sort colors by differenciation first
  colors = paletteGenerator.diffSort(colors, 'Default');
  postMessage( {tag:e.data.tag, colors:colors} );
}, false);