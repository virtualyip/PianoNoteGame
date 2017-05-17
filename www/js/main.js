
function noteSby(keyNo)
{	
	keyUp = 0;
	switch(keyNo)
	{
		case 0:
		return 'c';
		break;
		case 1:
		return 'd';
		break;
		case 2:
		return 'e';
		break;
		case 3:
		return 'f';
		break;
		case 4:
		return 'g';
		break;
		case 5:
		return 'a';
		break;
		case 6:
		return 'b';
		break;
		default:
		return 0;
	}
}
function noteNo(Sby)
{	
	switch(Sby)
	{
		case 'a':
		return 5;
		break;
		case 'b':
		return 6;
		break;
		case 'c':
		return 0;
		break;
		case 'd':
		return 1;
		break;
		case 'e':
		return 2;
		break;
		case 'f':
		return 3;
		break;
		case 'g':
		return 4;
		break;
		default:
		return -1;
	}
}
function keyNo(keychar)
{
	if(keychar == 'q') return 14;
	else if(keychar == 'w') return 15;
	else if(keychar == 'e') return 16;
	else if(keychar == 'r') return 17;
	else if(keychar == 't') return 18;
	else if(keychar == 'y') return 19;
	else if(keychar == 'u') return 20;
	else if(keychar == 'i') return 21;
	else if(keychar == 'o') return 22;
	else if(keychar == 'p') return 23;
	else if(keychar == '[') return 24;
	else if(keychar == 'a') return 7;
	else if(keychar == 's') return 8;
	else if(keychar == 'd') return 9;
	else if(keychar == 'f') return 10;
	else if(keychar == 'g') return 11;
	else if(keychar == 'h') return 12;
	else if(keychar == 'j') return 13;
	else if(keychar == 'k') return 14;
	else if(keychar == 'l') return 15;
	else if(keychar == 'z') return 0;
	else if(keychar == 'x') return 1;
	else if(keychar == 'c') return 2;
	else if(keychar == 'v') return 3;
	else if(keychar == 'b') return 4;
	else if(keychar == 'n') return 5;
	else if(keychar == 'm') return 6;
}
function soundMapper(keyNo)
{
	switch(keyNo)
	{
		case 1: return 'sounds/Low-C.mp3'; break;
		case 1.5: return 'sounds/Low-Csharp.mp3'; break;
		case 2: return 'sounds/Low-D.mp3'; break;
		case 2.5: return 'sounds/Low-Eflat.mp3'; break;
		case 3: return 'sounds/Low-E.mp3'; break;
		case 4: return 'sounds/Low-F.mp3'; break;
		case 4.5: return 'sounds/Low-Fsharp.mp3'; break;
		case 5: return 'sounds/Low-G.mp3'; break;
		case 5.5: return 'sounds/Low-Gsharp.mp3'; break;
		case 6: return 'sounds/Low-A.mp3'; break;
		case 6.5: return 'sounds/Low-Bflat.mp3'; break;
		case 7: return 'sounds/Low-B.mp3'; break;
		case 8: return 'sounds/Low-C.mp3'; break;
		case 8.5: return 'sounds/Low-Csharp.mp3'; break;
		case 9: return 'sounds/Low-D.mp3'; break;
		case 9.5: return 'sounds/Low-Eflat.mp3'; break;
		case 10: return 'sounds/Low-E.mp3'; break;
		case 11: return 'sounds/Low-F.mp3'; break;
		case 11.5: return 'sounds/Low-Fsharp.mp3'; break;
		case 12: return 'sounds/Low-G.mp3'; break;
		case 12.5: return 'sounds/Low-Gsharp.mp3'; break;
		case 13: return 'sounds/Low-A.mp3'; break;
		case 13.5: return 'sounds/Low-Bflat.mp3'; break;
		case 14: return 'sounds/Low-B.mp3'; break;
		case 15: return 'sounds/Middle-C.mp3'; break;
		case 15.5: return 'sounds/Middle-Csharp.mp3'; break;
		case 16: return 'sounds/Middle-D.mp3'; break;
		case 16.5: return 'sounds/Middle-Eflat.mp3'; break;
		case 17: return 'sounds/Middle-E.mp3'; break;
		case 18: return 'sounds/Middle-F.mp3'; break;
		case 18.5: return 'sounds/Middle-Fsharp.mp3'; break;
		case 19: return 'sounds/Middle-G.mp3'; break;
		case 19.5: return 'sounds/Middle-Gsharp.mp3'; break;
		case 20: return 'sounds/Middle-A.mp3'; break;
		case 20.5: return 'sounds/Middle-Bflat.mp3'; break;
		case 21: return 'sounds/Middle-B.mp3'; break;
		case 22: return 'sounds/High-C.mp3'; break;
		case 22.5: return 'sounds/High-Csharp.mp3'; break;
		case 23: return 'sounds/High-D.mp3'; break;
		case 23.5: return 'sounds/High-Eflat.mp3'; break;
		case 24: return 'sounds/High-E.mp3'; break;
		case 25: return 'sounds/High-F.mp3'; break;
		case 25.5: return 'sounds/High-Fsharp.mp3'; break;
		case 26: return 'sounds/High-G.mp3'; break;
		case 26.5: return 'sounds/High-Gsharp.mp3'; break;
		case 27: return 'sounds/High-A.mp3'; break;
		case 27.5: return 'sounds/High-Bflat.mp3'; break;
		case 28: return 'sounds/High-B.mp3'; break;
		default: return 0;
	}
}
function wKeyMouseOut(key){
	if(key.className == "whiteKey")
		key.src = whiteKeyImg;
}
function bKeyOnClick(keyNumber){
	//key.src = blackKeyPressImg;

	if(keyNumber >= getNoteLowerRange() && keyNumber <= getNoteUpperRange())
	{
		if(keyNumber <= 28) EvalSound(keyNumber);
		document.getElementById("bk"+keyNumber).src = blackKeyPressImg;
		if(keyNumber == note[counter])
		{
			document.getElementById("note"+counter).style.visibility = "hidden";
			document.getElementById("correct").innerHTML = ++v_correct;
			document.getElementById("combo").innerHTML = ++v_combo;
			v_score = parseInt(v_score+(getNoteUpperRange()-getNoteLowerRange())*v_combo);
			document.getElementById("score").innerHTML = v_score;
			counter++;
			if(counter >= maxCount)
			{
				gameOver();
				if(document.getElementById("autoRefresh").checked) newGame();
			}
		}
		else
		{
			document.getElementById("wrong").innerHTML = ++v_wrong;
			v_score = parseInt(v_score-2);
			document.getElementById("score").innerHTML = v_score;
			resetCombo();
		}
	}
}
function bKeyMouseOut(key){
	key.src = blackKeyImg;
}

function EvalSound(soundObj)
{
	console.log(soundObj,soundMapper(soundObj+1));
	var audio = new Audio(soundMapper(soundObj+1));
	audio.play();
	//var thissound = eval("document."+soundObj);
	//thissound.Play();
}