import { Table, Input, Popconfirm } from 'antd';
import Search from './Search'
import PaginationDataGrid from './Pagination'
// const data = [];
// for (let i = 0; i < 100; i++) {
//   data.push({
//     key: i.toString(),
//     number: `${i}`,
//     first_name: `อารยา`,
//     last_name: `รุ่งชัยวัฒนกุล`,
//     credit_name: `MT0`,
//     moneyLimit: 5000,
//     status: `อนุมัติแล้ว`,
//     create_date: `26-12-2560`,
//     code: `MT`
//   });
// }

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'เลขที่',
      dataIndex: 'app_id',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'app_id'),
    }, {
      title: 'ชื่อ',
      dataIndex: 'first_name',
      width: '20%',
      render: (text, record) => this.renderColumns(text, record, 'first_name'),
    }, {
      title: 'นามสกุล',
      dataIndex: 'last_name',
      width: '20%',
      render: (text, record) => this.renderColumns(text, record, 'last_name'),
    }, {
      title: 'ชื่อสินเชื่อ',
      dataIndex: 'credit_name',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'credit_name'),
    }, {
      title: 'วงเงิน',
      dataIndex: 'moneyLimit',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'moneyLimit'),
    }, {
      title: 'สถานะ',
      dataIndex: 'status',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'status'),
    }, {
      title: 'วันที่สร้าง',
      dataIndex: 'create_date',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'create_date'),
    }, {
      title: 'Code',
      dataIndex: 'code',
      width: '10%',
      render: (text, record) => this.renderColumns(text, record, 'code'),
     }
  ];
    
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record.key, column)}
      />
    );
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item.key)[0];
    if (target) {
      target[column] = value;
      this.setState({ data: newData });
    }
  }
  render() {
    console.log('props',this.props)
    return (
        <Table bordered dataSource={this.props.dataSource} columns={this.columns} pagination={false}/>
    )
  }
}

export default EditableTable

