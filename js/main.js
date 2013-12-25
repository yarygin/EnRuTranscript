function replaceSelectedText(selection, replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = selection;
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}

function autoLayoutChange( str ) {
	replacer = {
		"q":"й", "w":"ц", "e":"у", "r":"к", "t":"е", "y":"н", "u":"г",
		"i":"ш", "o":"щ", "p":"з", "[":"х", "]":"ъ", "a":"ф", "s":"ы",
		"d":"в", "f":"а", "g":"п", "h":"р", "j":"о", "k":"л", "l":"д",
		";":"ж", "'":"э", "z":"я", "x":"ч", "c":"с", "v":"м", "b":"и",
		"n":"т", "m":"ь", ",":"б", ".":"ю", "/":".", "`":"ё"
	};
	
	return str.replace(/[A-z/,.;\'\]\[]/g, function(x){
		return x == x.toLowerCase() ? replacer[ x ] : replacer[ x.toLowerCase() ].toUpperCase();
	});
}

var sel = window.getSelection();
var replacementText = autoLayoutChange(sel.toString());
replaceSelectedText(sel,replacementText);