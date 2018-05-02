import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Detail from '../../components/maxNews/Detail'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { fetchMaxnewsDucks } from '../../redux/ducks/news'
import LivesData from '../../components/lives/LivesData'
import { requireAuth } from '../../hocs/requireAuth'
import {
  Row,
  Col,
  Input,
  DatePicker,
  Upload,
  Icon,
  message,
  Breadcrumb,
  Button,
} from 'antd'

import vars from '../../components/commons/vars'
import { redirect } from '../../tools/utils'

class Index extends Component {
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="Lives">
          <LivesData />
        </Main>
      </FullPageLayout>
    )
  }
}

Index.getInitialProps = ({ res, isServer, store }) => {
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
  Index
)
