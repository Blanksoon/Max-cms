import Table from '../commons/DataGrid'
import Search from '../commons/Search'
import PaginationDataGrid from '../commons/Pagination'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Input, DatePicker, Upload, Icon, message } from 'antd'
import UploadImage from './UploadImage'
const { TextArea } = Input

class Detail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={'title'}>
        <Row>
          <Col span={24}>
            <h1>Max News</h1>
          </Col>
        </Row>
        <div className={'setting-row'}>
          <Row>
            <Col span={3}>
              <div className={'topic-list'}>Heading:</div>
            </Col>
            <Col span={9}>
              <Input placeholder="type here" />
            </Col>
          </Row>
        </div>
        <div className={'setting-row'}>
          <Row>
            <Col span={3}>
              <div className={'topic-list'}>Date:</div>
            </Col>
            <Col span={9}>
              <DatePicker />
            </Col>
          </Row>
        </div>
        <div className={'setting-row'}>
          <Row>
            <Col span={3}>
              <div className={'topic-list-image'}>Image:</div>
            </Col>
            <Col span={9}>
              <UploadImage />
            </Col>
          </Row>
        </div>
        <div className={'setting-row'}>
          <Row>
            <Col span={3}>
              <div className={'topic-list-image'}>Article:</div>
            </Col>
            <Col span={18}>
              <TextArea rows={10} />
            </Col>
          </Row>
        </div>
        <style jsx>{`
          .title {
            width: 100%;
            padding-left: 1rem;
          }
          .topic-list {
            font-size: 1rem;
            padding-left: 1rem;
            padding-top: 0.3rem;
          }
          .topic-list-image {
            font-size: 1rem;
            padding-left: 1rem;
            padding-top: 2.5rem;
          }
          .setting-row {
            padding-bottom: 1rem;
          }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchData: state.searchData.data,
  pagination: state.searchData.pagination,
})

export default connect(mapStateToProps, null)(Detail)
