import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import { websiteUrl } from "../helpers";

class LocationAdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        content:""
    };
    this.onChange = this.onChange.bind(this);
  }

  updateContent(newContent) {
    this.setState({
      content: newContent
    });
  }

  onChange(evt) {
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    });
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
    formData.append("location", form.location.value);
    formData.append("name", form.name.value);
    formData.append("address", this.state.content);
    formData.append("lat", form.lat.value);
    formData.append("long", form.long.value);

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
              <label htmlFor="location" className={" "}>
                Location
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"location"}
                name={"location"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="name" className={" "}>
                Name
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"name"}
                name={"name"}
              />
            </div>
          </div>
                  <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="location" className={" "}>
                Longitude
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"long"}
                name={"long"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="location" className={" "}>
                Latitude
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"lat"}
                name={"lat"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="address" className={" "}>
                Address
              </label>
            </div>
            <div className="col-sm-6">
              <CKEditor
                activeClass="p10"
                content={this.state.content}
                events={{
                  change: this.onChange
                }}
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

export { LocationAdminPage };
