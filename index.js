var page = 1;


function san()
{
	if(page>1&&page<12)
		page--;
	
	initialize();
	let num = String(page)
	document.getElementById(num).className = "box show";
}

function xia()
{
	if(page>=1&&page<11)
		page++;

	initialize();
	let num = String(page)
	document.getElementById(num).className = 'box show';
	console.log(page);
}

function initialize(){
	for(i=1;i<12;i++)
	{
		let num = String(i)
		document.getElementById(num).className = 'box';
	}
}