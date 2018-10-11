var ageUser = 30;
var voteStatusYes = "You can vote";
var voteStatusNo = "You cannot vote";
var presidentStatusYes = "you can be the President";

if (ageUser >= 18) {
	if(ageUser >= 21) {
		console.log (voteStatusYes + " AND " + presidentStatusYes);
	}
	else{
		console.log(voteStatusYes);
	}
}
else {
	console.log(voteStatusNo);
}