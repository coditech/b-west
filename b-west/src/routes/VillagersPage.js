import React from 'react';
import Header from "../components/Header";
import SmallSlider from "../components/SmallSlider";

class VillagersPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            villagersStories: props.villagersStories,
            villagersStoriesHeader: {
                ...props.villagersStoriesHeader,
                actionButton: {
                    show: false
                }


            }
        }
    }

    render() {

        const {villagersStoriesHeader, villagersStories} = this.state;
        return (
            <div className={'villagers item-detail-page '}>
                <Header {...villagersStoriesHeader} additionalClass={'villagers'}/>
                <div className={'villagersStories margin-top-50 container'}>
                    {
                        villagersStories.map((storie, index) => {
                                const floatRight = index % 2 === 0 ? 'floatRight' : '';
                                return (
                                    <div key={index}>
                                        <div className={'story row margin-top-50'} key={index} id={storie.slug}>
                                            <div className={'col-sm-5 ' + floatRight}>
                                                <SmallSlider images={storie.images}/>
                                            </div>
                                            <div className="col-sm-6 col-sm-push-1">
                                                <div className="heading-block no-margin-bottom margin-top-0"><span
                                                    className="margin-bottom-15 margin-top-20">{storie.slogan}</span>
                                                    <h2 className="margin-bottom-20 margin-top-1">{storie.title}</h2>
                                                </div>
                                                <div dangerouslySetInnerHTML={{__html: storie.content.full}}
                                                     className={'storie-content'}/>

                                            </div>
                                        </div>
                                        {villagersStories.length !== parseInt(index + 1,10) ? <hr/> : null}

                                    </div>

                                )
                            }
                        )
                    }
                </div>
                <div className="margin-top-100"/>
            </div>
        )
    }
}

export {VillagersPage};