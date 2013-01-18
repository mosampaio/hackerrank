process.stdin.resume();
process.stdin.setEncoding("ascii");

process.stdin.on("data", function (input) {
    defineAlgorithm(input).move();
});

function isMove(player, input, number) {
    return input.split(player).length - 1 == number;
}

function defineAlgorithm(input) {
	return 'X' == input.substring(0,1) ? new XAlgorithm(input) : new OAlgorithm(input);
}

function OAlgorithm(input) {
	this.input = input;
	
	this.move = function() {
		if (isMove('O', input, 1)) {
			if (/O\n_..\n.X.\n.../.test(input))    		process.stdout.write('0 0');
			else										process.stdout.write('1 1');
		} else {
			//try to win
			//001122
			if (/O\n_..\n.O.\n..O/.test(input))    		process.stdout.write('0 0');
			else if (/O\nO..\n._.\n..O/.test(input))    process.stdout.write('1 1');
			else if (/O\nO..\n.O.\n.._/.test(input))    process.stdout.write('2 2');
			//021120
			else if (/O\n.._\n.O.\nO../.test(input))    process.stdout.write('0 2');
			else if (/O\n..O\n._.\nO../.test(input))    process.stdout.write('1 1');
			else if (/O\n..O\n.O.\n_../.test(input))    process.stdout.write('2 0');
			//011121
			else if (/O\n._.\n.O.\n.O./.test(input))    process.stdout.write('0 1');
			else if (/O\n.O.\n._.\n.O./.test(input))    process.stdout.write('1 1');
			else if (/O\n.O.\n.O.\n._./.test(input))    process.stdout.write('2 1');
			//101112
			else if (/O\n...\n_OO\n.../.test(input))    process.stdout.write('1 0');
			else if (/O\n...\nO_O\n.../.test(input))    process.stdout.write('1 1');
			else if (/O\n...\nOO_\n.../.test(input))    process.stdout.write('1 2');
			//000102
			else if (/O\n_OO\n...\n.../.test(input))    process.stdout.write('0 0');
			else if (/O\nO_O\n...\n.../.test(input))    process.stdout.write('0 1');
			else if (/O\nOO_\n...\n.../.test(input))    process.stdout.write('0 2');
			//202122
			else if (/O\n...\n...\n_OO/.test(input))    process.stdout.write('2 0');
			else if (/O\n...\n...\nO_O/.test(input))    process.stdout.write('2 1');
			else if (/O\n...\n...\nOO_/.test(input))    process.stdout.write('2 2');
			//001020
			else if (/O\n_..\nO..\nO../.test(input))    process.stdout.write('0 0');
			else if (/O\nO..\n_..\nO../.test(input))    process.stdout.write('1 0');
			else if (/O\nO..\nO..\n_../.test(input))    process.stdout.write('2 0');
			//021222
			else if (/O\n.._\n..O\n..O/.test(input))    process.stdout.write('0 2');
			else if (/O\n..O\n.._\n..O/.test(input))    process.stdout.write('1 2');
			else if (/O\n..O\n..O\n.._/.test(input))    process.stdout.write('2 2');
			
			//avoid lose
			//001122
			else if (/O\n_..\n.X.\n..X/.test(input))    process.stdout.write('0 0');
			else if (/O\nX..\n._.\n..X/.test(input))    process.stdout.write('1 1');
			else if (/O\nX..\n.X.\n.._/.test(input))    process.stdout.write('2 2');
			//021120
			else if (/O\n.._\n.X.\nX../.test(input))    process.stdout.write('0 2');
			else if (/O\n..X\n._.\nX../.test(input))    process.stdout.write('1 1');
			else if (/O\n..X\n.X.\n_../.test(input))    process.stdout.write('2 0');
			//011121
			else if (/O\n._.\n.X.\n.X./.test(input))    process.stdout.write('0 1');
			else if (/O\n.X.\n._.\n.X./.test(input))    process.stdout.write('1 1');
			else if (/O\n.X.\n.X.\n._./.test(input))    process.stdout.write('2 1');
			//101112
			else if (/O\n...\n_XX\n.../.test(input))    process.stdout.write('1 0');
			else if (/O\n...\nX_X\n.../.test(input))    process.stdout.write('1 1');
			else if (/O\n...\nXX_\n.../.test(input))    process.stdout.write('1 2');
			//000102
			else if (/O\n_XX\n...\n.../.test(input))    process.stdout.write('0 0');
			else if (/O\nX_X\n...\n.../.test(input))    process.stdout.write('0 1');
			else if (/O\nXX_\n...\n.../.test(input))    process.stdout.write('0 2');
			//202122
			else if (/O\n...\n...\n_XX/.test(input))    process.stdout.write('2 0');
			else if (/O\n...\n...\nX_X/.test(input))    process.stdout.write('2 1');
			else if (/O\n...\n...\nXX_/.test(input))    process.stdout.write('2 2');
			//001020
			else if (/O\n_..\nX..\nX../.test(input))    process.stdout.write('0 0');
			else if (/O\nX..\n_..\nX../.test(input))    process.stdout.write('1 0');
			else if (/O\nX..\nX..\n_../.test(input))    process.stdout.write('2 0');
			//021222
			else if (/O\n.._\n..X\n..X/.test(input))    process.stdout.write('0 2');
			else if (/O\n..X\n.._\n..X/.test(input))    process.stdout.write('1 2');
			else if (/O\n..X\n..X\n.._/.test(input))    process.stdout.write('2 2');
			
			//try to defend the 'X corner' algorithm
			else if (/O\nX__\n_O_\n__X/.test(input)) 	process.stdout.write('0 1');
			else if (/O\n__X\n_O_\nX__/.test(input)) 	process.stdout.write('0 1');
			else if (/O\nX__\n_O_\n__X/.test(input)) 	process.stdout.write('0 1');
			else if (/O\nX__\n_O_\n__X/.test(input)) 	process.stdout.write('0 1');
			
			//try to mark the opposite corner
			else if (/O\nO..\n.O.\n.._/.test(input))	process.stdout.write('2 2');
			else if (/O\n..O\n.O.\n_../.test(input))	process.stdout.write('2 0');
			else if (/O\n.._\n.O.\nO../.test(input))	process.stdout.write('0 2');
			else if (/O\n_..\n.O.\n..O/.test(input))	process.stdout.write('0 0');
            
            //try to mark any Corner
    		else if (/O\n_..\n...\n.../.test(input))	process.stdout.write('0 0');
			else if (/O\n.._\n...\n.../.test(input))	process.stdout.write('0 2');
			else if (/O\n...\n...\n_../.test(input))	process.stdout.write('2 0');
			else if (/O\n...\n...\n_../.test(input))    process.stdout.write('2 2');
			
			else new RandomAlgorithm(input).move();
		}
		
	}
}
function XAlgorithm(input) {
	this.input = input;
	
	this.move = function() {
		if (isMove('X', input, 1)) {
			var random = Math.floor(Math.random()*5);
				 if (random==4)	process.stdout.write('0 0'); 
			else if (random==3)	process.stdout.write('0 2');
			else if (random==2)	process.stdout.write('2 0');
			else if (random==1)	process.stdout.write('2 2');
			else 				process.stdout.write('1 1'); 
		} else if (isMove('X', input, 2)){
			// Mark the Opposite Corner when X is Center
				 if (/X\nO..\n.X.\n.._/.test(input))    process.stdout.write('2 2');
			else if (/X\n..O\n.X.\n_../.test(input))	process.stdout.write('2 0');
			else if (/X\n.._\n.X.\nO../.test(input))	process.stdout.write('0 2');
			else if (/X\n_..\n.X.\n..O/.test(input))	process.stdout.write('0 0');
			
			// Mark the Opposite Corner when O is Center
			else if (/X\nX..\n.O.\n.._/.test(input))    process.stdout.write('2 2');
			else if (/X\n..X\n.O.\n_../.test(input))	process.stdout.write('2 0');
			else if (/X\n.._\n.O.\nX../.test(input))	process.stdout.write('0 2');
			else if (/X\n_..\n.O.\n..X/.test(input))	process.stdout.write('0 0');
			
			// Mark the Center if it's blank
			else if (/X\n...\n._.\n.../.test(input))	process.stdout.write('1 1');
			
			// Mark any Corner
			else if (/X\n_..\n...\n.../.test(input))	process.stdout.write('0 0');
			else if (/X\n.._\n...\n.../.test(input))	process.stdout.write('0 2');
			else if (/X\n...\n...\n_../.test(input))	process.stdout.write('2 0');
			else 										process.stdout.write('2 2');
		} else {
			//try to win
			//001122
				 if (/X\n_..\n.X.\n..X/.test(input))    process.stdout.write('0 0');
			else if (/X\nX..\n._.\n..X/.test(input))    process.stdout.write('1 1');
			else if (/X\nX..\n.X.\n.._/.test(input))    process.stdout.write('2 2');
			//021120
			else if (/X\n.._\n.X.\nX../.test(input))    process.stdout.write('0 2');
			else if (/X\n..X\n._.\nX../.test(input))    process.stdout.write('1 1');
			else if (/X\n..X\n.X.\n_../.test(input))    process.stdout.write('2 0');
			//011121
			else if (/X\n._.\n.X.\n.X./.test(input))    process.stdout.write('0 1');
			else if (/X\n.X.\n._.\n.X./.test(input))    process.stdout.write('1 1');
			else if (/X\n.X.\n.X.\n._./.test(input))    process.stdout.write('2 1');
			//101112
			else if (/X\n...\n_XX\n.../.test(input))    process.stdout.write('1 0');
			else if (/X\n...\nX_X\n.../.test(input))    process.stdout.write('1 1');
			else if (/X\n...\nXX_\n.../.test(input))    process.stdout.write('1 2');
			//000102
			else if (/X\n_XX\n...\n.../.test(input))    process.stdout.write('0 0');
			else if (/X\nX_X\n...\n.../.test(input))    process.stdout.write('0 1');
			else if (/X\nXX_\n...\n.../.test(input))    process.stdout.write('0 2');
			//202122
			else if (/X\n...\n...\n_XX/.test(input))    process.stdout.write('2 0');
			else if (/X\n...\n...\nX_X/.test(input))    process.stdout.write('2 1');
			else if (/X\n...\n...\nXX_/.test(input))    process.stdout.write('2 2');
			//001020
			else if (/X\n_..\nX..\nX../.test(input))    process.stdout.write('0 0');
			else if (/X\nX..\n_..\nX../.test(input))    process.stdout.write('1 0');
			else if (/X\nX..\nX..\n_../.test(input))    process.stdout.write('2 0');
			//021222
			else if (/X\n.._\n..X\n..X/.test(input))    process.stdout.write('0 2');
			else if (/X\n..X\n.._\n..X/.test(input))    process.stdout.write('1 2');
			else if (/X\n..X\n..X\n.._/.test(input))    process.stdout.write('2 2');
			
			//avoid lose
			//001122
			else if (/X\n_..\n.O.\n..O/.test(input))    process.stdout.write('0 0');
			else if (/X\nO..\n._.\n..O/.test(input))    process.stdout.write('1 1');
			else if (/X\nO..\n.O.\n.._/.test(input))    process.stdout.write('2 2');
			//021120
			else if (/X\n.._\n.O.\nO../.test(input))    process.stdout.write('0 2');
			else if (/X\n..O\n._.\nO../.test(input))    process.stdout.write('1 1');
			else if (/X\n..O\n.O.\n_../.test(input))    process.stdout.write('2 0');
			//011121
			else if (/X\n._.\n.O.\n.O./.test(input))    process.stdout.write('0 1');
			else if (/X\n.O.\n._.\n.O./.test(input))    process.stdout.write('1 1');
			else if (/X\n.O.\n.O.\n._./.test(input))    process.stdout.write('2 1');
			//101112
			else if (/X\n...\n_OO\n.../.test(input))    process.stdout.write('1 0');
			else if (/X\n...\nO_O\n.../.test(input))    process.stdout.write('1 1');
			else if (/X\n...\nOO_\n.../.test(input))    process.stdout.write('1 2');
			//000102
			else if (/X\n_OO\n...\n.../.test(input))    process.stdout.write('0 0');
			else if (/X\nO_O\n...\n.../.test(input))    process.stdout.write('0 1');
			else if (/X\nOO_\n...\n.../.test(input))    process.stdout.write('0 2');
			//202122
			else if (/X\n...\n...\n_OO/.test(input))    process.stdout.write('2 0');
			else if (/X\n...\n...\nO_O/.test(input))    process.stdout.write('2 1');
			else if (/X\n...\n...\nOO_/.test(input))    process.stdout.write('2 2');
			//001020
			else if (/X\n_..\nO..\nO../.test(input))    process.stdout.write('0 0');
			else if (/X\nO..\n_..\nO../.test(input))    process.stdout.write('1 0');
			else if (/X\nO..\nO..\n_../.test(input))    process.stdout.write('2 0');
			//021222
			else if (/X\n.._\n..O\n..O/.test(input))    process.stdout.write('0 2');
			else if (/X\n..O\n.._\n..O/.test(input))    process.stdout.write('1 2');
			else if (/X\n..O\n..O\n.._/.test(input))    process.stdout.write('2 2');
			
			//try to mark the opposite corner
			else if (/X\nO..\n.X.\n.._/.test(input))    process.stdout.write('2 2');
			else if (/X\n..O\n.X.\n_../.test(input))	process.stdout.write('2 0');
			else if (/X\n.._\n.X.\nO../.test(input))	process.stdout.write('0 2');
			else if (/X\n_..\n.X.\n..O/.test(input))	process.stdout.write('0 0');
			
			else new RandomAlgorithm(input).move();
		}
	}
}

function RandomAlgorithm(input) {
	this.input = input;
	
	this.move = function() {
		var map = randomBlank(toArray(input));
		process.stdout.write(map.i + ' ' + map.j);
	}
		
	function toArray(input) {
		var splitted = input.split('\n');
		var a = new Array();
		for (i=0;i<=2;i++) {
			a[i] = new Array();
			for (j=0;j<=2;j++) {
				a[i][j] = splitted[i+1].charAt(j);
			}
		}
		return a;
	}

	function randomBlank(array) {
		var blankArray = [];
		for (i=0;i<=2;i++) {
			for (j=0;j<=2;j++) {
				if (array[i][j] == '_') {
					blankArray.push({ i:i, j:j });
				}
			}
		}
		
		var randomNumber = Math.floor(Math.random()*blankArray.length);
		return blankArray[randomNumber];
	}
	
}
