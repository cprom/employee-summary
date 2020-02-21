const prompt = require('inquirer').createPromptModule()
const jest = require('jest')
const fs = require('fs')
const path = require('path')
const Employee = require('./lib/employee.js')
const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')

function promptUser() {

  prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Role of employee?',
      choices: ['Manager', 'Engineer', 'Intern']

    },
    {
      type: 'input',
      name: 'name',
      message: 'Employee name.'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Employee ID.'
    },

  ])

    .then(({ role, name, id }) => {
      console.log(role, name, id)
    })
    .catch(e => console.log(e))

}
promptUser()








