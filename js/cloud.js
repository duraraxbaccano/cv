/* summon clouds coded by Leon Lin */
var sky = document.createElement("div");
function initSky(){
	sky.setAttribute("class","sky");
}
var clouds = new Array();
var xmax = 600;
var ymax = 450;
function createCloud(){
	var i = 0;
	var pos;
	for(; i<10; i++){
		clouds[i] = new Cloud( Math.round(Math.random()*xmax), Math.round(Math.random()*ymax) );
		pos = clouds[i].getPos();
		$( clouds[i].getCloud() ).css({ "top" : pos[1]+"px", "left" : pos[0]+"px"});
		sky.appendChild(clouds[i].getCloud());
	};
}

function Cloud(xaxis,yaxis){
	this.cloud = document.createElement("div");
	this.cloud.setAttribute("class","cloud");

	this.image = document.createElement("img");
	this.image.setAttribute("src","img/cloud.gif");

	this.posx = xaxis;
	this.posy = yaxis;	
	this.speed = Math.round(1+Math.random()*5);

	this.cloud.appendChild(this.image);

};

Cloud.prototype.getCloud = function(){ return this.cloud; };
Cloud.prototype.getPos = function(){ return new Array(this.posx,this.posy); };
Cloud.prototype.getSpeed = function(){ return this.speed; }

function summonCloud(where){
	stopCloud = false;
	initSky();
	createCloud();
	document.getElementById(where).appendChild(sky);
	moveCloud();

}
function removeCloud(where){
	//alert(where); //for debug
	//document.getElementById(where).removeChild(sky);
	stopCloud = true;
	$( sky ).empty();
}
var stopCloud = true;
function moveCloud(){
	if(stopCloud)
	{
		return;
	}
	else
	{
		for(var index in clouds)
		{
			if( index === "remove")
				break;

			$( clouds[index].getCloud() ).css("left", "+="+clouds[index].getSpeed() );

			//touch margin
			if( parseInt( $( clouds[index].getCloud() ).css("left") ) >= (xmax+256) )
			{
				// stopCloud = true;

				/* return zero */
				$( clouds[index].getCloud() ).css("left", "0px" );
			}
		}
		setTimeout("moveCloud();",100);
	}
}