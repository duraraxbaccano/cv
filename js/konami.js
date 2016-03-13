var command="";
function registerKonami(){
	document.body.onkeydown = function(event){
		switch(event.which)
		{
			//up down left right
			case 13:
				break;
			case 38:
				command+="1";
				break;
			case 40:
				command+="2";
				break;
			case 37:
				command+="3";
				break;
			case 39:
				command+="4";
				break;
			//B b
			case 66:
			case 98:
				command+="5";
				break;
			//A a
			case 65:
			case 97:
				command+="6";
				break;
			//s S n N o O w W
			case 83:
			case 115:
				command+="s";
				break;
			case 78:
			case 110:
				command+="n";
				break;
			case 79:
			case 111:
				command+="o";
				break;
			case 87:
			case 119:
				command+="w";
				break;
			default:
				break;
		}
		// user input :↑ ↓ ← → B A
		if(command.search("123456")>=0)
		{
			command="";
			konami();
		}
		else
			return;
	}
}

function konami(){
	//do something
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "top left"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "top center"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "top right"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "right middle"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "right bottom"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "bottom center"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "bottom left"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "left middle"});
	$.notify("konami triggered!!",{ style : "leonstyle", className : "map",position : "left top"});
	$("img#leonlogo").attr("src","img/ninjakuma.png")
}