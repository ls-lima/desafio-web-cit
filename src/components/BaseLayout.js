import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

/* A base do layout da aplicação, visando reaproveitar o cabeçalho e o rodapé, presentes em todas as telas
* enquanto renderizada o conteúdo dinamicamente conforme esse é selecionado pelo react-router-dom.
*/
const BaseLayout = (props) => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default BaseLayout