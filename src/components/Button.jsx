import React from "react"
import "./components.scss"

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="button__wrapper">
                {this.props.icon && <i className={this.props.iconClass}/>}
                {this.props.btnText && 
                <button data-color={this.props.btnColor} className={"button__wrapper_btn " + this.props.btnColor} onClick={e => {this.props.onClickFuncCall(e)}}>{this.props.btnText}</button>
                }
            </div>
        )
    }
}

export default Button;