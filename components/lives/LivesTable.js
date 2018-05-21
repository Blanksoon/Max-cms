import { Table, Icon, Divider, Button, Spin, Popconfirm } from 'antd'
import vars from '../commons/vars'

const { Column, ColumnGroup } = Table

class LivesTable extends React.Component {
  constructor(props) {
    super(props)
    this.handleTableChange = this.handleTableChange.bind(this)
  }

  handleTableChange(pagination, filters, sorter) {
    const { token } = this.props
    const offset = (pagination.current - 1) * pagination.pageSize
    const limit = pagination.pageSize
    this.props.fetchLives(token, offset, limit)
  }

  render() {
    const { livesData, lengtOflives } = this.props
    const pagination = {
      total: lengtOflives,
      pageSize: 10,
    }
    let loading = true
    if (livesData === undefined) {
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
            dataSource={livesData}
            pagination={pagination}
            rowKey={livesData => livesData._id}
            onChange={this.handleTableChange}
          >
            {/* <Column title="id" dataIndex="_id" key="_id" /> */}
            <Column title="productId" dataIndex="productId" key="productId" />
            {/* <Column
            title="programName"
            dataIndex="programName"
            key="programName"
          /> */}
            <Column title="title_en" dataIndex="title_en" key="title_en" />
            <Column title="title_th" dataIndex="title_th" key="title_th" />
            {/* <Column title="showOrder" dataIndex="showOrder" key="showOrder" /> */}
            <Column title="startTime" dataIndex="startTime" key="startTime" />
            <Column title="endTime" dataIndex="endTime" key="endTime" />
            {/* <Column title="liveDay" dataIndex="liveDay" key="liveDay" />
          <Column
            title="shortDesc1_en"
            dataIndex="shortDesc1_en"
            key="shortDesc1_en"
          />
          <Column title="shortDesc2_en" dataIndex="shortDesc2_en" key="shortDesc2_en" /> */}
            <Column
              title="shortDesc1_th"
              dataIndex="shortDesc2_th"
              key="shortDesc2_th"
            />
            {/* <Column
            title="shortDesc2_th"
            dataIndex="shortDesc2_th"
            key="shortDesc2_th"
          />
          <Column title="desc_en" dataIndex="desc_en" key="desc_en" />
          <Column
            title="fightcardUrl"
            dataIndex="fightcardUrl"
            key="fightcardUrl"
          />
          <Column title="videoUrl" dataIndex="videoUrl" key="videoUrl" /> */}
            <Column title="promoUrl" dataIndex="promoUrl" key="promoUrl" />
            {/* <Column title="bannerUrl" dataIndex="bannerUrl" key="bannerUrl" />
          <Column title="logoUrl" dataIndex="logoUrl" key="logoUrl" />
          <Column title="price" dataIndex="price" key="price" />
          <Column title="status" dataIndex="status" key="status" /> */}
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

export default LivesTable
