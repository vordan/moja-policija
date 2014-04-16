//var rendered_html = render('mytemplate', {});

function render_template(tmpl_name, tmpl_data) {
	if (!render_template.tmpl_cache) {
		render_template.tmpl_cache = {};
	}

	if (! render_template.tmpl_cache[tmpl_name]) {
		var tmpl_dir = 'templates/';
		var tmpl_url = tmpl_dir + tmpl_name + '.tpl.html';

		var tmpl_string;
		$.ajax({
				url: tmpl_url,
				method: 'GET',
				async: false,
				dataType: 'html',
				success: function(data) {
					tmpl_string = data;
				}
		});

		render_template.tmpl_cache[tmpl_name] = _.template(tmpl_string);
	}

	return render_template.tmpl_cache[tmpl_name](tmpl_data);
}

function getDeviceOrientation() {
	var orientation = window.orientation;
	if (_.isUndefined(orientation) == false) {
		if (orientation != 90 && orientation != -90) {
				return 'portrait';
		}
		else {
				return 'landscape';
		}
	}
	else {
		var viewportWidth  = $(window).width();
		var viewportHeight = $(window).height();

		if (viewportWidth <= viewportHeight) {
				return 'portrait';
		}
		else {
				return 'landscape';
		}
	}
}


String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g, "");
};

String.prototype.toTitleCase = function() {
	return this.replace(/([^\s:\-])([^\s:\-]*)/g,function($0,$1,$2){
		return $1.toUpperCase()+$2.toLowerCase();
	});
}
