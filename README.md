# Timed Quiz Challenge
## Description
Welcome to my [Timed Quiz Challenge](https://cl-lee.github.io/timed-quiz-challenge/) repo! This is a project for a maths quiz challenge.

The challenge features ten mathematical multiple-choice questions. This is a timed quiz; challengers has 90 seconds to attempt the quiz. Each incorrect answer will deduct 10 seconds from the remaining time. Challengers can record their remaining time at the end of the challenge as their score.

## Prerequisites
A web browser is required to access the application.

## Usage
The application can be accessed through the following URL: https://cl-lee.github.io/timed-quiz-challenge/ 
![The Quiz start page](./assets/landing-page.png)  

### Generate a password
- To generate the password, users can click on the "Generate Password" button 
![The "Generate Password" button](./assets/generate-password.png)

### Select password criteria
- The application will then present prompts to users to determine the password criteria. 

    #### 1. Password length
    Firstly, users will have to enter a numeric value to determine the password length. The password length can be between 10 to 64 characters.
    ![The password length prompt](./assets/password-length.png)
    - The application will notify the users if an invalid value is entered (anything besides a number from 10 to 64). Users can enter the password length again after confirming the alert.
    ![Alert! An invalid password length is entered](./assets/invalid-password-length.png)

    #### 2. Character types
    The application will then present a prompt for each of the four character types; each prompt will ask users if they would like to include the captioned character type. 
    ![Character type prompts](./assets/character-types.png)
    - The application will notify users if they chose not to include at least one character type. Users can then select which character type to include again after confirming the alert.
    ![Alert! No character type was selected](./assets/character-type-error.png)