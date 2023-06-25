import React, {Component} from 'react';

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i=0;
      while(i<data.length){
        lists.push(
          <li key={data[i].id}>
            {/* <a 
              href={"/content/"+data[i].id}
              data-id = {data[i].id}
              onClick = {function(e){
                e.target
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id); // data-id에서의 id이다.
              }.bind(this)}
            > */} 
            <a 
              href={"/content/"+data[i].id}
              onClick = {function(id,e){
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this,data[i].id)}
            ></a>{data[i].title}
          </li>
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