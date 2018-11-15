// rpg-LoveatFirstsight.js


// core variables
var messages = []; // for a sequence of messages
var answer = null;
var options = [];
var targets = [];
var data = [];
// story function variables
var spin = 0;

function checkAnswers(answer) {  // Matches Scenes  - replace with yours
	if (answer == "Talk to her") {
		youarebeautiful();
	}
	else if (answer == "keep walking") {
		Playvideogames();
	}
	else if (answer == "Talk with your parents") {
		Talkwithyourparents();
	}
}

function LoveatFirstsight() {
	story("You are rich and you have everything you want. Your dad works at the government (though he never said what part of government). Your mom is a teacher at your school. You feel safe and taken care of.\ \nOne day you are walking in the town and see a beautiful girl walking by. You want to talk to her but you are shy person.")
	options = ["Talk to her","keep walking","Talk with your parents"];
	answer = setOptions(options);
}

function Playvideogames() {
	story("You keep walking.  You go into a town and you enter a video game arcade. There is a competition going on at your favorite game, which requires two players on each team. You have no one to play with in the same team, so you ask in a loud voice if anyone wants to be your partner. A girl’s voice says, “Sure!” and you look and see that same girl that you saw in the town.");
	options = ["Let her be in your team","don’t let her be in your team,","Go join a new team that you"];
	answer = setOptions(options);
}

function Talkwithyourparents() {
	story("You have asked your parents if you should talk to her or not,  because you don’t have enough experience with life, and don’t know how to approach someone you don’t know. / /nYour father says “ Yes, that’s my son. You should talk to her and be have fun” But your mother says “No, you should be careful. Ask your friends about her, and you should be just friend with her don’t be close to her so fast");
	options = [" Go after your dad"," Go after your mom",""];
	answer = setOptions(options);
}

function youarebeautiful(){  // FIRST SCENE - WELCOMES PLAYER
	story("You going to talk to her. She smiling to your face and she says Hi beautiful, in that point you shocket because that’s your first time someone tell you beautiful. So now you having a beautiful conversation with her");
	data = ["Tell her that you like her"," Ask her for a date","Tell her we should be just a friends"];
	answer = setOptions(options);
}
