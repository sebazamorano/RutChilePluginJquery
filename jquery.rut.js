(function($){

	$.fn.rut = function(options)
	{
		var defaults = 
		{

		};

		var opt = $.extend(defaults,options);

		return this.each(function(){
			$(this).keydown(function(e){
				if(e.shiftKey)
			   	{
		        	e.preventDefault();
			   	}
			 
			   	if (e.keyCode == 46 || e.keyCode == 8 || e.keyCode == 75) {
			   	}
			  	else 
			  	{
			        if (e.keyCode < 95) {
			          if (e.keyCode < 48 || e.keyCode > 57) {
			            	e.preventDefault();
			          }
			        } 
			        else 
			        {
		            	if (e.keyCode < 96 || e.keyCode > 105) {
		                	e.preventDefault();
		              	}
			        }
		      	}
			});
			$(this).on('change', function(e){
				$(this).val($.rut.format($(this).val()));
			});
		});

	}

	$.rut = {

		onlyNumbers : function()
		{
			
		},
		format : function(string)
		{
			var str = new String(string);
			strFormat = "";
			var vd = str.charAt(str.length - 1);
			str = str.substring(0, str.length - 1);			
			while(str.length > 3)
			{
				strFormat = "." + str.substr(str.length - 3) + strFormat;
				str = str.substring(0, str.length - 3 )
			}
			strFormat = str + strFormat ;
			if(strFormat != "")
			{
				strFormat  += "-" + vd;
			}
			
			return strFormat;
		}
	}

})(jQuery);