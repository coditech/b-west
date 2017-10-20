import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import { websiteUrl } from "../helpers";

class HomeStoriesAdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      firstStory: {
        title: "Old Title 1",
        slug: "",
        slogan: "",
        content: ""
      },
      secondStory: {
        title: "Old Title 2",
        slug: "",
        slogan: "",
        content: ""
      }
    };
    this.onChange = this.onChange.bind(this);
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    });
  }

  onChange(evt) {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    });
  }

  onBlur(evt) {
    console.log("onBlur event called with event info: ", evt);
  }

  afterPaste(evt) {
    console.log("afterPaste event called with event info: ", evt);
  }

  onSubmit(evt) {
    evt.preventDefault();
    alert(0);
    let formData = new FormData();
    const files = this.filesInput.files;
    for (var key in files) {
      // check if this is a file:
      if (files.hasOwnProperty(key) && files[key] instanceof File) {
        console.log("key ==> ", key);
        formData.append("file", files[key]);
      }
    }

    const form = evt.target;

    // IMAGES MISSING IN THE FORM DATA
    formData.append("title1", form.title1.value);
    formData.append("slogan1", form.slogan1.value);
    formData.append("content1", this.state.firstStory.content);
    formData.append("title2", form.title2.value);
    formData.append("slogan2", form.slogan2.value);
    formData.append("content2", this.state.secondStory.content);

    superagent
      .post(websiteUrl + "api/homeheader")
      .send(formData)
      .end((err, response) => {
        console.log("response", response);
        console.log("response Json", "");
        if (err) {
          //there was an error, handle it here
          alert(-1);
        } else if (response.ok) {
          //this was successful, handle it here
          alert(1);
        }
      })
      .then(x => {
        console.log("x =>", x);
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col-sm-6 col-sm-push-3">Home About Admin Page</h2>
        </div>
        <form onSubmit={event => this.onSubmit(event)}>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="title1" className={" "}>
                Title 1
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"title1"}
                name={"title1"}
                defaultValue={this.state.firstStory.title}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="slogan1" className={" "}>
                Slogan 1
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"slogan1"}
                name={"slogan1"}
                defaultValue={this.state.firstStory.slogan}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="content1" className={" "}>
                Content 1
              </label>
            </div>
            <div className="col-sm-6">
              <CKEditor
                activeClass="p10"
                content={this.state.firstStory.content}
                events={{
                  blur: this.onBlur,
                  afterPaste: this.afterPaste,
                  change: this.onChange
                }}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="image1" className={" "}>
                Image 1
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                id={"image1"}
                name={"image1"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="title2" className={" "}>
                Title 2
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"title2"}
                name={"title2"}
                defaultValue={this.state.secondStory.title}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="slogan2" className={" "}>
                Slogan 2
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"slogan2"}
                name={"slogan2"}
                defaultValue={this.state.secondStory.slogan}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="content2" className={" "}>
                Content 2
              </label>
            </div>
            <div className="col-sm-6">
              <CKEditor
                activeClass="p10"
                content={this.state.secondStory.content}
                events={{
                  blur: this.onBlur,
                  afterPaste: this.afterPaste,
                  change: this.onChange
                }}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="image2" className={" "}>
                Image 2
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                id={"image2"}
                name={"image2"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3 col-sm-push-3">
              <input type="submit"  className={"form-control btn"} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export { HomeStoriesAdminPage };
