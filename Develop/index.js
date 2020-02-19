
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
    choices: ['Engineer', 'Intern']
  }

])
  .then(({ email, id, role }) => {
    console.log(email, id, role)
  })

  .catch(e => console.log(e))
