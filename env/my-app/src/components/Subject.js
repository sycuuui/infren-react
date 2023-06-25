import React, {Component} from 'react';

class Subject extends Component{
    render(){
      return(
        <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault()
            this.props.onChangePage(); //클릭하면 내가 만든 이벤트를 실행
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
      </header>
      );
    }
  }

export default Subject;