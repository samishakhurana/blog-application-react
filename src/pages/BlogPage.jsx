import React from 'react';
import Button from "../components/Button"
import { Link } from 'react-router-dom'

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showImage: false,
            pageType: this.props.location.pathname.split('/')[0]
        }
    }
    saveSelectedImage () {
        console.log(this.refs.file.files[0], " +++++++");
        if (this.refs.file && this.refs.file.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('selected-image').setAttribute("src", e.target.result);
            };
            reader.readAsDataURL(this.refs.file.files[0])
            this.setState({showImage: true});
        }
    }
    checkPageType (page) {
        return this.state.pageType === page;
    }
    render () {
        return (
            <div className="blogPage__wrapper">
                <div className="blogPage__wrapper_image">
                    {!this.state.showImage && 
                    <label htmlFor="imageSelect">
                        <div className="select-image-box">Select your blog image.</div>
                    </label>}
                    {this.state.showImage && <label htmlFor="imageSelect">
                        {<img id="selected-image" />}
                        <p>Click on the image to select another image</p>
                    </label>}
                    <input type="file" id="imageSelect" ref="file" accept=".src, .png, .jpg" onChange={this.saveSelectedImage.bind(this)}/>
                </div>
                <div className="blogPage__wrapper_title">
                    <input type="text" id="blog-title" placeholder="Enter Blog Title" />
                </div>
                <div className="blogPage__wrapper_desc">
                    <textarea rows="10" id="blog-desc" placeholder="Put your thoughts here" />
                </div>
                <div className="blogPage__wrapper_button">
                    <Link to="/">
                        <Button btnText="Cancel" btnColor="aliceblue-btn" onClickFuncCall={() => {}} />
                    </Link>
                    <Button btnText="Create" btnColor="purple-btn" onClickFuncCall={() => {}} />
                </div>
            </div>
        );
    }
}

export default BlogPage;