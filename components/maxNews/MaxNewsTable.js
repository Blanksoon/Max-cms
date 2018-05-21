import { Table, Icon, Divider, Button, Spin, Popconfirm } from 'antd'
import vars from '../commons/vars'

const { Column, ColumnGroup } = Table

class MaxNewsTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleTableChange = this.handleTableChange.bind(this)
  }

  handleTableChange(pagination, filters, sorter) {
    const { token } = this.props
    const offset = (pagination.current - 1) * pagination.pageSize
    const limit = pagination.pageSize
    this.props.fetchNews(token, offset, limit)
  }
  render() {
    const { maxnewsData, lengtOfMaxnews } = this.props
    let loading = true
    const pagination = {
      total: lengtOfMaxnews,
      pageSize: 10,
    }
    if (maxnewsData === undefined) {
      loading = true
    } else {
      loading = false
    }
    //console.log('11111111', this.props)
    return (
      <div>
        <Spin
          size="large"
          tip="Loading..."
          spinning={loading}
          style={{ marginTop: 150 }}
        >
          <Table
            dataSource={maxnewsData}
            pagination={pagination}
            rowKey={maxnewsData => maxnewsData._id}
            onChange={this.handleTableChange}
          >
            {/* <Column title="id" dataIndex="_id" key="_id" /> */}
            <Column title="headingEn" dataIndex="heading_en" key="heading_en" />
            <Column title="articleEn" dataIndex="article_en" key="article_en" />
            <Column title="headingTh" dataIndex="heading_th" key="heading_th" />
            <Column title="articleTh" dataIndex="article_th" key="article_th" />
            <Column
              title="programName"
              dataIndex="programName"
              key="programName"
            />
            <Column
              title="createDate"
              dataIndex="createDate"
              key="createDate"
            />
            {/* <Column title="imageUrl" dataIndex="imageUrl" key="imageUrl" /> */}
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <Button
                    shape="circle"
                    onClick={() =>
                      this.props.redirectToModify({ id: record._id })
                    }
                  >
                    <Icon
                      type="edit"
                      style={{ color: `#607d8b`, fontSize: `1.5rem` }}
                    />
                  </Button>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="Are you sure？"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={e => this.props.deleteData({ id: record._id })}
                    onClick={e => e.stopPropagation()}
                  >
                    <Button shape="circle">
                      <Icon
                        type="delete"
                        style={{ color: `red`, fontSize: `1.5rem` }}
                      />
                    </Button>
                  </Popconfirm>
                </span>
              )}
            />
          </Table>
          <style jsx global>{`
            th {
              background-color: ${vars.blue} !important;
              text-align: center !important;
            }
            .ant-table-thead > tr > th {
              color: ${vars.white} !important;
            }
            .ant-table ant-table-large ant-table-scroll-position-left {
              box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                0 1px 2px rgba(0, 0, 0, 0.24) !important;
            }
            .ant-btn {
              border-color: #fff !important;
            }
            .ant-table table {
              text-align: center !important;
            }
          `}</style>
        </Spin>
      </div>
    )
  }
}

export default MaxNewsTable
