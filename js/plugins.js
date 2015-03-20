(function($){
 var elems = 0, maxElem = 100, possElem = ['<select><option>----</option></select>', '<input type="text" />', '<input type="radio" />', '<input type="checkbox" />'], curElem = [], curTime = [];
 
 
 
function disappear(t){if(typeof t == 'undefined') curElem.shift(); else t.fadeOut('slow').remove();}

function random(){
	var wh = $(window).height(), ww = $(window).width(), elem = possElem[Math.floor(Math.random()*possElem.length)], nh= Math.random() * (wh)-10, nw = Math.random() * (ww)-50, newElem = $(elem);
	newElem.css({'top':nh, 'left':nw}).appendTo('#container');
	curElem.push(newElem);
	curTime.push(window.setTimeout(function(){disappear(newElem);}, 5000));
	if(curElem.length >= maxElem) disappear();
	// if(curElem.length >= maxElem){var rand = Math.floor(Math.random()*curElem.length);disappear(rand);}
}

function morse(){
	elem = possElem[Math.floor(Math.random()*possElem.length)], newElem = $(elem);
	newElem.css({'position':'relative', marginRight:'5px'}).appendTo('#container');
	curElem.push(newElem);
	curTime.push(window.setTimeout(function(){disappear(newElem);}, 5000));
	if(curElem.length >= maxElem) disappear();
}

function night(){
	var wh = $(window).height(), ww = $(window).width(), elem = possElem[2], nh= Math.random() * (wh)-10, nw = Math.random() * (ww)-50, newElem = $(elem);
	newElem.css({'top':nh, 'left':nw}).appendTo('#container');
	if(curElem.length >= maxElem) disappear();
	curElem.push(newElem);
	curTime.push(window.setTimeout(function(){disappear(newElem);}, 5000));
}

function updateInfos(){
	$('header').html(curElem.length + 'éléments affichés');
}

/* random / inline / night */

$('#random').click(function(e){
	e.preventDefault();
	maxElem = 100, curElem= [];
	$('#container').empty().unbind('mousemove').bind('mousemove',function(){random();updateInfos();}); 
});

$('#morse').click(function(e){
	e.preventDefault();
	curElem= [];
	$('#container').empty().unbind('mousemove').bind('mousemove',function(){morse();updateInfos();}); 
});

$('#night').click(function(e){
	e.preventDefault();
	maxElem = 10, curElem= [];
	
	$('#container').empty().unbind('mousemove').bind('mousemove',function(){night();updateInfos();}); 
});

})(window.jQuery);