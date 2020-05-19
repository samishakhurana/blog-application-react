import React from "react"
import "./components.scss"
import Button from "./Button.jsx"

class DeleteBlogPopup extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="modal">
                <div className="modal__wrapper">
                    <div className="modal__wrapper_text">Delete {this.props.blogName} ?</div>
                    <div className="modal__wrapper_footer">
                        <Button btnText='Cancel' btnColor='aliceblue-btn' onClickFuncCall={this.props.cancelBtnClick} />
                        <Button btnText='Delete' btnColor='red-btn' onClickFuncCall={() => {}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteBlogPopup;