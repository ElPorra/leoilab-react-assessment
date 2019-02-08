const validators = {
  email: {
    presence: {
      message: '^Please enter an email address'
    },
    email: {
      message: '^Please enter a valid email address'
    }
  },
  password: {
    presence: {
      message: '^Please enter a password'
    }
  }
}

export default validators