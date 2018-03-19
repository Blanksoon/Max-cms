import { Table, Icon, Divider, Button, Spin } from 'antd'
import vars from '../commons/vars'

const { Column, ColumnGroup } = Table

class UsersTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleTableChange = this.handleTableChange.bind(this)
  }

  handleTableChange(pagination, filters, sorter) {
    const { token } = this.props
    const offset = (pagination.current - 1) * pagination.pageSize
    const limit = pagination.pageSize
    this.props.fetchUsers(token, offset, limit)
  }

  render() {
    const { usersData, lengtOfusers } = this.props
    const pagination = {
      total: lengtOfusers,
      pageSize: 10,
    }
    let loading = true
    if (usersData === undefined) {
      loading = true
    } else {
      loading = false
    }

    return (
      <div>
        <Spin
          size="large"
          tip="Loading..."
          spinning={loading}
          style={{ marginTop: 150 }}
        >
          <Table
            dataSource={usersData}
            pagination={pagination}
            rowKey={usersData => usersData._id}
            onChange={this.handleTableChange}
          >
            {/* <Column title="id" dataIndex="_id" key="_id" /> */}
            <Column title="email" dataIndex="email" key="email" />
            <Column title="name" dataIndex="name" key="name" />
            <Column title="lastname" dataIndex="lastname" key="lastname" />
            <Column title="gender" dataIndex="gender" key="gender" />
            <Column title="country" dataIndex="country" key="country" />
            {/* <Column
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
                <Button
                  shape="circle"
                  onClick={() => this.props.deleteData({ id: record._id })}
                >
                  <Icon
                    type="delete"
                    style={{ color: `red`, fontSize: `1.5rem` }}
                  />
                </Button>
              </span>
            )}
          /> */}
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

export default UsersTable
