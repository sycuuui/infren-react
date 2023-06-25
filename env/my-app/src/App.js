import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import './App.css';

class App extends Component {
  constructor(props){
    super(props); //props : 개발자에게 주는 정보 props에 따라 state 구현을 다르게 한다
    this.max_content_id = 3; //정보일뿐 ui에 영향이 있는 객체가 아니므로 따로 빼둔다 있으면 불필요한 렌더링 발생
    this.state = {
      mode:'create',
      seleted_content_id : 2,
      subject:{title:'WEB', sub:"World Wide Web!"},
      welcome:{title:'Welcome',desc:'Hello,React'},
      contents:[
        {id:1, title:'HTML', desc:"HTML is for information"},
        {id:2, title:'CSS', desc:"CSS is for design"},
        {id:3, title:'JavaScript', desc:"JavaScript is for interactive"}
      ]
    }
  } //제일 먼저 실행되서 초기화시킨다.
  getReadContent(){
    var i= 0;
    while(i<this.state.contents.length){
      var data = this. state.contents[i];
      if(data.id == this.state.seleted_content_id){
        return data
        break;
      }
      i = i+1;
    }
    
  }
  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'read'){
     var _content = this.getReadContent();
     _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }else if(this.state.mode == 'create'){
      _article = <CreateContent onSubmit={
        function(_title, _desc){
          this.max_content_id = this.max_content_id +1;
          // this.state.contents.push(
          //   {id:this.max_content_id, title: _title, desc: _desc}
          // );
          // this.setState(
          //   {contents:this.state.contents}
          // );

          var _contents = this.state.contents.concat(
            {id:this.max_content_id, title:_title, desc:_desc}
          );
          this.setState(
            {contents:_contents}
          );
          console.log(_title,_desc);
        }.bind(this)
      }></CreateContent>
    }else if(this.state.mode == 'update'){
      _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function(_title, _desc){
          this.max_content_id = this.max_content_id +1;

          var _contents = this.state.contents.concat(
            {id:this.max_content_id, title:_title, desc:_desc}
          );
          this.setState(
            {contents:_contents}
          );
          console.log(_title,_desc);
        }.bind(this)
      }></UpdateContent>
    }
  }
  render(){ //prop와 state의 값이 바뀌면 render에 실행되는 값이 달라진다.ㅇㅇㅇㅇ
    
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage= {function(){
            this.setState({mode : 'welcome'});
          }.bind(this)} //내가 만든 이벤트
        >
        </Subject>
        {/* <header>
          <h1><a href="/" onClick={function(e){
            alert('hi');
            e.preventDefault(); //이벤트의 기본적인 동작인 reload를 하는 것을 막아줌 즉, 페이지 전환을 막아줌 
            debugger; //여기서 실행을 멈춰줌
            // this.state.mode = 'welcome'; //이 this에서는 아무것도 찾을 수 없음 bind사용 bind는 이 구역에 this를 강제적으로 주입
            this.state.mode = 'welcome';
            this,setState({
              mode:'welcome'
            }); //mode의 상태를 바꾼다는 것을 알려줘야함
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}
        {/* <Subject title="Server"sub="hi"></Subject> */}
        <TOC data={this.state.contents} 
          onChangePage= {function(id){
            this.setState({mode : 'read', seleted_content_id : Number(id) });
          }.bind(this)}></TOC>
        <Control onChangeMode= {
          function(mode){
            this.setState({
              mode : mode
            })
          }.bind(this)
        }></Control>
        {this.getContent()}
        
      </div>
    );
  }
}
//render 매소드

export default App;
