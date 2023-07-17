var count=0;

function changeBackgroundColor(color1, color2){
	count++;
	if (count%2==0){
		document.body.style.backgroundColor = color1;
	}
	else {
		document.body.style.backgroundColor = color2;
	}
}