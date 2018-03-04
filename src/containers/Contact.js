
import React from 'react'
//


class Contact extends React.Component {
    constructor(){
      super()

     const onChange = () => {

      }
    }
    render(){
      return(
        <div className="contact">
        <div className="message">
          Have a question, comment or would like to inquire about our services - Please reach out! We'd love to hear from you
          <br/>
         name: <input /><br/>
         email:<input /><br/>
         message: <input type='textbox'/>
          <button type='Submit' >Submit </button>
        </div>
      </div>
    )
      
  }
}

export default Contact

