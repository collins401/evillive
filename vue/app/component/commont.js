module.exports = {
	api: function() {
		var uriApi = 'http://wp.bytecats.com/api/';
		return uriApi;
	},
	loadingStart: function(){
		$('#loading').show();
		   
	},
	loadingEnd: function(){
		$('#loading').animate({
			opacity: 0},
			100, function() {
			$('#loading').hide();
		});
	},
	
		getCookie: function(sName, sDefaultValue) {
			var sRE = "(?:; |^)" + sName + "=([^;]*);?";
			var oRE = new RegExp(sRE);
			if (oRE.test(document.cookie)) {
				return unescape(RegExp["$1"]);
			} else {
				return sDefaultValue || null;
			}
		},
		setCookie: function(sName, sValue, iExpireSec, sDomain, sPath, bSecure) {
			if (!sName) {
				return;
			}
			if (!sValue) {
				sValue = "";
			}
			var str = sName + "=" + escape(sValue) + "; ";
			if (!isNaN(iExpireSec)) {
				var oDate = new Date();
				oDate.setTime(oDate.getTime() + iExpireSec * 1000);
				str += "expires=" + oDate.toGMTString() + "; ";
			}
			if (sDomain) {
				str += "domain=" + sDomain + "; ";
			}
			if (sPath) {
				str += "path=" + sPath + "; ";
			} else {
				str += "path=/; ";
			} if (bSecure) {
				str += "secure";
			}
			document.cookie = str;
		}
	
		
	
}
