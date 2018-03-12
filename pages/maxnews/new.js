import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Detail from '../../components/maxNews/Detail'
import MaxNewsInsertForm from '../../components/maxNews/MaxNewsInsert'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { Row, Col, Input, DatePicker, Upload, Icon, message } from 'antd'
import { requireAuth } from '../../hocs/requireAuth'

class New extends Component {
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="Maxnews">
          <MaxNewsInsertForm />
        </Main>
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, requireAuth, connectI18n(['common']))(New)
