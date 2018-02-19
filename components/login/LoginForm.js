import { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, Form, Icon, Input, Button } from 'antd'
import { login } from '../../redux/ducks/auth'

const FormItem = Form.Item

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.props)
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
        const { email, password } = values
        this.props.login({ email, password })
        
        console.log(this.props.login({ email, password }))
      }
    })
  }
  render() {
    const { t, loading, errorMessage } = this.props
    const { getFieldDecorator, getFieldError } = this.props.form
    const passwordError = getFieldError('password') || errorMessage
    return (
      <div style={{ margin: 'auto' /* center div inside parent */ }}>
        <Card style={{ width: '19rem' }}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: t('The input is not valid E-mail!'),
                  },
                  { required: true, message: t('Please input your email!') },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder={t('Email')}
                  disabled={loading}
                />
              )}
            </FormItem>
            <FormItem
              validateStatus={passwordError ? 'error' : ''}
              help={getFieldError('password') || errorMessage}
            >
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: t('Please input your password!') },
                ],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder={t('Password')}
                  disabled={loading}
                />
              )}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
                loading={loading}
              >
                {loading ? '' : t('Log in')}
              </Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
LoginForm.propTypes = {
  t: PropTypes.func.isRequired,
  form: PropTypes.shape({
    validateFields: PropTypes.func.isRequired,
    getFieldDecorator: PropTypes.func.isRequired,
    getFieldError: PropTypes.func.isRequired,
    getFieldsError: PropTypes.func.isRequired,
  }).isRequired,
  // action creators
  login: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
}
LoginForm.defaultProps = {
  loading: false,
  errorMessage: '',
}
const mapStateToProps = state => ({
  loading: state.auth.loading,
  errorMessage: state.auth.error.message,
})
const WrappedLoginForm = Form.create()(
  connect(mapStateToProps, { login })(LoginForm)
)
export default WrappedLoginForm
