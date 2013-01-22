process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    move(input);
});

//var input = '0 0\n5 5\nbd---\n-d---\n---d-\n---d-\n--d-d';
//move(input);

function move(input) {
    var x = parseInt(input.substring(0,1));
    var y = parseInt(input.substring(2,3));
	
	var d = getDimension(input);
	
	var h = d.h;
    var w = d.w
	
	var now = {x:x, y:y};
    var box = toArray(input, d);
	
	//find dirty cell
	var dirtyCells = detectedDirtyCell(box);
	var nearestDirtyCell = getNearestDirtyCell(now, dirtyCells);
	if (x - nearestDirtyCell.x < 0) {
		process.stdout.write('DOWN');
	} else if (x - nearestDirtyCell.x > 0) {
		process.stdout.write('UP');
	} else if (y - nearestDirtyCell.y < 0) {
		process.stdout.write('RIGHT');
	} else if (y - nearestDirtyCell.y > 0) {
		process.stdout.write('LEFT');
	} else {
		process.stdout.write('CLEAN');
	}
}

function toArray(input, dimension) {
	var split = input.split('\n');
	
	var h = dimension.h;
    var w = dimension.w;
	
	split.shift();
	split.shift();
  	var box = new Array();
  	for (i=0;i<w;i++) {
    	box[i] = new Array();
    	for (j=0;j<h;j++) {
    	  	box[i][j] = split[i].charAt(j);
    	}
	}
    return box;
}

function readFromArray(array, now) {
	try {
		return array[now.x][now.y];
	} catch(e) {
		return 'o'; //out
	}
}

function detectedDirtyCell(box) {
	var dirtyCells = [];
	for (i=0;i<=4;i++) {
    	for (j=0;j<=4;j++) {
			if (box[i][j] == 'd') dirtyCells.push({x:i, y:j});
    	}
	}
	return dirtyCells;
}

function getNearestDirtyCell(now, dirtyCells) {
	
	var nearestDirtyCell;
	for (i=0;i<dirtyCells.length;i++) {
		var d = dirtyCells[0];
		
		var sum = (now.x - d.x) + (now.y - d.y);
		if (!nearestDirtyCell) nearestDirtyCell = {cell: d, sum: sum};
		if (d.sum < nearestDirtyCell.sum) nearestDirtyCell = {cell: d, sum: sum};
	}
	
	return nearestDirtyCell.cell;
}

function getDimension(input) {
	var split = input.split('\n');
	var split2 = split[1].split(' ');
	var h = parseInt(split2[0]);
    var w = parseInt(split2[1]);
	return {h:h, w:w};
}