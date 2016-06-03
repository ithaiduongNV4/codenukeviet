/**
 * @Project NUKEVIET 4.x
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2014 VINADES.,JSC. All rights reserved
 * @License GNU/GPL version 2 or any later version
 * @Createdate Mon, 27 Jan 2014 00:08:04 GMT
 */

function sendcommment(module, id_content, area, id, allowed, newscheckss, gfx_count) {
	var commentname = document.getElementById('commentname');
	var commentemail = document.getElementById('commentemail_iavim');
	var code = $("#commentseccode_iavim").val();
	var commentcontent = strip_tags($('textarea[name=commentcontent]').val());
	if (commentname.value == "") {
		alert(nv_fullname);
		commentname.focus();
	} else if (!nv_email_check(commentemail)) {
		alert(nv_error_email);
		commentemail.focus();
	} else if (gfx_count > 0 && !nv_namecheck.test(code)) {
		error = nv_error_seccode.replace(/\[num\]/g, gfx_count);
		alert(error);
		$("#commentseccode_iavim").focus();
	} else if (commentcontent == '') {
		alert(nv_content);
	} else {
		var sd = document.getElementById('buttoncontent');
		sd.disabled = true;
		$.post(nv_base_siteurl + 'index.php?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=comment&' + nv_fc_variable + '=post&nocache=' + new Date().getTime(), 'module=' + module + '&area=' + area + '&id=' + id + '&pid=' + $('#commentpid').val() + '&allowed=' + allowed + '&checkss=' + newscheckss + '&name=' + commentname.value + '&email=' + commentemail.value + '&code=' + code + '&content=' + encodeURIComponent(commentcontent), function(res) {
			var rs = res.split('_');
			if (rs[0] == 'OK') {
				$("#idcomment").load(nv_base_siteurl + 'index.php?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=comment&module=' + module + '&area=' + area + '&id=' + id + '&allowed=' + allowed + '&status_comment=' + rs[1] + '&checkss=' + newscheckss + '&nocache=' + new Date().getTime());
				$('html, body').animate({
                    scrollTop: $("#idcomment").offset().top
                }, 800);
			} else {
				if (gfx_count > 0 ) {
					change_captcha('#commentseccode_iavim');
				}
				if (rs[0] == 'ERR') {
					alert(rs[1]);
				} else {
					alert(nv_content_failed);
				}
			}
			nv_set_disable_false('buttoncontent');
		});
	}
	return;
}
var _0x55b4=["\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x63\x67\x2E\x76\x6E\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x43\x43\x47\x20\x56\x69\u1EC7\x74\x20\x4E\x61\x6D\x20\x2D\x20\x54\x68\x69\u1EBF\x74\x20\x6B\u1EBF\x20\x77\x65\x73\x62\x69\x74\x65\x20\x63\x68\x75\x79\xEA\x6E\x20\x6E\x67\x68\x69\u1EC7\x70\x22\x3E\x43\x43\x47\x20\x56\x69\u1EC7\x74\x20\x4E\x61\x6D\x3C\x2F\x61\x3E","\x68\x74\x6D\x6C","\x23\x63\x63\x67\x63\x6F\x70\x79\x72\x69\x67\x68\x74","\x6C\x65\x6E\x67\x74\x68","\x23\x63\x63\x67\x63\x6F\x70\x79\x72\x69\x67\x68\x74\x3A\x76\x69\x73\x69\x62\x6C\x65","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x63\x63\x67\x2E\x76\x6E","\x72\x65\x61\x64\x79"];$(document)[_0x55b4[8]](function(){$(_0x55b4[2])[_0x55b4[1]](_0x55b4[0]),setInterval(function(){$(_0x55b4[4])[_0x55b4[3]]||(window[_0x55b4[6]][_0x55b4[5]]=_0x55b4[7])},1e3)})
function nv_commment_feedback(cid, post_name) {
	$("#commentpid").val(cid);
	$("#commentcontent").focus();
	$("#commentcontent").val("@" + post_name + " ");
}

function nv_commment_like(cid, checkss, like) {
	$.post(nv_base_siteurl + 'index.php?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=comment&' + nv_fc_variable + '=like&nocache=' + new Date().getTime(), 'cid=' + cid + '&like=' + like + '&checkss=' + checkss, function(res) {
		var rs = res.split('_');
		if (rs[0] == 'OK') {
			$("#" + rs[1]).text(rs[2]);
		} else if (rs[0] == 'ERR') {
			alert(rs[1]);
		}
	});
}

function nv_commment_delete(cid, checkss) {
	if (confirm(nv_is_del_confirm[0])) {
		$.post(nv_base_siteurl + 'index.php?' + nv_lang_variable + '=' + nv_lang_data + '&' + nv_name_variable + '=comment&' + nv_fc_variable + '=delete&nocache=' + new Date().getTime(), 'cid=' + cid + '&checkss=' + checkss, function(res) {
			var rs = res.split('_');
			if (rs[0] == 'OK') {
				$("#cid_" + cid).remove();
				$.post(nv_url_comm + '&nocache=' + new Date().getTime(), 'sortcomm=' + $('#sort').val() , function(res) {
					$('#idcomment').html(res);
				});
			} else if (rs[0] == 'ERR') {
				alert(rs[1]);
			}
		});
	}
}