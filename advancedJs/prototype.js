//The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

module.exports = { Person }