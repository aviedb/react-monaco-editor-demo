import React, { Component } from 'react';
import './App.css';
import MonacoEditor from 'react-monaco-editor';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: null
    }
  }

  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };

    return (
      <div className="App">
        <MonacoEditor
        width="800"
        height="600"
        language="mysql"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      </div>
    );
  }
}

export default App;
