var Checkout = function () {

    return {
        init: function () {
	        
	        //var form = $('#hbto-checkout-form');
            //var error = $('.alert-danger', form);
            //var success = $('.alert-success', form);
            
            $( "#button-shipping-address" ).click(function() {//call this EACH time the buttons are CLICKED

				//combine values to easier ui
				var mailfname = $('#mail-firstname').val();
				var maillname = $('#mail-lastname').val();
				var mailname = mailfname + ' ' + maillname;
				
				var mailcity = $('#mail-city').val();
				var mailstate = $('#mail-state').val();
				var mailzip = $('#mail-post-code').val();
				var mailcityStateZip = mailcity + ', ' + mailstate + ' ' + mailzip;
				
				var billfname = $('#bill-firstname').val();
				var billlname = $('#bill-lastname').val();
				var billname = billfname + ' ' + billlname;
				
				var billcity = $('#bill-city').val();
				var billstate = $('#bill-state').val();
				var billzip = $('#bill-post-code').val();
				var billcityStateZip = billcity + ', ' + billstate + ' ' + billzip;
				
				
				var ccnum = $('#ccnum').val();
				var ccnum = new Array(ccnum.length-3).join('x') + ccnum.substr(ccnum.length-4, 4);
				var ccmonth = $('#ccmonth').val();
				var ccyear = $('#ccyear').val();
				var expdate = ccmonth + '/' + ccyear;
				
				//mailing
				$('p[data-display="company"]').html($('#company').val());
				$('p[data-display="mailname"]').html(mailname);
				$('p[data-display="mailaddress1"]').html($('#mail-address1').val());
				$('p[data-display="mailaddress2"]').html($('#mail-address2').val());
				$('p[data-display="mail-city-state-zip"]').html(mailcityStateZip);
				$('p[data-display="mailcountry"]').html($('#mail-country').val());
				$('p[data-display="mailphone"]').html($('#mail-telephone').val());
				$('p[data-display="ssn"]').html($('#ssn').val());
				
				//billing
				$('p[data-display="billname"]').html(billname);
				$('p[data-display="billaddress1"]').html($('#bill-address1').val());
				$('p[data-display="billaddress2"]').html($('#bill-address2').val());
				$('p[data-display="bill-city-state-zip"]').html(billcityStateZip);
				$('p[data-display="billcountry"]').html($('#bill-country').val());
				$('p[data-display="billphone"]').html($('#bill-telephone').val());
				
				//site info
				$('p[data-display="username"]').html($('#username').val());
				
				//payment info
				$('p[data-display="ccnum"]').html(ccnum);
				$('p[data-display="expdate"]').html(expdate);
				
				
				//$('.form-control-static[data-display="company"]').html($('#company').val());
				
			});
			
	        
	        var displayConfirm = function() {
		    
  
                $('#confirm-order .form-control-static', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="'+$(this).attr("data-display")+'"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'payment') {
                        var payment = [];
                        $('[name="payment[]"]:checked').each(function(){
                            payment.push($(this).attr('data-title'));
                        });
                        $(this).html(payment.join("<br>"));
                    }
                });
            }
	        
	        for (i = new Date().getFullYear(); i < 2025; i++)
			{
				$('#ccyear').append($('<option />').val(i).html(i));
			}
			
			displayConfirm();
            
            $('#checkout').on('change', '#checkout-content input[name="account"]', function() {

              var title = '';

              if ($(this).attr('value') == 'register') {
                title = 'Step 2: Account &amp; Billing Details';
              } else {
                title = 'Step 2: Billing Details';
              }    

              $('#payment-address .accordion-toggle').html(title);
            });
		
        }
    };

}();