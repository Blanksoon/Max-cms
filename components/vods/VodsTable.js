import { Table, Icon, Divider, Button } from 'antd'
import vars from '../commons/vars'

const { Column, ColumnGroup } = Table

class VodsTable extends React.Component {
  render() {
    const { vodsData, lengtOfvods } = this.props
    //console.log('11111111', this.props)
    return (
      <div>
        <Table
          dataSource={vodsData}
          pagination={lengtOfvods}
          rowKey={vodsData => vodsData._id}
        >
          {/* <Column title="id" dataIndex="_id" key="_id" /> */}
          <Column
            title="programName_en"
            dataIndex="programName_en"
            key="programName_en"
          />
          <Column title="title_en" dataIndex="title_en" key="title_en" />
          {/* <Column title="desc_en" dataIndex="desc_en" key="desc_en" /> */}
          <Column
            title="programName_th"
            dataIndex="programName_th"
            key="programName_th"
          />
          {/* <Column title="title_th" dataIndex="title_th" key="title_th" /> */}
          <Column title="desc_th" dataIndex="desc_th" key="desc_th" />
          {/* <Column title="videoUrl" dataIndex="videoUrl" key="videoUrl" />
          <Column title="promoUrl" dataIndex="promoUrl" key="promoUrl" />
          <Column
            title="thumbnailUrl"
            dataIndex="thumbnailUrl"
            key="thumbnailUrl"
          />
          <Column title="logoUrl" dataIndex="logoUrl" key="logoUrl" /> */}
          <Column title="onAirDate" dataIndex="onAirDate" key="onAirDate" />
          <Column title="duration" dataIndex="duration" key="duration" />
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
      </div>
    )
  }
}

export default VodsTable
