import React, { Component } from "react";
import '../Footer/footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="uk-footer">
          <nav className="uk-container uk-padding" uk-navbar="true">
            <div
              className="uk-width-1-1 uk-text-center"
              style={{ marginLeft: "-15px" }}
              uk-grid="true"
            >
              <div className="uk-navbar-left uk-text-center">
                <ul className="uk-navbar-nav ">
                  <li className="uk-link-reset">
                    <div className="uk-navbar-left uk-text-light uk-text-bold">
                      <a href="123.html">
                        <i className="lar la-copyright" />
                        2020 ĐHL HUE,Đã đã đăng kí bản quyền.
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="uk-navbar-right uk-text-center">
                <ul className="uk-navbar-nav ">
                  <li className="uk-link-reset">
                    <div className="uk-navbar-left uk-text-light uk-text-bold">
                      <a href="123.html">
                        Chính sách bảo mật - Điều khoản &amp; Điều Kiện
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;
