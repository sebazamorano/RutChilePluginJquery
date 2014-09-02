(function($){
	var equals = function(str1)
	{
		_object = $(this);
		_str1 = str1;

	};
	$.fn.extend({
		validar : function()
		{			
			this.submit(function(e){
				e.eventPreventDefault;
				$.each(e.target,function(i, node){
					var $this = $(node);					
					var tp  = $(node).attr("type");

					if(tp==="text")
					{
						if($this.val()==="")
						{
							$this.css({"background-color" : "red"});
						}else
						{
							$this.css({});
						}
						$this.keypress(function(){
							$this.css({"background-color" : "white"});
						});
					}
					else if(tp==="email")					
					{

					}
				});
				return false;
			});
		}
	});
})(jQuery);