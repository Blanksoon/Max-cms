import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../hocs/connectI18n'
import FullPageLayout from '../layouts/FullPageLayout'
import LoginForm from '../components/login/LoginForm'
import { withReduxSaga } from '../redux/store'

const Login = ({ t }) => {
  return (
    <FullPageLayout>
      <LoginForm t={t} />
    </FullPageLayout>
  )
}
Login.propTypes = {
  t: PropTypes.func.isRequired,
}

export default compose(withReduxSaga, connectI18n(['common']))(Login)
