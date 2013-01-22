process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    move(input);
});

function move(input) {
    var x = parseInt(input.substring(0,1));
    var y = parseInt(input.substring(2,3));
    var box = toArray(input);
	
	//find dirty cell
	var dirtyCell = detectedDirtyCell(box);
	if (x - dirtyCell.x < 0) {
		process.stdout.write('DOWN');
	} else if (x - dirtyCell.x > 0) {
		process.stdout.write('UP');
	} else if (y - dirtyCell.y < 0) {
		process.stdout.write('RIGHT');
	} else if (y - dirtyCell.y > 0) {
		process.stdout.write('LEFT');
	} else {
		process.stdout.write('CLEAN');
	}
}

function toArray(input) {
	var split = input.split('\n');
  	var box = new Array();
  	for (i=0;i<=4;i++) {
    	box[i] = new Array();
    	for (j=0;j<=4;j++) {
    	  	box[i][j] = split[i+1].charAt(j);
    	}
	}
    return box;
}

function readFromArray(array, x, y) {
	try {
		return array[x][y];
	} catch(e) {
		return 'o'; //out
	}
}

function detectedDirtyCell(box) {
	for (i=0;i<=4;i++) {
    	for (j=0;j<=4;j++) {
			if (box[i][j] == 'd') return {x:i, y:j};
    	}
	}
}
//x = lines
//j = columns