 // DOM ready
	 $(function() {

$('<select />').appendTo('nav');

$('<option />', {
    'selected': 'selected',
    'value'   : '',
    'text'    : 'Select A Page...'
}).appendTo('nav select');

$('nav a').each(function() {
    var el = $(this);
    if(el.parents('.sub-menu').length) {
        $('<option />', {
            'value': el.attr('href'),
            'text':  'â€” ' + el.text()
        }).appendTo('nav select');
    } else {
        $('<option />', {
            'value': el.attr('href'),
            'text': el.text()
        }).appendTo('nav select');
    }
});

$('nav select').change(function() {
    window.location = $(this).find('option:selected').val();
});
	 });