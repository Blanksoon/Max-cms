import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Detail from '../../components/maxNews/Detail'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { fetchMaxnewsDucks } from '../../redux/ducks/news'
import MaxNewsModify from '../../components/maxNews/MaxNewsModify'
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
import { requireAuth } from '../../hocs/requireAuth'
import vars from '../../components/commons/vars'

class Modify extends Component {
  constructor(props) {
    super(props)
    this.createNews = this.createNews.bind(this)
  }

  createNews() {}
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