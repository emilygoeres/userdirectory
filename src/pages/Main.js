import React from "react"
import axios from "axios"
class Main extends React.Component {
    state = {
        rose: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then((employee)=>{
                console.log(employee)
            })
    }
    render() {
        return (<div>
            <h4>List of People</h4>
        </div>)
    }
}
export default Main