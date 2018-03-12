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

export default compose(withReduxSaga, requireAuth, connectI18n(['common']))(
  Modify
)
