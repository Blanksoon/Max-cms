import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../hocs/connectI18n'
import FullPageLayout from '../layouts/FullPageLayout'
import Main from '../layouts/Main'
import { withReduxSaga } from '../redux/store'
import { Component } from 'react'
import { Row, Col, Input, DatePicker, Upload, Icon, message } from 'antd'
import { requireAuth } from '../hocs/requireAuth'
import PosterModify from '../components/poster/PosterModify'

class Poster extends Component {
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="poster">{<PosterModify />}</Main>
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, requireAuth, connectI18n(['common']))(
  Poster
)
