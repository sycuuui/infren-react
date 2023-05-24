import React, {Component} from 'react';

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
          <li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>
        );
        i = i+1;
      } // key는 여러개를 할 때 react에게 알려주기 위해 적는 식별자이다.
      return(
        <nav>
          <ul>
              {lists}
          </ul>
        </nav>
      );
    }
}

export default TOC;