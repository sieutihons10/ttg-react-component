import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils} from 'draft-js';

export default function MyEditor() {
    const [editorState, setEditorState] = React.useState(() =>
      EditorState.createEmpty()
    );
  
    const editor = React.useRef(null);
    function focusEditor() {
      editor.current.focus();
    }
    useEffect(() => {
        console.log(editorState)
    })
    return (
      <div
        style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
        onClick={focusEditor}
      >
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={setEditorState}
          placeholder="Write something!"
        />
      </div>
    );
  }