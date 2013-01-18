process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", function (input) {
    move(input);
});

function move(input) {
    var x = parseInt(input.substring(0,1));
    var y = parseInt(input.substring(2,3));
    var box = toArray(input);
	
	//try to clean...
    if (readFromArray(box, x, y) == 'd') 			process.stdout.write('CLEAN'); 
	//check 1 box neighbour
	else if (readFromArray(box, x+1, y) == 'd') 	process.stdout.write('DOWN');
	else if (readFromArray(box, x-1, y) == 'd') 	process.stdout.write('UP');
	else if (readFromArray(box, x, y+1) == 'd') 	process.stdout.write('RIGHT');
	else if (readFromArray(box, x, y-1) == 'd') 	process.stdout.write('LEFT');
	//check 2 box neighbour
	else if (readFromArray(box, x+2, y) == 'd') 	process.stdout.write('DOWN');
	else if (readFromArray(box, x+1, y+1) == 'd') 	process.stdout.write('DOWN');
	else if (readFromArray(box, x, y+2) == 'd') 	process.stdout.write('RIGHT');
	else if (readFromArray(box, x-1, y+1) == 'd') 	process.stdout.write('RIGHT');
	else if (readFromArray(box, x-2, y) == 'd') 	process.stdout.write('UP');
	else if (readFromArray(box, x-1, y-1) == 'd') 	process.stdout.write('UP');
	else if (readFromArray(box, x, y-2) == 'd') 	process.stdout.write('LEFT');
	else if (readFromArray(box, x+1, y-1) == 'd') 	process.stdout.write('LEFT');
	
	//check 3 box neighbour
	else if (readFromArray(box, x+3, y) == 'd') 	process.stdout.write('DOWN');
	else if (readFromArray(box, x+2, y+1) == 'd') 	process.stdout.write('DOWN');
	else if (readFromArray(box, x+1, y+2) == 'd') 	process.stdout.write('DOWN');
	else if (readFromArray(box, x, y+3) == 'd') 	process.stdout.write('RIGHT');
	else if (readFromArray(box, x-1, y+2) == 'd') 	process.stdout.write('RIGHT');
	else if (readFromArray(box, x-2, y+1) == 'd') 	process.stdout.write('RIGHT');
	else if (readFromArray(box, x-3, y) == 'd') 	process.stdout.write('UP');
	else if (readFromArray(box, x-2, y-1) == 'd') 	process.stdout.write('UP');
	else if (readFromArray(box, x-1, y-2) == 'd') 	process.stdout.write('UP');
	else if (readFromArray(box, x, y-3) == 'd') 	process.stdout.write('LEFT');
	else if (readFromArray(box, x+1, y-2) == 'd') 	process.stdout.write('LEFT');
	else if (readFromArray(box, x+2, y-1) == 'd') 	process.stdout.write('LEFT');
	
	else process.stdout.write('RIGHT');
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
//x = lines
//j = columns