var hash = location.hash,
	$tab = $( hash );
	if( $tab.length ) {
		$tab.show().siblings().hide();
	}
