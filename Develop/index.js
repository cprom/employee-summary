
const prompt = require('inquirer').createPromptModule()
const fs = require('fs')

prompt([
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is your employee ID?'
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is your role at the company?',
    choices: ['Manager', 'Engineer', 'Intern'],
    default: 'Engineer'
  }
])

  .then(({ email, id, role, gitHub, school }) => {
    if (role === 'Engineer') {
      prompt({
        type: 'input',
        name: 'gitHub',
        message: 'PLease enter your GitHub username.'

      })
    } else {
      prompt({
        type: 'input',
        name: 'school',
        message: 'Please enter the name of the school you are attending.'

      })

    }


  })

  .catch(e => console.log(e))


