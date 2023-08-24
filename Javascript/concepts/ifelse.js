// **Scenario 1: Age Classifier**
// Ask the user to enter their age using `prompt`. Based on the age, display the appropriate category: "Child" (0-12 years), "Teenager" (13-19 years), "Young Adult" (20-29 years), or "Adult" (30+ years).

// **Scenario 2: Ordering Coffee**
// Create a simple coffee shop order system. Ask the user to enter their choice of coffee size ("small," "medium," "large") using `prompt`. Display the price based on the chosen size, and if the size is not recognized, show an error message.

// **Scenario 3: GPA Calculator**
// Ask the user to enter their GPA (Grade Point Average) using `prompt`. Determine their academic standing: "Excellent" (GPA > 3.5), "Good" (3.0 <= GPA <= 3.5), or "Needs Improvement" (GPA < 3.0).

// **Scenario 4: Grade Calculator**
// Ask the user to enter their scores for three subjects (math, science, history) using `prompt`. Calculate the average score and determine the letter grade: "A" (average >= 90), "B" (80 <= average < 90), "C" (70 <= average < 80), "D" (60 <= average < 70), or "F" (average < 60).

// **Scenario 5: Number Range Detector**
// Ask the user to enter a number using `prompt`.
//  Determine whether the number is positive, negative, or zero.
//  If the number is positive, also check if
//  it's even or odd and display the appropriate message.

// **Scenario 6: Shopping Discount**
// Create a shopping discount calculator. Ask the user to enter the total purchase
// amount using `prompt`. Apply a discount of 10% if the purchase amount is
// greater than $100. Display the discounted amount and the final price.

// **Scenario 7: BMI Calculator**
// Ask the user to enter their weight (in kilograms) and height (in meters) using `prompt`.
// Calculate the Body Mass Index (BMI) using the formula: BMI = weight / (height * height).
//  Display their BMI and categorize it as "Underweight," "Normal," "Overweight," or "Obese."

// **Scenario 8: Password Strength Checker**
// Ask the user to enter a password using `prompt`.
// Check the password strength based on the following criteria: "Weak" (length <= 6),
//  "Medium" (6 < length <= 10), or "Strong" (length > 10).

// **Scenario 9: Quadratic Equation Solver**
// Ask the user to enter the coefficients (a, b, c) of a
// quadratic equation (ax^2 + bx + c = 0) using `prompt`.
// Calculate and display the roots of the equation. Handle cases where
// the equation has real or complex roots.

// **Scenario 10: Voting Eligibility Checker**
// Ask the user to enter their age using `prompt`.
// Check if they are eligible to vote based on the age and citizenship status.
// Display appropriate messages for "Eligible to Vote" or "Not Eligible to Vote."

// Question 1
// let userAge = prompt("What is user's age??")
// console.log(userAge)
// if (userAge < 18) {
//   alert('You are minor')
// } else {
//   alert('You are adult')
// }

// if (userAge >= 18) {
//     alert('You are adult')
//   } else {
//     alert('You are minor')
//   }

// Question 3

// let height = prompt('Height')
// let width = prompt('Width')
// let area = height * width

// alert('Area of Rectangle is ' + area)

// Question 5
// let userage = prompt('Users age')
// let experience = prompt('Users experience')

// if (userage >= 13 && userage <= 19) {
//   alert('You are teenager')
// } else {
//   alert('You are not teenager')
// }

//or

// if (userage >= 20 || experience >= 2) {
//   alert('Your job is done')
// } else {
//   alert('Sorry we cant give you job.')
// }

// let userPecentage = +prompt('Your percentage')
// if (userPecentage > 90 && userPecentage <= 100) {
//   document.write('Your Grade is A++')
// } else if (userPecentage > 80 && userPecentage <= 90) {
//   document.write('Your Grade is A')
// } else if (userPecentage >= 70 && userPecentage <= 80) {
//   document.write('Your Grade is B')
// } else {
//   document.write('You are fail')
// }

// Question 12
// let price = prompt('Price')
// let discount = prompt('discount')

// let discountAmount = (price * discount) / 100
// let diccountedPrice = price - discountAmount
// console.log(discountAmount)

// document.write('Price after discount is ' + diccountedPrice )

// Split
// to convert string into array we use split method

