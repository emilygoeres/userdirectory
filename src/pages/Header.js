// This allows react to perform, so everythiung will show uyp on each page

import  React from "react"
function Header(){
    return(
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
              <h1>Employees</h1>
          </a>
        </nav>
    )
}
export default Header