import React from "react"
import "./components.scss"
import Button from "./Button.jsx"

class BlogComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDeleteClick = function () {
        this.props.openDeleteBlogPopup(this.props.blogDetails)
    }

    handleEditClick = function () {
        this.props.openEditBlogPage(this.props.blogDetails)
    }

    render () {
        return (
            <div className="blog__wrapper">
                <img src={this.props.blogDetails.image} className="blog__wrapper_img" />
                <div className="blog__wrapper_title">{this.props.blogDetails.title}</div>
                <div className="blog__wrapper_date">Created at {this.props.blogDetails.date}</div>
                <div className="blog__wrapper_btn">
                    <Button btnText='Edit' btnColor='orange-btn' onClickFuncCall={this.handleEditClick.bind(this)} />
                    <Button btnText='Delete' btnColor='red-btn' onClickFuncCall={this.handleDeleteClick.bind(this)} />
                </div>
            </div>
        )
    }
}

export default BlogComponent;