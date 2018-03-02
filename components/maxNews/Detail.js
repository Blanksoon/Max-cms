import Table from '../commons/DataGrid'
import Search from '../commons/Search'
import PaginationDataGrid from '../commons/Pagination'
import { Component } from 'react'
import { connect } from 'react-redux'
import {
  Row,
  Col,
  Input,
  DatePicker,
  Upload,
  Icon,
  message,
  Select,
  Form,
  Button,
} from 'antd'
import UploadImage from '../utils/UploadImage'
import * as api from '../../api'

const { TextArea } = Input
const Option = Select.Option
const FormItem = Form.Item

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {
      heading_en: '',
      heading_th: '',
      createDate: '',
      imageUrl: '',
      article_en: '',
      article_th: '',
      loading: false,
      programName: '',
    }
    this.handleOnChangeHeadingEn = this.handleOnChangeHeadingEn.bind(this)
    this.handleOnChangeArticleEn = this.handleOnChangeArticleEn.bind(this)
    this.handleOnChangeHeadingTh = this.handleOnChangeHeadingTh.bind(this)
    this.handleOnChangeArticleTh = this.handleOnChangeArticleTh.bind(this)
    this.handleOnChangeDate = this.handleOnChangeDate.bind(this)
    this.handleOnchangeImage = this.handleOnchangeImage.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.addNews = this.addNews.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChangeHeadingEn(event) {
    this.setState({
      heading_en: event.target.value,
    })
    //console.log(this.state)
  }

  handleOnChangeArticleEn(event) {
    this.setState({
      article_en: event.target.value,
    })
  }

  handleOnChangeHeadingTh(event) {
    this.setState({
      heading_th: event.target.value,
    })
    //console.log(this.state)
  }

  handleOnChangeArticleTh(event) {
    this.setState({
      article_th: event.target.value,
    })
  }

  handleOnChangeDate(date, dateString) {
    this.setState({
      createDate: date,
    })
  }

  handleOnchangeImage(imgUrl) {
    this.setState({
      imageUrl: imgUrl,
    })
    return 'success'
  }

  handleChange(value) {
    this.setState({
      programName: value,
    })
    //console.log(`selected ${value}`)
  }

  handleBlur() {
    //console.log('blur')
  }

  handleFocus() {
    //console.log('focus')
  }

  async addNews() {
    const { status, data } = await api.post(
      `${api.SERVER}/maxnews/add/news`,
      this.state
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const { email, password } = values
        //console.log(values)
        // this.props.login({ email, password })
      }
    })
  }
  render() {
    //console.log()
    //const { getFieldDecorator } = this.props.ƒ
    const { getFieldDecorator } = this.props.form
    //console.log('1111111111111111', this.props)
    return (
      <Form onSubmit={this.handleSubmit}>
        <div className={'title'}>
          <FormItem>
            <Row>
              <Col span={24}>
                <h1>Max News</h1>
              </Col>
            </Row>
            <div className={'setting-row'}>
              <h2>EN</h2>
              <Row>
                <Col span={3}>
                  <div className={'topic-list'}>Heading:</div>
                </Col>
                <Col span={9}>
                  {getFieldDecorator('headingEn', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Heading',
                      },
                    ],
                  })(
                    <Input
                      onChange={this.handleOnChangeHeadingEn}
                      placeholder="type here"
                      required
                    />
                  )}
                </Col>
              </Row>
            </div>
          </FormItem>
          <div className={'setting-row'}>
            <FormItem>
              <Row>
                <Col span={3}>
                  <div className={'topic-list-image'}>Article:</div>
                </Col>
                <Col span={18}>
                  {getFieldDecorator('articleEn', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Article',
                      },
                    ],
                  })(
                    <div style={{ marginBottom: 10 }}>
                      <TextArea
                        onChange={this.handleOnChangeArticleEn}
                        rows={10}
                      />
                    </div>
                  )}
                </Col>
              </Row>
            </FormItem>
          </div>
          <hr />
          <h2>TH</h2>
          <div className={'setting-row'}>
            <Row>
              <Col span={3}>
                <div className={'topic-list'}>Heading:</div>
              </Col>
              <Col span={9}>
                <Input
                  onChange={this.handleOnChangeHeadingTh}
                  placeholder="type here"
                />
              </Col>
            </Row>
          </div>
          <div className={'setting-row'}>
            <Row>
              <Col span={3}>
                <div className={'topic-list-image'}>Article:</div>
              </Col>
              <Col span={18}>
                <TextArea onChange={this.handleOnChangeArticleTh} rows={10} />
              </Col>
            </Row>
          </div>
          <hr />
          <h2>Both</h2>
          <div className={'setting-row'}>
            <Row>
              <Col span={3}>
                <div className={'topic-list'}>Program:</div>
              </Col>
              <Col span={9}>
                <Select
                  showSearch
                  style={{ width: 250 }}
                  placeholder="Select a program"
                  optionFilterProp="children"
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="Max Muay Thai">Max Muay Thai</Option>
                  <Option value="Muay Thai Battle">Muay Thai Battle</Option>
                  <Option value="Muaythai Fighter">Muaythai Fighter</Option>
                  <Option value="The Champion Muay Thai">
                    The Champion Muay Thai
                  </Option>
                  <Option value="Global Fight Wednesday">
                    Global Fight Wednesday
                  </Option>
                  <Option value="Global Fight Thursday">
                    Global Fight Thursday
                  </Option>
                  <Option value="MUAY THAI FIGHTER Monday">
                    MUAY THAI FIGHTER Monday
                  </Option>
                  <Option value="Octa Fight Tuesday">Octa Fight Tuesday</Option>
                  <Option value="Max Sunday Afternoon">
                    Max Sunday Afternoon
                  </Option>
                </Select>
              </Col>
            </Row>
          </div>
          <div className={'setting-row'}>
            <Row>
              <Col span={3}>
                <div className={'topic-list'}>Date:</div>
              </Col>
              <Col span={9}>
                <DatePicker onChange={this.handleOnChangeDate} />
              </Col>
            </Row>
          </div>
          <div className={'setting-row'}>
            <Row>
              <Col span={3}>
                <div className={'topic-list-image'}>Image:</div>
              </Col>
              <Col span={9}>
                <UploadImage onChangeImg={this.handleOnchangeImage} />
              </Col>
            </Row>
          </div>

          <div className={'submit'}>
            <Row>
              <Col span={24}>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: '100%' }}
                    loading={this.state.loading}
                  >
                    {this.state.loading ? '' : 'Save'}
                  </Button>
                </FormItem>
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
            .submit {
              padding-bottom: 1rem;
            }
            .submit-button {
              width: 8rem;
              height: 2rem;
              background-color: green;
              color: white;
            }
          `}</style>
        </div>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  searchData: state.searchData.data,
  pagination: state.searchData.pagination,
})

const Detail = Form.create()(connect(mapStateToProps, null)(Details))

export default Detail
