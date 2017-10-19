import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import { websiteUrl } from "../helpers";

class AboutUsAdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      content: ""
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
    formData.append("title", form.title.value);
    formData.append("content", this.state.content);

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
          <h2 className="col-sm-6 col-sm-push-3">About Us Page Section</h2>
        </div>
        <form onSubmit={event => this.onSubmit(event)}>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="Name" className={" "}>
                Title
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"Name"}
                name={"Name"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
          <div className="col-sm-3">
            <label htmlFor="content" className={" "}>
              Content
            </label>
          </div>
          <div className="col-sm-6">
            <CKEditor
              activeClass="p10"
              content={this.state.content}
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
              <label htmlFor="image" className={" "}>
                Background Image
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                id={"image"}
                name={"image"}
              />
            </div>
          </div>
          <input type="submit" method="post" />
        </form>
      </div>
    );
  }
}

export { AboutUsAdminPage };
