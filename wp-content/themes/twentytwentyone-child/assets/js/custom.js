//Postmeta uspdate form 
jQuery( document ).ready(function() {
    jQuery(document).on("click","#btnUpdate",function() {
        var pid=jQuery("#pid").val();
        var price=jQuery("#price").val();
        jQuery.ajax({
            url: myAjax.ajaxurl,
            type: "POST",
            async: true, 
            data:{
                'action': 'my_action',
                'pid': pid,
                'price':price
            },
            success: function(data) {
                alert(data);
            },  
        });
    });
});

//fiters
jQuery(document).ready(function($){

	ajaxTestFunction() ;


	jQuery( "#filter" ).on( "click", function() {
		ajaxTestFunction() ;	
	});

	// listener/callback for the pagination clicks.
	jQuery( '.filtered-posts' ).on( 'click', '.page-numbers', function( e ){
		e.preventDefault();
		var paged=$(this).text();
		ajaxTestFunction( paged );
	});


	//display posts function
	function ajaxTestFunction( page_num ) {
		
		if( page_num == undefined)
		{
			page_num=1;
		};

		var category = $( '.js-category' ).val();
		var price_srt = $( '#price_src' ).val();
	
		data = {
			'action': 'filterposts',
			'category': category,
			'price_srt': price_srt,
			'paged':page_num
		};

		jQuery.ajax({
			url : myAjax.ajaxurl,
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				$('.filtered-posts').html( 'Loading...' );
				$('.js-category').attr( 'disabled', 'disabled' );
				$('.js-date').attr( 'disabled', 'disabled' );
			},
			success : function( data ) {
                console.log(data);
				if ( data ) {
                    
					$('.filtered-posts').html( data.posts );

					$('.js-category').removeAttr('disabled');
					$('.js-date').removeAttr('disabled');
                    
				} else {
					$('.filtered-posts').html( 'No posts found.' );
				}
			}
		});
	}

	jQuery(window).load(function() {
		// alert('slidee');
		jQuery('.flexslider').flexslider({
		  animation: "slide"
		});
	});
});