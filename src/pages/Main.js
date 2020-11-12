import React from "react"
import axios from "axios"
import {MDBDataTable} from "mdbreact"

class Main extends React.Component {
    state = {
        employeeDataBase: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then((employee)=>{
                console.log(employee)
                var employeeList = employee.data.results
                var employeeDataBase = []
                for (let i=0; i<employeeList.length; i++){
                    var record = {
                        firstName: employeeList[i].name.first, 
                        lastName: employeeList[i].name.last,
                        cellphone: employeeList[i].cell,
                        email: employeeList[i].email,
                        location: employeeList[i].location.city
                    }
                    employeeDataBase.push(record)
                }
                this.setState({employeeDataBase:employeeDataBase})
                console.log(this.state.employeeDataBase)

            })
    }
    render() {
        const data = {
            columns: [
                {
                    label:"firstName", 
                    field: "firstName",
                    sort: "asc",
                    width: 200
                },
                {
                    label:"lastName", 
                    field: "lastName",
                    sort: "asc",
                    width: 200
                },
                {
                    label:"cellphone", 
                    field: "cellphone",
                    sort: "asc",
                    width: 200
                },
                {
                    label:"email", 
                    field: "email",
                    sort: "asc",
                    width: 200
                },
                {
                    label:"location", 
                    field: "location",
                    sort: "asc",
                    width: 200
                }
            ],
            rows:this.state.employeeDataBase
        }
        return (<div>
            <h4>List of People</h4>
            <MDBDataTable hover striped data={data}/>
        </div>)
    }
}
export default Main