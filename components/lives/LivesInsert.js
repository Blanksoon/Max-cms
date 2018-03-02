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

class LivesInsert extends React.Component {
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
        thumbnailUrl: imgUrl,
      })
    }
    return 'success'
  }

  async addNews(value) {
    //console.log('1', value)
    const result = await api.post(`${api.SERVER}/vods/new`, value)
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
      title: 'Success for new vod',
      content: (
        <div>
          <p>you add 1 vod</p>
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
            <h1>Vods</h1>
          </Col>
        </Row>
        <div className={'setting-row'}>
          <h2>EN</h2>
        </div>
        <Form onSubmit={this.handleSubmit}>
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
                <Option value="Max Muay Thai">Max Muay Thai</Option>
                <Option value="Battle Muay Thai">Muay Thai Battle</Option>
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
          <FormItem {...formItemLayout} label="Short-desc1:">
            {getFieldDecorator('desc_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc2:">
            {getFieldDecorator('desc_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
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
                <Option value="แม็กซ์มวยไทย">แม็กซ์มวยไทย</Option>
                <Option value="มวยไทย แบทเทิล">มวยไทย แบทเทิล</Option>
                <Option value="มวยไทย ไฟต์เตอร์">มวยไทย ไฟต์เตอร์</Option>
                <Option value="เดอะแชมป์เปี้ยน มวยไทย ตัดเชือก">
                  เดอะแชมป์เปี้ยน มวยไทย ตัดเชือก
                </Option>
                <Option value="โกลด์บอล ไฟท์ วันพุธ">
                  โกลด์บอล ไฟท์ วันพุธ
                </Option>
                <Option value="โกลด์บอล ไฟท์ วันพฤหัส">
                  โกลด์บอล ไฟท์ วันพฤหัส
                </Option>
                <Option value="มวยไทยไฟต์เตอร์ วันจันทร์">
                  มวยไทยไฟต์เตอร์ วันจันทร์
                </Option>
                <Option value="มวยไทยไฟต์เตอร์ วันอังคาร">
                  มวยไทยไฟต์เตอร์ วันอังคาร
                </Option>
                <Option value="แม็กซ์ วันอาทิตย์ บ่าย">
                  แม็กซ์ วันอาทิตย์ บ่าย
                </Option>
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc1:">
            {getFieldDecorator('desc_th', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Short-desc2:">
            {getFieldDecorator('desc_en', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Desc!',
                },
              ],
            })(<TextArea rows={10} />)}
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
          <FormItem {...formItemLayout} label="LiveToDate:">
            {getFieldDecorator('onAirDate', {
              rules: [
                {
                  required: true,
                  message: 'Please enter OnAirDate!',
                },
              ],
            })(
              <DatePicker
                showTime
                placeholder="Select Date and Time"
                format="YYYY-MM-DD HH:mm:ss"
                style={{ paddingRight: '2rem' }}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="LiveFromDate:">
            {getFieldDecorator('onAirDate', {
              rules: [
                {
                  required: true,
                  message: 'Please enter OnAirDate!',
                },
              ],
            })(
              <DatePicker
                showTime
                placeholder="Select Date and Time"
                format="YYYY-MM-DD HH:mm:ss"
                style={{ paddingRight: '2rem' }}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="productId:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
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
                <Option value="Max Muay Thai">Max Muay Thai</Option>
                <Option value="Battle Muay Thai">Battle Muay Thai</Option>
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
          <FormItem {...formItemLayout} label="showOrder:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="startTime:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="endTime:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="liveDay:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="fightcardUrl:">
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
          <FormItem {...formItemLayout} label="Video-url:">
            {getFieldDecorator('videoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Video-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Promo-url:">
            {getFieldDecorator('promoUrl', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Promo-url!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Banner-url:">
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
          <FormItem {...formItemLayout} label="Logo-url:">
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
          <FormItem {...formItemLayout} label="Price:">
            {getFieldDecorator('duration', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Duration!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="status:">
            {getFieldDecorator('duration', {
              rules: [
                {
                  required: true,
                  message: 'Please insert your Duration!',
                },
              ],
            })(<Input />)}
          </FormItem>
          {/* <FormItem {...formItemLayout} label="Feature:">
            {getFieldDecorator('feature', {
              rules: [
                {
                  required: true,
                  message: 'Please select your Feature!',
                },
              ],
            })(<Input />)}
          </FormItem> */}
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

// const a = {
//   programName_en //
//   title_en //
//   desc_en //
//   // promoFromTime
//   // promoToTime
//   //free
//   programName_th //
//   title_th //
//   desc_th //
//   //onAirDateStr_en
//   //onAirDateStr_th
//   videoUrl //
//   thumbnailUrl //
//   logoUrl //
//   promoUrl //
//   onAirDate //
//   duration //
//   feature //
// }

const Info = Form.create()(LivesInsert)
export default Info
