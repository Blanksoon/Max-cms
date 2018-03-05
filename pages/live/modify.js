import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import LivesModify from '../../components/lives/LivesModify'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'

class Modify extends Component {
  render() {
    console.log(this.props.url.query.id)
    return (
      <FullPageLayout>
        <Main keyNavbar="Live">
          <LivesModify id={this.props.url.query.id} />
        </Main>
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, connectI18n(['common']))(Modify)
