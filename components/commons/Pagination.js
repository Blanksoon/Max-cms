import { Pagination } from 'antd';
import { Component } from 'react'
import PropTypes from 'prop-types'

class PaginationDataGrid extends Component {
  constructor(props) {
    super(props)
    console.log('pagination',props)
  }
  render() {
    console.log('1111111111111111',this.props)
    return (
      <div>
        <Pagination
          total={this.props.total}
          //showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSize={10}
          defaultCurrent={this.props.defaultCurrent}
         // hideOnSinglePage={this.props.total <= 0}
        />
      </div>
    )
  }
}
PaginationDataGrid.PropTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  defaultCurrent: PropTypes.number,
}
export default PaginationDataGrid
