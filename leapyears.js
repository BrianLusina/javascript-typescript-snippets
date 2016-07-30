/**
# Leap

Write a program that will take a year and report if it is a leap year.

The tricky thing here is that a leap year in the Gregorian calendar occurs:

```plain
on every year that is evenly divisible by 4
  except every year that is evenly divisible by 100
    unless the year is also evenly divisible by 400
```

For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
year, but 2000 is.

If your language provides a method in the standard library that does
this look-up, pretend it doesn't exist and implement it yourself.

## Notes

Though our exercise adopts some very simple rules, there is more to
learn!

For a delightful, four minute explanation of the whole leap year
phenomenon, go watch [this youtube video][video].

[video]: http://www.youtube.com/watch?v=xX96xng7sAE

## Setup

Go through the setup instructions for JavaScript to
install the necessary dependencies:

http://exercism.io/languages/javascript

## Making the Test Suite Pass

Execute the tests with:

    jasmine-node .

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.

## Source

JavaRanch Cattle Drive, exercise 3 [http://www.javaranch.com/leap.jsp](http://www.javaranch.com/leap.jsp)
*/
var Year = function(yr){this.yr=yr;}

Year.prototype.isLeap = function(){
	return !(this.yr % 100) && this.yr % 400 || this.yr % 4 ? false : true;
}

module.exports = Year;

function yearDays(year){
  return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
}