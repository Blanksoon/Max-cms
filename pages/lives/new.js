import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import LivesInsert from '../../components/lives/LivesInsert'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { requireAuth } from '../../hocs/requireAuth'
import { redirect } from '../../tools/utils'

class New extends Component {
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="Live">
          <LivesInsert />
        </Main>
      </FullPageLayout>
    )
  }
}

New.getInitialProps = ({ res, isServer, store }) => {
  let state = store.getState()
  let email = state.auth.email
  if (email === 'maxnews@email.com') {
    redirect('/maxnews', { res, isServer })
  } else if (email === undefined) {
    redirect('/login', { res, isServer })
  } else {
  }
}
export default compose(withReduxSaga, requireAuth, connectI18n(['common']))(New)
