import {
  DatePicker,
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal,
} from 'antd'
import { connect } from 'react-redux'
import UploadImage from '../utils/UploadImage'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import Router from 'next/router'
import moment from 'moment'
import CkEditor from '../commons/CkEditor'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option
const { TextArea } = Input

class MaxNewsModify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {},
      prognameEn: [],
      articelEn: '',
    }
    this.handleOnchangeImage = this.handleOnchangeImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchProgName = this.fetchProgName.bind(this)
    this.setFieldsDataInForm = this.setFieldsDataInForm.bind(this)
    this.info = this.info.bind(this)
    this.updateNews = this.updateNews.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.handleOnchangeArticleEn = this.handleOnchangeArticleEn.bind(this)
    this.handleOnchangeArticleTh = this.handleOnchangeArticleTh.bind(this)
  }

  handleOnchangeArticleEn(evt) {
    var newContent = evt.editor.getData()
    this.props.form.setFieldsValue({
      article_en: newContent,
    })
  }

  handleOnchangeArticleTh(evt) {
    var newContent = evt.editor.getData()
    this.props.form.setFieldsValue({
      article_th: newContent,
    })
  }

  async componentDidMount() {
    const data = await api.get(
      `${api.SERVER}/cms/maxnews/${this.props.id}?token=${
        this.props.auth.token
      }`
    )
    this.setState({
      data: data.data,
    })
    this.fetchProgName()
    this.setFieldsDataInForm()
  }

  handleOnchangeImage(imgUrl) {
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        imageUrl: imgUrl,
      })
    }
    return 'success'
  }

  async updateNews(value) {
    value._id = this.state.data._id
    const data = {
      token: this.props.auth.token,
      data: value,
    }
    const result = await api.post(`${api.SERVER}/cms/maxnews/update`, data)
  }

  async fetchProgName() {
    const result = await api.get(`${api.SERVER}/cms/lives/get-progname`)
    let prognameEn = []
    prognameEn = result.map(item => (
      <Option value={item.programName}>{item.programName}</Option>
    ))
    this.setState({
      prognameEn: prognameEn,
    })
  }

  setFieldsDataInForm() {
    this.props.form.setFieldsValue({
      heading_en: this.state.data.heading_en,
    })
    this.props.form.setFieldsValue({
      article_en: this.state.data.article_en,
    })
    this.props.form.setFieldsValue({
      heading_th: this.state.data.heading_th,
    })
    this.props.form.setFieldsValue({
      article_th: this.state.data.article_th,
    })
    this.props.form.setFieldsValue({
      programName: this.state.data.programName,
    })
    let createDate = moment(this.state.data.createDate).locale('th')
    this.props.form.setFieldsValue({
      createDate: moment(createDate, 'YYYY-MM-DD'),
    })
    this.props.form.setFieldsValue({
      imageUrl: this.state.data.imageUrl,
    })
    return 'hi'
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      this.setState({
        loading: true,
      })
      if (!err) {
        await this.updateNews(values)
        this.info()
      }
      this.setState({
        loading: false,
      })
    })
  }

  info() {
    Modal.info({
      title: 'Success for new max news',
      content: (
        <div>
          <p>you add 1 news</p>
        </div>
      ),
      onOk() {
        Router.push(`/maxnews`)
      },
    })
  }

  async onChangeDate(value) {
    this.props.form.setFieldsValue({
      createDate: moment(value),
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { autoCompleteResult } = this.state
    let programNameEn = []
    if (this.state.prognameEn === []) {
      programNameEn = null
    } else {
      programNameEn = this.state.prognameEn
    }
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 10,
        },
      },
    }
    return (
      <div>
        <Row>
          <Col span={24}>
            <h1>Max News</h1>
          </Col>
        </Row>
        <div className={'setting-row'}>
          <h2>EN</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Heading:">
            {getFieldDecorator('heading_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Heading!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Article:">
            {getFieldDecorator('article_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Article!',
                },
              ],
            })(
              <CkEditor
                handleOnchangeEditor={this.handleOnchangeArticleEn}
                data={this.state.data.article_en}
              />
            )}
          </FormItem>
          <hr className={`hr-tag`} />
          <div className={'setting-row'}>
            <h2>TH</h2>
          </div>
          <FormItem {...formItemLayout} label="Heading:">
            {getFieldDecorator('heading_th', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your Heading!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Article:">
            {getFieldDecorator('article_th', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your Article!',
                },
              ],
            })(
              <CkEditor
                handleOnchangeEditor={this.handleOnchangeArticleTh}
                data={this.state.data.article_th}
              />
            )}
          </FormItem>
          <hr className={`hr-tag`} />
          <FormItem {...formItemLayout} label="Program:">
            {getFieldDecorator('programName', {
              rules: [
                {
                  required: true,
                  message: 'Please select program!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a program"
                optionFilterProp="children"
                //onChange={this.handleChange}
                //onFocus={this.handleFocus}
                //onBlur={this.handleBlur}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                {programNameEn}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Date:">
            {getFieldDecorator('createDate', {
              rules: [
                {
                  required: true,
                  message: 'Please enter Date!',
                },
              ],
            })(<DatePicker onChange={this.onChangeDate} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Image:">
            {getFieldDecorator('imageUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [
                {
                  required: true,
                  message: 'Please upload Image!',
                },
              ],
            })(
              <UploadImage
                onChangeImg={this.handleOnchangeImage}
                image={this.state.data.imageUrl}
              />
            )}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <div>
              <Button
                style={{
                  width: '9rem',
                  height: '2.5rem',
                  backgroundColor: '#4caf4f',
                  color: 'white',
                  fontSize: '1.2rem',
                }}
                loading={this.state.loading}
                htmlType="submit"
              >
                save
              </Button>
            </div>
          </FormItem>
        </Form>
        <style jsx>{`
          .setting-row {
            margin-left: 1rem;
          }
          .hr-tag {
            margin-bottom: 1.5rem;
          }
          .submit-button {
            width: 8rem;
            height: 2rem;
            background-color: green;
            color: white;
          }
        `}</style>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
})

export default Form.create()(connect(mapStateToProps, null)(MaxNewsModify))
