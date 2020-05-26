import React from "react"
import "./pages.scss"
import BlogComponent from "../components/BlogComponent"
import blogImage from "../assets/blog.jpg"
import DeleteBlogPopup from "../components/DeleteBlogPopup"
import Button from "../components/Button"
import { Link, Redirect } from "react-router-dom"

class HomePage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allBlogs: [
        {
          blogId: 'b1',
          title: 'blog1',
          date: '12/05/2020',
          image: blogImage,
          description: 'This is blog 1'
        },
        {
          blogId: 'b2',
          title: 'blog2',
          date: '13/05/2020',
          image: blogImage,
          description: 'This is blog 2'
        },
        {
          blogId: 'b3',
          title: 'blog3',
          date: '14/05/2020',
          image: blogImage,
          description: 'This is blog 4'
        },
        {
          blogId: 'b4',
          title: 'blog4',
          date: '12/05/2020',
          image: blogImage,
          description: 'This is blog 4'
        },
        {
          blogId: 'b5',
          title: 'blog5',
          date: '13/05/2020',
          image: blogImage,
          description: 'This is blog 5'
        },
        {
          blogId: 'b6',
          title: 'blog6',
          date: '14/05/2020',
          image: blogImage,
          description: 'This is blog 6'
        }
      ],
      deleteBtnFlag: false,
      selectedBlogName: '',
      selectedBlog: ''
    }
  }

  openDeleteBlogPopup = function (blogDetails) {
    this.setState({selectedBlog: blogDetails})
    this.setState({deleteBtnFlag: true})
  }

  openEditBlogPage = function (blogDetails) {
    this.setState({selectedBlog: blogDetails})
  }

  cancelBtnClick = function () {
    this.setState({deleteBtnFlag: false})
  }

  redirectToCreatePage = function () {
    this.props.history.push('/create')
  }

  render () {
    return (
      <div className="homePage__wrapper">
        <div className="homePage__wrapper_all-blogs">
          {this.state.allBlogs.map((blog) => {
            return (
              <BlogComponent blogDetails = {blog} openDeleteBlogPopup = {this.openDeleteBlogPopup.bind(this)} openEditBlogPage={this.openEditBlogPage.bind(this)}/>
            )
          })}
        </div>
        <div className="homePage__wrapper_create-blog">
          {/* <Link to="/create"> */}
            <Button btnText="Create" btnColor="create-purple-btn" onClickFuncCall={this.redirectToCreatePage.bind(this)}/>
          {/* </Link> */}
        </div>
        {this.state.deleteBtnFlag && <DeleteBlogPopup blogName = {this.state.selectedBlog.title} cancelBtnClick={this.cancelBtnClick.bind(this)} />}
      </div>
    )
  }
}

export default HomePage;