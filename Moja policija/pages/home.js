var cls_page_home = function() {
	function _render() {
		$(".main-menu").click(function(e) {
				e.preventDefault();
				this.blur();

				var page = $(this).data('page');
				page_index.mainViewRouter(page);
		});
	}

	var pub = {
		render : function() {
			_render();
		},
	};
	return pub;
}

var page_home = null;
$(document).ready(function() {
	page_home = new cls_page_home();
});
