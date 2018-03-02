import Table from '../commons/DataGrid'
import Search from '../commons/Search'
import PaginationDataGrid from '../commons/Pagination'
import { Component } from 'react'
import { connect } from 'react-redux'

class DataGridApplications extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //console.log('props-search',this.props.searchData)
    return (
      <div style={{ margin: 'auto' }}>
        <style jsx global>{`
          tr:hover {
            background-color: #ffffcc;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
        `}</style>
        <Search />
        <br />
        <Table bordered dataSource={this.props.searchData} pagination={false} />
        <br />
        <PaginationDataGrid
          total={this.props.pagination.totalRecord}
          pageSize={this.props.pagination.pageSize}
          defaultCurrent={this.props.pagination.defaultCurrent}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchData: state.searchData.data,
  pagination: state.searchData.pagination,
})

export default connect(mapStateToProps, null)(DataGridApplications)
