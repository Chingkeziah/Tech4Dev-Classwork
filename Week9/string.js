// an exampple of a string
var name = "keziah ching";
// checking the length of the characters in the string(note that it counts plus spaces)
// if we were counting in programing note that the first digit is 0
name.length
// wrote a prompt for character limit like what twitter and linkedin have
// created two variables. one for the message and one which shows the length of the characters in the message
// added an alert that limits the characters to 100 so that when the characters exceed a hundred it shows a negative
var msg = prompt("enter your message")
var msgCount = msg.length
alert("your message characters are " + msgCount + "characters, you have" + (100 - msgCount) + " characters left.")

// string properties
name.slice(0, 100)
// slice helps us achieve what we did ahead as well
// 0 starts from no character and every other character after 100 gets sliced
// (1, 100) will slice the first character and any other character/s after 100