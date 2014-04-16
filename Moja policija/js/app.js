//--- Inicijalizacija na aplikacijata -------------------------------------------
if (window.applicationCache) {
	applicationCache.addEventListener('updateready', function() {
		if (confirm('An update is available. Reload now?')) {
			window.location.reload();
		}
	});
}

var dict = translation_mk;

var pages = [
	{'id':'home',						'title':dict.TITLE_HOME,					'icon':'fa fa-home'		},
	{'id':'prava_ovlastuvanja',	'title':dict.TITLE_PRAVA_OVLASTUVANJA,	'icon':'fa fa-file'		},
	{'id':'legitimiranje',			'title':dict.TITLE_LEGITIMIRANJE,		'icon':'fa fa-tags'		},
	{'id':'priveduvanje',			'title':dict.TITLE_PRIVEDUVANJE,			'icon':'fa fa-users'		},
	{'id':'pregledi_pretresi',		'title':dict.TITLE_PREGLEDI_PRETRESI,	'icon':'fa fa-list-alt'	},
	{'id':'zakon_pravda',			'title':dict.TITLE_ZAKON_PRAVDA,			'icon':'fa fa-exchange'	},
	{'id':'za_proektot',    		'title':dict.TITLE_ZA_PROEKTOT,			'icon':'fa fa-cog'		},
];

$(document).ready(function() {
	document.title = dict.TITLE_MAIN.toTitleCase();

	$(window).bind('orientationchange', function() {
		// Announce the new orientation number
		console.log('orientation:', window.orientation);
		alert('orientation:'+window.orientation);
	}, false);

	//setTimeout(function() {window.scrollTo(0, 1); }, 1);

	$(window).resize(function() {
//		mainSplitviewOnInit();
	});


});

