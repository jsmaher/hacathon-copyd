import React from 'react'


class Footer extends React.Component{
    render(){
        return(
            <div >
        <footer style={{background:"url('http://sheffieldhatters.com/wp-content/uploads/2014/09/backgrounds-for-websites-3.jpg')",marginTop:'10%'}} className="page-footer font-small special-color-dark pt-4">
        {/* Footer Elements */}
        <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-gplus mx-1">
                <i className="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
          {/* Social buttons */}
        </div>
        {/* Footer Elements */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> Darpan 💖 Goswami</a>
        </div>
        {/* Copyright */}
      </footer>
            </div>
        )
    }
}

export default Footer