var i = 0;
var filmName = ""

for (i = 0; i < 10; i++) { 
    filmName = filmName + ($("h3 > a")[i]).text + " ";
}