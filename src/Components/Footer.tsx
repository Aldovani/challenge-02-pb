import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer>
        <div>
            <div>
                <h1>Stay Fresh</h1>
                <p>compassinhos@gmail.com</p>
                <p>+55 41 99999-9999</p>
            </div>
            <div>
                <div>
                    <ul>
                        <li>Links</li>
                        <li>About us</li>
                        <li>Products</li>
                        <li>Blogs</li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>Comunity</li>
                        <li>About us</li>
                        <li>Products</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <hr/>
        </div>

        <div>
        <img src={logo} alt="Exemplo" />
        <p>Compassinhos ®. All rights reserved.</p>
        </div>
      
    </footer>
  )
}

export default Footer
