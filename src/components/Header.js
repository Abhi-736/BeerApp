import React from 'react'

const Header = (props) => {

const {handleSearch}=props;

const handleSubmit=(e)=>{
e.preventDefault();
handleSearch(e.target.searchInput.value);


}
    return (<>
      <nav className="navbar mb-3 navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">BeerApp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <form className="d-flex" role="search" onSubmit={(e)=>{handleSubmit(e)}}>
            <input className="form-control me-2" type="search" placeholder="Search" name="searchInput" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    </>
    )
  }
  
  export default Header