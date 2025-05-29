var wasSmall=0;
var wasLarge=0;

$( document ).ready(function() {

if($(window).width() > 850)
{
	wasSmall=0;
	wasLarge=1;
}
else
{
	wasSmall=1;
	wasLarge=0;
}

});

$(window).resize(function() {


	if($(window).width() > 850 && wasSmall==1)
	{
		window.location = window.location;
		wasSmall=0;wasLarge=1;
		
	}
	else if($(window).width() < 850 && wasLarge==1)
	{
		window.location = window.location;
		wasSmall=1;wasLarge=0;
		
	}	

});