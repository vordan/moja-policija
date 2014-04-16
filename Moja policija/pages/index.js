//--- index.js ------------------------------------------------------------------
var cls_page_index = function() {
	function _render() {
		$('div.content-wrap').replaceWith(render_template('index', dict));
		pub.mainViewRouter('home');
		_events_render();
	}

	function _events_render() {
		$('#btn_home').click(function(e) {
			e.preventDefault();
			this.blur();
			pub.mainViewRouter('home');
		});
	}

	var pub = {
		render : function() {
			_render();
		},

		mainViewRouter : function(_page_id) {
			if (_.isUndefined(_page_id) || _page_id.length === 0) {
				_page_id = 'home';
			}
			var _page_arr = $.grep(pages, function(e){ return e.id == _page_id; });
			var _page = _page_arr[0];

			if (_page.id == 'home') {
				$('#btn_home').hide();
				$('#img_title').show();
			}
			else {
				$('#img_title').hide();
				$('#btn_home').show();
			}

			$.getScript('pages/'+_page.id+'.js', function() {
				$('#navbar-title').show();
				$('#page-content-wrapper').html(render_template(_page.id, dict));

				var _page_icon = '<i class="'+_page.icon+'"></i>';

				$('#navbar-title').html(_page.title);

				try {
					eval('page_'+_page.id+'.render()');
				}
				catch(e) {}
			});
		}
	};
	return pub;
}

var page_index = null;
$(document).ready(function() {
	page_index = new cls_page_index();
	page_index.render();
});
