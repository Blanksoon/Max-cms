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
import Router from 'next/router'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const AutoCompleteOption = AutoComplete.Option
const { TextArea } = Input

class VodsModify extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {},
    }
    this.handleOnchangeImage = this.handleOnchangeImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.info = this.info.bind(this)
    this.setFieldsDataInForm = this.setFieldsDataInForm.bind(this)
    this.checkLogoUrl = this.checkLogoUrl.bind(this)
  }

  async componentDidMount() {
    const data = await api.get(`${api.SERVER}/cms/vods/${this.props.id}`)
    data.logoUrl = this.checkLogoUrl(data.logoUrl)
    this.setState({
      data: data,
    })
    this.setFieldsDataInForm()
  }

  setFieldsDataInForm() {
    //console.log('1', this.state.data.thumbnailUrl)
    this.props.form.setFieldsValue({
      programName_en: this.state.data.programName_en,
    })
    this.props.form.setFieldsValue({
      title_en: this.state.data.title_en,
    })
    this.props.form.setFieldsValue({
      desc_en: this.state.data.desc_en,
    })
    this.props.form.setFieldsValue({
      title_th: this.state.data.title_th,
    })
    this.props.form.setFieldsValue({
      desc_th: this.state.data.desc_th,
    })
    this.props.form.setFieldsValue({
      videoUrl: this.state.data.videoUrl,
    })
    this.props.form.setFieldsValue({
      promoUrl: this.state.data.promoUrl,
    })
    this.props.form.setFieldsValue({
      thumbnailUrl: this.state.data.thumbnailUrl,
    })
    this.props.form.setFieldsValue({
      logoUrl: this.state.data.logoUrl,
    })
    this.props.form.setFieldsValue({
      programName_th: this.state.data.programName_th,
    })
    this.props.form.setFieldsValue({
      onAirDate: moment(this.state.data.onAirDate, 'YYYY-MM-DD'),
    })
    this.props.form.setFieldsValue({
      duration: this.state.data.duration,
    })
    return 'success'
  }

  checkLogoUrl(logoUrl) {
    switch (logoUrl) {
      case 'https://storage.maxmuaythai.com/images/MAX/logo/MAX_logo.png':
        return 'Max Muay Thai'
      case 'https://storage.maxmuaythai.com/images/BATTLE/logo/BATTLE_logo.png':
        return 'Muay Thai Battle'
      case 'https://storage.maxmuaythai.com/images/FIGHTER/logo/FIGHTER_logo.png':
        return 'Muaythai Fighter'
      case 'https://storage.maxmuaythai.com/images/CHAMPION/logo/CHAMPION_logo.png':
        return 'The Champion Muay Thai'
      case 'https://storage.maxmuaythai.com/images/GLOBAL/logo/GLOBAL_logo.png':
        return 'Global Fight Wednesday'
      case 'https://storage.maxmuaythai.com/images/GLOBAL/logo/GLOBAL_logo.png':
        return 'Global Fight Thursday'
      case 'https://storage.maxmuaythai.com/images/OCTA/logo/OCTA_Fight_logo.png':
        return 'MUAY THAI FIGHTER Monday'
      case 'https://storage.maxmuaythai.com/images/OCTA/logo/OCTA_Fight_logo.png':
        return 'MUAY THAI FIGHTER Tuesday'
      case 'https://storage.maxmuaythai.com/images/CHAMPION/logo/CHAMPION_logo.png':
        return 'Max Sunday Afternoon'
    }
  }

  handleOnchangeImage(imgUrl, imageUrl) {
    if (imgUrl !== '') {
      this.props.form.setFieldsValue({
        thumbnailUrl: imgUrl,
      })
      this.setState({
        data: {
          ...this.state.data,
          thumbnailUrl: imageUrl,
        },
      })
    }
    return 'success'
  }

  async updateVods(value) {
    console.log('1', this.state.data)
    value._id = this.state.data._id
    const result = await api.post(`${api.SERVER}/cms/vods/update`, value)
    return 'hi'
    //console.log('2', result)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      this.setState({
        loading: true,
      })
      if (!err) {
        await this.updateVods(values)
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
      title: 'Success for update vod',
      content: (
        <div>
          <p>you update 1 vod</p>
        </div>
      ),
      onOk() {
        Router.push(`/vods`)
      },
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    //console.log('111111111111', this.state.data.thumbnailUrl)
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
            })(
              <UploadImage
                onChangeImg={this.handleOnchangeImage}
                image={this.state.data.thumbnailUrl}
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="logo:">
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

const Info = Form.create()(VodsModify)
export default Info
