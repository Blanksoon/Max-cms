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
import UploadImage from '../utils/UploadImage'
import * as api from '../../api'
import Spinner from '../commons/Spinner'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option
const { TextArea } = Input

class MaxNewsInsertForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
    this.handleOnchangeImage = this.handleOnchangeImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.info = this.info.bind(this)
  }

  handleOnchangeImage(imgUrl) {
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        imageUrl: imgUrl,
      })
    }
    return 'success'
  }

  async addNews(value) {
    //console.log('1', value)
    const result = await api.post(`${api.SERVER}/maxnews/add/news`, value)
    //console.log('2', result)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      this.setState({
        loading: true,
      })
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
      title: 'Success for new max news',
      content: (
        <div>
          <p>you add 1 news</p>
        </div>
      ),
      onOk() {},
    })
  }

  render() {
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
            })(<TextArea rows={10} />)}
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
            })(<TextArea rows={10} />)}
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
            })(<DatePicker />)}
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
            })(<UploadImage onChangeImg={this.handleOnchangeImage} />)}
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
const Info = Form.create()(MaxNewsInsertForm)
export default Info
