import React from 'react';
import CKEditor from "react-ckeditor-component";
import superagent from 'superagent';

class HomeHeaderAdminPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            title: 'Old Title',
            content: 'content',
            actionUrl: '',
            actionText: '',

        };
        this.onChange = this.onChange.bind(this);
        this.state = {}
    }

    updateContent(newContent) {
        this.setState({
            content: newContent
        })
    }

    onChange(evt) {
        console.log("onChange fired with event info: ", evt);
        var newContent = evt.editor.getData();
        this.setState({
            content: newContent
        })
    }

    onBlur(evt) {
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt) {
        console.log("afterPaste event called with event info: ", evt);
    }

    onSubmit() {
        let formData = new FormData();
        const files = this.filesInput.files;
        for (var key in files) {
            // check if this is a file:
            if (files.hasOwnProperty(key) && files[key] instanceof File) {
                formData.append(key, files[key]);
            }
        }
        // formData.append('title', this, );
        superagent.post('your_ajax_url')
            .send(formData)
            .end((err, response) => {
                if (err) {
                    //there was an error, handle it here
                } else if (response.ok) {
                    //this was successful, handle it here
                }
            });

    }

    render() {
        return (
            <div>
                <h2>Home Header Admin Page</h2>

                <form onSubmit={(event) => this.onSubmit(event)}>
                    <div className="row form-group text-center">
                        <div className="col-sm-6">
                            <label htmlFor="title" className={' '}>Title</label>
                        </div>
                        <div className="col-sm-6">
                            <input className={'form-control'} type="text" id={'title'} name={'title'}
                                   value={this.state.title}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-6">
                            <label htmlFor="subTitle" className={' '}>Sub Title</label>
                        </div>
                        <div className="col-sm-6">
                            <input className={'form-control'} type="text" id={'subTitle'} name={'subTitle'}
                                   value={this.state.title}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-6">
                            <label htmlFor="subTitle" className={' '}>Sub Title</label>
                        </div>
                        <div className="col-sm-6">
                            <CKEditor
                                activeClass="p10"
                                content={this.state.content}
                                events={{
                                    "blur": this.onBlur,
                                    "afterPaste": this.afterPaste,
                                    "change": this.onChange
                                }}
                            />
                        </div>
                    </div>
                    <span><input type={'checkbox'} name={'actionButton'} value={'false'}/>Select if action button is available
                    on Home Header</span>
                    <div className="row form-group text-center">
                        <div className="col-sm-6">
                            <label htmlFor="actionUrl" className={' '}>Action Url</label>
                        </div>
                        <div className="col-sm-6">
                            <input className={'form-control'} type="text" id={'actionUrl'} name={'subTitle'}
                                   value={this.state.actionUrl}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-6">
                            <label htmlFor="actionText" className={' '}>Action Text</label>
                        </div>
                        <div className="col-sm-6">
                            <input className={'form-control'} type="text" id={'actionText'} name={'subTitle'}
                                   value={this.state.actionText}/>
                        </div>
                    </div>
                    <div className="row form-group text-center">
                        <div className="col-sm-6">
                            <label htmlFor="image" className={' '}>Header image</label>
                        </div>
                        <div className="col-sm-6">
                            <input className={'form-control'} type="file" ref={(input) => {
                                this.filesInput = input;
                            }} id={'image'} name={'file'}/>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export {HomeHeaderAdminPage}