import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import LivesModify from '../../components/lives/LivesModify'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { requireAuth } from '../../hocs/requireAuth'
import { redirect } from '../../tools/utils'

class Modify extends Component {
  render() {
    //console.log(this.props.url.query.id)
    return (
      <FullPageLayout>
        <Main keyNavbar="Live">
          <LivesModify id={this.props.url.query.id} />
        </Main>
      </FullPageLayout>
    )
  }
}

Modify.getInitialProps = ({ res, isServer, store }) => {
  let state = store.getState()
  let email = state.auth.email
  if (email === 'maxnews@email.com') {
    redirect('/maxnews', { res, isServer })
  } else if (email === undefined) {
    redirect('/login', { res, isServer })
  } else {
  }
}

export default compose(withReduxSaga, requireAuth, connectI18n(['common']))(
  Modify
)
