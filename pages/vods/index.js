import { compose } from 'redux'
import PropTypes from 'prop-types'
import { connectI18n } from '../../hocs/connectI18n'
import FullPageLayout from '../../layouts/FullPageLayout'
import Main from '../../layouts/Main'
import { withReduxSaga } from '../../redux/store'
import { Component } from 'react'
import VodsData from '../../components/vods/VodsData'

class Index extends Component {
  constructor(props) {
    super(props)
    this.createNews = this.createNews.bind(this)
  }

  createNews() {}
  render() {
    return (
      <FullPageLayout>
        <Main keyNavbar="Vods">
          <VodsData />
        </Main>
      </FullPageLayout>
    )
  }
}

export default compose(withReduxSaga, connectI18n(['common']))(Index)
