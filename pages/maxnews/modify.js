import { compose } from 'redux'
import { connect } from 'react-redux'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import MaxNewsModify from '../../components/maxNews/MaxNewsModify'
import { requireAuth } from '../../hocs/requireAuth'

class Modify extends Component {
  render() {
    const { auth } = this.props
    return (
      <FullPageLayout>
        <Main keyNavbar="Maxnews" email={auth.email}>
          <MaxNewsModify id={this.props.url.query.id} />
        </Main>
      </FullPageLayout>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default compose(
  withReduxSaga,
  requireAuth,
  connectI18n(['common']),
  connect(mapStateToProps, null)
)(Modify)
