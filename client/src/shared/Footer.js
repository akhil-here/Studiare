import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer style={{backgroundColor: '#201140'}}>

        <div className="container text-center d-flex align-items-center justify-content-center">
          <div className="copyright-inner">
            <div className="copyright-cell text-white">
              {' '}
              © 2021
              {' '}
              <span className="highlight">Studiare</span>
              {' '}
              Created with
              {' '}
              <i class="fa fa-heart" aria-hidden="true">
                {' '}
              </i>
              {' '}
              by Akhil, Virag, Nachiket and Vighnesh
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
