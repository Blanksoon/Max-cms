import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../hocs/connectI18n'
import FullPageLayout from '../layouts/FullPageLayout'
import LoginForm from '../components/login/LoginForm'
import { withReduxSaga } from '../redux/store'
import vars from '../components/commons/vars'
import { redirect } from '../tools/utils'

const Login = ({ t }) => {
  return (
    <FullPageLayout>
      <div
        className="loginBlock"
        style={{
          margin: 'auto',
          marginTop: '10rem',
        }}
      >
        <LoginForm t={t} />
      </div>
    </FullPageLayout>
  )
}
Login.propTypes = {
  t: PropTypes.func.isRequired,
}
Login.getInitialProps = ({ store, res, isServer }) => {
  const { auth } = store.getState()
  // User is already login, redirect to home page
  if (typeof auth.token !== 'undefined') {
    redirect('/maxnews', { res, isServer })
  }
}

export default compose(withReduxSaga, connectI18n(['common']))(Login)
