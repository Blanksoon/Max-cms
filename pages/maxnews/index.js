import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import { requireAuth } from '../../hocs/requireAuth'
import FullPageLayout from '../../layouts/FullPageLayout'
import Detail from '../../components/maxNews/Detail'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import { fetchMaxnewsDucks } from '../../redux/ducks/news'
import MaxNewsData from '../../components/maxNews/MaxNewsData'
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

class Index extends Component {
  render() {
    //console.log('this.props: ', this.props)
    const { auth } = this.props
    return (
      <FullPageLayout>
        <Main keyNavbar="Maxnews" email={auth.email}>
          <MaxNewsData />
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
)(Index)
