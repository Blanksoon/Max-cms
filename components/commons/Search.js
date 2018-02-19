import { Form, Input } from 'antd';
import { Component } from 'react'
import { connect } from 'react-redux';
import { searchData } from '../../redux/ducks/search'
import PropTypes from 'prop-types'

const InputSearch = Input.Search;

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    const data  = e
    const dataSearch = this.props.searchData({ data })
  }
  componentDidMount() {
    const data = "test"
    this.props.searchData({data})
  }
  render() {
    console.log('error',this.props.errorMessage)
    const { errorMessage } = this.props
    return (
      <div>
        <InputSearch
            placeholder="input search text"
            onSearch={this.handleSubmit}
            enterButton
        />
      </div>
    )
  }
}
Search.propTypes = {
  searchData: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}
Search.defaultProps = {
  errorMessage: '',
}
const mapStateToProps = state => ({
  errorMessage: state.searchData.error.message,
})
const WrappedSerachForm = Form.create()(
  connect(mapStateToProps, { searchData })(Search)
)

export default WrappedSerachForm