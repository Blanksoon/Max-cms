import {
  TimePicker,
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
import UploadPosterEn from '../utils/UploadPosterEn'
import UploadPosterTh from '../utils/UploadPosterTh'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import Router from 'next/router'
import moment from 'moment'
import { redirect } from '../../tools/utils'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option
const { TextArea } = Input

class PosterModify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: [{ posterEn: undefined, posterTh: undefined }],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.info = this.info.bind(this)
    this.handlePosterEn = this.handlePosterEn.bind(this)
    this.handlePosterTh = this.handlePosterTh.bind(this)
    this.addPoster = this.addPoster.bind(this)
    this.setFieldsDataInForm = this.setFieldsDataInForm.bind(this)
    this.deletePosterEn = this.deletePosterEn.bind(this)
    this.deletePosterTh = this.deletePosterTh.bind(this)
    this.finishUpload = this.finishUpload.bind(this)
  }

  async componentDidMount() {
    const data = await api.get(
      `${api.SERVER}/cms/posters?token=${this.props.auth.token}`
    )
    this.setState({
      data: data.data,
    })
    this.setFieldsDataInForm()
  }

  async finishUpload() {
    const data = await api.get(
      `${api.SERVER}/cms/posters?token=${this.props.auth.token}`
    )
    this.setState({
      data: data.data,
    })
    this.setFieldsDataInForm()
    return 'hi'
  }
  deletePosterTh() {
    this.props.form.setFieldsValue({
      posterTh: undefined,
    })
  }
  deletePosterEn() {
    this.props.form.setFieldsValue({
      posterEn: undefined,
    })
  }
  handlePosterTh(imageName, imageUrl) {
    //console.log('imageName: ', imageName)
    if (imageName !== '') {
      this.props.form.setFieldsValue({
        posterTh: imageName,
      })
      this.setState({
        data: {
          ...this.state.data,
          posterTh: imageUrl,
        },
      })
    }
    return 'success'
  }

  handlePosterEn(imageName, imageUrl) {
    if (imageName !== '') {
      this.props.form.setFieldsValue({
        posterEn: imageName,
      })
      this.setState({
        data: {
          ...this.state.data,
          posterEn: imageUrl,
        },
      })
    }
    return 'success'
  }

  setFieldsDataInForm() {
    //console.log('this.state: ', this.state)
    this.props.form.setFieldsValue({
      posterEn: this.state.data[0].posterEn,
    })
    this.props.form.setFieldsValue({
      posterTh: this.state.data[0].posterTh,
    })
    return 'success'
  }

  async addPoster(value) {
    //console.log('1', value)
    //value._id = this.state.data._id
    const data = {
      token: this.props.auth.token,
      data: value,
    }
    const result = await api.post(`${api.SERVER}/cms/new-poster`, data)
    //console.log('2', result)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      this.setState({
        loading: true,
      })
      if (!err) {
        await this.addPoster(values)
        //console.log('3', values)
        this.info()
      }
      this.setState({
        loading: false,
      })
    })
  }

  info() {
    Modal.info({
      title: 'Success for update live',
      content: (
        <div>
          <p>you update 1 poster</p>
        </div>
      ),
      onOk() {
        //PosterModify.ForceUpdate()
        //redirect('/poster')
        Router.push(`/maxnews`)
      },
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    //console.log('111111111111', this.state.data.fightcardUrl)
    const { autoCompleteResult } = this.state
    //this.setFieldsDataInForm()
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
            <h1>Poster</h1>
          </Col>
        </Row>
        <div className={'setting-row'}>
          <h2>EN</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Poster-url:">
            {getFieldDecorator('posterTh', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <UploadPosterEn
                deletePosterEn={this.deletePosterEn}
                onChangeImg={this.handlePosterEn}
                image={this.state.data[0].posterEn}
              />
            )}
          </FormItem>
          <hr className={`hr-tag`} />
          <div className={'setting-row'}>
            <h2>TH</h2>
          </div>
          <FormItem {...formItemLayout} label="Poster-Url:">
            {getFieldDecorator('posterEn', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <UploadPosterTh
                deletePosterTh={this.deletePosterTh}
                onChangeImg={this.handlePosterTh}
                image={this.state.data[0].posterTh}
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
export default Form.create()(connect(mapStateToProps, null)(PosterModify))
