import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import './App.css';

class App extends Component {
  constructor(props){
    super(props); //props : 개발자에게 주는 정보 props에 따라 state 구현을 다르게 한다
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub:"World Wide Web!"},
      welcome:{title:'Welcome',desc:'Hello,React'},
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"}
      ]
    }
  } //제일 먼저 실행되서 초기화시킨다.
  render(){
    var _title, _desc = null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        
        </Subject>
        <Subject title="Server"sub="hi"></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
//render 매소드

export default App;
