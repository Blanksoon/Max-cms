import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import LivesInsert from '../../components/lives/LivesInsert'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'

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

export default compose(withReduxSaga, connectI18n(['common']))(New)
