/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var theClubrules = this;
var YoungsterDeadline = 23;
// Principle 2

// code example for Implicit Binding
var me = {
    club: 'Arsenal Football Club',
    speak: function () {
        return this.name;
    }
}
// Principle 3

// code example for New Binding
function Players(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  
  let striker = new Players('Lacazette', 'Striker', 28);
  let defender = new Players('Luiz', 'Defender', 32);
// Principle 4

// code example for Explicit Binding
function stats(name, age) {
    return name + ' your age is ' + age; 
  }
  
  stats.call('jolly', 'Femi', 25);
  stats.apply('jolly', ['Ife', 23]);
  var copyOfFunction = stats.bind('jolly');