import React from "react";
import CKEditor from "react-ckeditor-component";
import superagent from "superagent";
import { websiteUrl } from "../helpers";

class HeadersAdminPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        villagersStoriesHeader:"old villagersStoriesHeader title",
        productsPageHeader:"old productsPageHeader title",
        contactusHeader:"old about us header",
        findaStoreHeader:"old find a store header"
    };

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
    formData.append("subTitle", form.subTitle.value);
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
          <h2 className="col-sm-6 col-sm-push-3">Headers Admin Page</h2>
        </div>
        <form onSubmit={event => this.onSubmit(event)}>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="title" className={" "}>
                Village Stories Header
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"villagers"}
                name={"villager"}
                defaultValue={this.state.villagersStoriesHeader}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="title" className={" "}>
              Products Page Header
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"products"}
                name={"products"}
                defaultValue={this.state.productsPageHeader}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="title" className={" "}>
                Contact Us Page Header
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"contactus"}
                name={"contactus"}
                defaultdefaultValue={this.state.contactusHeader}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="title" className={" "}>
                Find A Store Page Header
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"findastore"}
                name={"findastore"}
                defaultValue={this.state.findaStoreHeader}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3 col-sm-push-3">
              <input type="submit" className={"form-control btn"} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export { HeadersAdminPage };
