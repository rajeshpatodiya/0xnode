//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

module.exports = { Person }

//it attaches objects to those properties and methods and u will be able to get access to to those properties and methods 