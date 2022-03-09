var time = ["1 year","5 years","10 years","15 years"];
var idk = ["married","divorced","widowed","single"];
var pet = ["dog","gold fish","llama","donkey"];
var petname = ["Perry","Mochi","Pumpkin","Snorlax"];

var xx = Math.floor(Math.random() * 4 )

function fortune(time,idk,pet,petname){
document.write("In " + time + " you will be a" + idk + ", with a pet " + pet + " named " + petname + ".");
}

fortune (time[xx],idk[xx],pet[xx],petname[xx])