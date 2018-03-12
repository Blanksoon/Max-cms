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
  Breadcrumb,
  Radio,
} from 'antd'
import UploadImage from '../utils/UploadImage'
import * as api from '../../api'
import Spinner from '../commons/Spinner'
import Router from 'next/router'
import { connect } from 'react-redux'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option
const { TextArea } = Input
const RadioGroup = Radio.Group

class VodsInsert extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      prognameEn: [],
      prognameEnList: [],
      titleTh: [],
    }
    this.handleOnchangeImage = this.handleOnchangeImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fetchProgName = this.fetchProgName.bind(this)
    this.info = this.info.bind(this)
  }

  componentDidMount() {
    this.fetchProgName()
  }

  handleOnchangeImage(imgUrl) {
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        thumbnailUrl: imgUrl,
      })
    }
    return 'success'
  }

  async addNews(value) {
    //console.log('1', value)
    const data = {
      token: this.props.auth.token,
      data: value,
    }
    const result = await api.post(`${api.SERVER}/vods/new`, data)
    //console.log('2', result)
  }

  async fetchProgName() {
    const result = await api.get(`${api.SERVER}/cms/lives/get-progname`)
    //console.log(result)
    let i = 0
    let prognameEn = []
    let titleEn = []
    let titleTh = []
    titleEn = result.map(item => (
      <Option value={item.title_en}>{item.title_en}</Option>
    ))
    titleTh = result.map(item => (
      <Option value={item.title_th}>{item.title_th}</Option>
    ))
    while (i < result.length) {
      if (result[i].programName === 'Muay Thai Battle') {
        prognameEn[i] = (
          <Option value="Battle Muay Thai">Battle Muay Thai</Option>
        )
      } else {
        prognameEn[i] = (
          <Option value={result[i].programName}>{result[i].programName}</Option>
        )
      }
      i++
    }

    const prognameEnList = result.map(item => item.programName)
    this.setState({
      prognameEn: prognameEn,
      prognameEnList: prognameEnList,
      titleEn: titleEn,
      titleTh: titleTh,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      // this.setState({
      //   loading: true,
      // })
      if (!err) {
        await this.addNews(values)
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
      title: 'Success for add new vod',
      content: (
        <div>
          <p>you add 1 vod</p>
        </div>
      ),
      onOk() {
        Router.push(`/vods`)
      },
    })
  }

  render() {
    //console.log('this.state: ', this.state.progname)
    let programNameEn = []
    if (this.state.prognameEn === []) {
      programNameEn = null
    } else {
      programNameEn = this.state.prognameEn
    }
    let titleEn = []
    if (this.state.titleEn === []) {
      titleEn = null
    } else {
      titleEn = this.state.titleEn
    }
    let titleTh = []
    if (this.state.titleTh === []) {
      titleTh = null
    } else {
      titleTh = this.state.titleTh
    }
    const { getFieldDecorator } = this.props.form
    //console.log('111111111111', this.props.form)
    const { autoCompleteResult } = this.state

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
            <h1>Vods</h1>
          </Col>
        </Row>
        <div className={'setting-row'}>
          <h2>EN</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Program-name:">
            {getFieldDecorator('programName_en', {
              rules: [
                {
                  required: true,
                  message: 'Please select Program-name!',
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
          <FormItem {...formItemLayout} label="Title:">
            {getFieldDecorator('title_en', {
              rules: [
                {
                  required: true,
                  message: 'Please select Title!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a title"
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
                {titleEn}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Desc:">
            {getFieldDecorator('desc_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <hr className={`hr-tag`} />
          <div className={'setting-row'}>
            <h2>TH</h2>
          </div>
          <FormItem {...formItemLayout} label="Program-name:">
            {getFieldDecorator('programName_th', {
              rules: [
                {
                  required: true,
                  message: 'Please select Program-name!',
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
                {titleTh}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Title:">
            {getFieldDecorator('title_th', {
              rules: [
                {
                  required: true,
                  message: 'Please select Title!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a Title"
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
                {titleTh}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Desc:">
            {getFieldDecorator('desc_th', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <hr className={`hr-tag`} />
          <FormItem {...formItemLayout} label="Promo-vdo-media-id:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Media-id!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Thumbnail-url:">
            {getFieldDecorator('thumbnailUrl', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              rules: [
                {
                  required: true,
                  message: 'Please upload Thumbnail-url!',
                },
              ],
            })(<UploadImage onChangeImg={this.handleOnchangeImage} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Logo:">
            {getFieldDecorator('logoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please select Logo!',
                },
              ],
            })(
              <Select
                showSearch
                style={{ width: 250 }}
                placeholder="Select a logo"
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
          <FormItem {...formItemLayout} label="OnAirDate:">
            {getFieldDecorator('onAirDate', {
              rules: [
                {
                  required: true,
                  message: 'Please enter OnAirDate!',
                },
              ],
            })(<DatePicker />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Duration:">
            {getFieldDecorator('duration', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Duration!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Feature:">
            {getFieldDecorator('feature', {
              rules: [
                {
                  required: true,
                  message: 'Please select your Feature!',
                },
              ],
            })(
              <RadioGroup>
                <Radio value={'active'}>ON</Radio>
                <Radio value={'unactive'}>OFF</Radio>
              </RadioGroup>
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

export default Form.create()(connect(mapStateToProps, null)(VodsInsert))
