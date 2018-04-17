import { compose } from 'redux'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import MaxNewsModify from '../../components/maxNews/MaxNewsModify'
import { requireAuth } from '../../hocs/requireAuth'

class Modify extends Component {
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="Maxnews">
          <MaxNewsModify id={this.props.url.query.id} />
        </Main>
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, requireAuth, connectI18n(['common']))(
  Modify
)
