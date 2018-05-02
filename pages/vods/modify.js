import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Detail from '../../components/maxNews/Detail'
import VodsModify from '../../components/vods/VodsModify'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { Row, Col, Input, DatePicker, Upload, Icon, message } from 'antd'
import { requireAuth } from '../../hocs/requireAuth'
import { redirect } from '../../tools/utils'

class Modify extends Component {
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="Vods">
          <VodsModify id={this.props.url.query.id} />
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
