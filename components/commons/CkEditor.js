import CKEditor from 'react-ckeditor-component'
import { Component } from 'react'

class CkEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.data,
    }
    this.updateContent = this.updateContent.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  updateContent(newContent) {
    this.setState({
      content: newContent,
    })
  }

  onChange(evt) {
    var newContent = evt.editor.getData()
    this.setState({
      content: newContent,
    })
  }

  onBlur(evt) {
    console.log('onBlur event called with event info: ', evt)
  }

  afterPaste(evt) {
    console.log('afterPaste event called with event info: ', evt)
  }

  render() {
    let renderUi = <div />
    if (this.props.data !== undefined) {
      renderUi = (
        <CKEditor
          activeClass="p10"
          content={this.props.data}
          config={{
            extraPlugins: 'uploadimage',
            imageUploadUrl: 'https://api.maxmuaythai.com/upload/image',
          }}
          events={{
            blur: this.onBlur,
            afterPaste: this.afterPaste,
            change: this.props.handleOnchangeEditor,
          }}
          scriptUrl="https://admin.maxmuaythai.com/static/ckeditor/ckeditor.js"
        />
      )
    }
    return <div>{renderUi}</div>
  }
}

export default CkEditor
