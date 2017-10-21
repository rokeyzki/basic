import React from 'react';
// import PropTypes from 'prop-types';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// const htmlencode = (s) => {
//   const div = document.createElement('div');
//   div.appendChild(document.createTextNode(s));
//   return div.innerHTML;
// };

// const htmldecode = (s) => {
//   const div = document.createElement('div');
//   div.innerHTML = s;
//   return div.innerText || div.textContent;
// };

class MyEditor extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  get = () => {
    const { editorState } = this.state;
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    // console.log('get', html);
    return html;
  }

  set = (html) => {
    // console.log('set', html);
    const blocksFromHtml = htmlToDraft(html);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);

    this.setState({
      editorState,
    });
  }

  render() {
    // 富文本编辑器
    function uploadCallback(file) {
      return new Promise((resolve, reject) => {
        const formData = new FormData();
        formData.append('file', file);

        axios(
          './files3/file/upload',
          {
            method: 'post',
            data: formData,
          },
        ).then((response) => {
          console.log(response);
          resolve({
            data: { link: response.data.image_url },
          });
        }).catch((error) => {
          console.dir(error);
          reject(error.response);
        });
      });
    }

    const toolbar = {
      options: ['blockType', 'fontSize', 'fontFamily', 'inline', 'list', 'textAlign', 'colorPicker', 'link', 'image', 'history'],
      inline: {
        options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace'],
      },
      image: {
        urlEnabled: true,
        uploadEnabled: true,
        alignmentEnabled: true,
        uploadCallback,
        inputAccept: 'image/png,image/jpg',
        alt: { present: true, mandatory: false },
        defaultSize: {
          height: 'auto',
          width: 'auto',
        },
      },
    };

    return (
      <Editor
        // editorClassName="editor-class"
        toolbar={toolbar}
        editorState={this.state.editorState}
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }
}

export { MyEditor };
