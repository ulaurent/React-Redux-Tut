import React, {Component}  from 'react';
import axios from 'axios';

//File on Navabar Home
class Home extends Component{
    state = {
        post: []
    }
    
    //res is 'results' of api request
    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res);
            this.setState({
                post: res.data.slice(0,10)
            })
        })
    }
    render() {
        // To grab the props of the state in order to use
        const {post} = this.state
        // Turnory
        const postList = post.length ? (
            post.map(post =>{
                return (
                <div className="post card" key = {post.id}>
                    <div className="card-content">
                         <span className="card-title">{post.title}</span>
                          <p>{post.body}</p>
                    </div>
                </div>
                )
            })
        ) 
            : (<div className = "center">You have no Post</div>)
            
        return(
            <div className="container">
                <h4 className="center">Home Page</h4>
                {postList}
            </div>
   )
   }
}
export default Home