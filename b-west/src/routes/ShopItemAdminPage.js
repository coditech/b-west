import React from "react";
import superagent from "superagent";
import { websiteUrl } from "../helpers";

class ShopItemAdminPage extends React.Component {
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
    formData.append("name", form.name.value);
    formData.append("status", form.status.value);
    formData.append("price", form.price.value);

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
          <h2 className="col-sm-6 col-sm-push-3">Home Featured Item</h2>
        </div>
        <form onSubmit={event => this.onSubmit(event)}>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="Name" className={" "}>
                Name
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
              <label htmlFor="Status" className={" "}>
                Status
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"status"}
                name={"status"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="Status" className={" "}>
                Price
              </label>
            </div>
            <div className="col-sm-6">
              <input
                className={"form-control"}
                type="text"
                id={"Price"}
                name={"Price"}
              />
            </div>
          </div>
          <div className="row form-group text-center">
            <div className="col-sm-3">
              <label htmlFor="image" className={" "}>
                Image
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

export { ShopItemAdminPage };
