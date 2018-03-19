import { Upload, Icon, message } from 'antd'
import { Component } from 'react'
import * as api from '../../api'

class UploadImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      imageUrl: '',
    }
  }

  componentWillReceiveProps(nexProps) {
    if (nexProps.image !== this.state.imageUrl) {
      if (nexProps.image !== undefined) {
        this.setState({
          imageUrl: nexProps.image,
        })
      }
    }
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        this.props.onChangeImg(info.file.name, imageUrl)
        this.setState({
          imageUrl,
          loading: false,
        })
      })
    }
  }
  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    const imageUrl = this.state.imageUrl
    //console.log('imageUrl: ', imageUrl)
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        action={api.SERVER + '/maxnews/upload/image'}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img style={{ width: '12rem' }} src={imageUrl} alt="" />
        ) : (
          uploadButton
        )}
      </Upload>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file) {
  // const isJPG = file.type === 'image/jpeg'
  // if (!isJPG) {
  //   message.error('You can only upload JPG file!')
  // }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }
  //return isJPG && isLt2M
  return isLt2M
}

export default UploadImage
