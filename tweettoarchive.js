/*
  Tweet to Archive
  Version 0.0
*/

document.body.style.border = "5px solid red";
oldURL = window.location.href; // original URL of tweet
oldURL = oldURL.replace("x.com/", "twitter.com/"); // change x.com, to twitter.com. i guess this is suboptimal since more recent tweets SHOULD be x.com, but those'll be redirected so iiwiw.
newURL = "http://web.archive.org/web/00000000000000/" + oldURL; // archived URL. the zeroes represent the earliest possible date, so it returns the closest to this date i.e. the earliest available archive.
window.location.replace(newURL); // redirect to Archive.org 
