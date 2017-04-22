# ModernJS Mastery Exercise
## Setup

* Clone this repo to your machine
* Make a 'challenge' branch


Install and load:
* jquery
* bootstrap
* grunt stuff

## Overall Requirements
* Your project should have 0 grunt errors
* Your project should make use of ES6 (let, const, fat arrows) - I should not see a "var" or a "function" in your code
* Your project should use promises for ALL ajax calls

## On Page load
* There should be a bootstrap navbar
	* Should have marvel logo for brand
	* Should be a button for each team in the teams.json file (go ahead and hard code these for now - if you have extra time see if you can add them dynamically)
* There should be a large Marvel logo

## On click of a button in the navbar
* Note: $(this) does not work well with es6 syntax. use this work around:
```
  $("#my-button").click((event) => {
    console.log($(event.currentTarget));
  });
```
* The large Marvel logo should go away (use a jQuery method for this)
* The click event should call a function called dataGetter that has a Promise.all
* The Promise.all should resolve 3 functions that get the data from the json files
* dataGetter should pass a SINGLE array to the writeDom function
* The writeDom function should write everything to the DOM

## Data requirements
* You can't change ANY of the JSON files
* If there is no description for a character (ie description is "") your code should change the description as follows:
	* A female character with no description should get a description of "abcde fghij klmno pqrst uvwxy z"
	* A male character with no description should get a description of "1234567890"

## Style requirements
* Each character should be displayed in a bootstrap panel
* Each character's image should be a circle and have a border color of:
	* Blue if the character is Male
	* Pink if the character is Female
* There should be 4 panels in each row
* Each row should have a bootstrap row class


## Challenges
* Dynamically add the team button in the navbar
* Styling:  The Marvel Hex colors are:
	* Red = #e23636	
	* Black = #000000	
	* Gray = #504a4a	
	* Blue = #518cca	
	* Orange = #f78f3f

