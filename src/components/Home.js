import React from 'react';
import axios from 'axios';

import InputPanel from './InputPanel';
import ResultDemo from './ResultDemo';

let urlAPI = 'http://localhost:8080';

export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            demoResult:{},
            isCm:true,
            isBusy: false
        }
    }

    handleChangeIsCm(isCm){
        this.setState({isCm});
    }

    handleStartCalc(myParams, fileFront, fileSide){       
        const formData = new FormData();
        formData.append('userPhoto', fileFront);
        formData.append('userPhoto', fileSide);
        const config = {headers:{'content-type':'multipart/form-data'}};

        this.setState({isBusy:true});
        document.getElementById("overlay").style.display = "block";

        



        axios.post(urlAPI + "/upload_params", {myParams}).then((resp0)=>{
            axios.post(urlAPI + "/upload_photos", formData, config).then((resp) => {
                let demoResult = resp.data;
                this.setState({demoResult, isBusy:false});
                document.getElementById("overlay").style.display = "none";
            }).catch((err) => {
                console.log(err);
                // if(err.response.status===400) alert("Invalid Photo Input!");
                document.getElementById("overlay").style.display = "none";
            });
        }).catch((err0)=>{
            console.log(err0);
            // if(err0.response.status===400) alert("Invalid Params Input!");
            document.getElementById("overlay").style.display = "none";
        });
    }

    render(){
        return(
            <div className="main-wrapper">
                <div className="container-fluid">
                    <div className="main-page-title">
                        <h1 className="main-content__header-title">Manual upload of the customer</h1>
                    </div>
                    
                    <div className="main-content-wrapper content-section row">
                        <div className="col-md-5">
                            <InputPanel propStartCalc={this.handleStartCalc.bind(this)}
                            propChangeIsCm={this.handleChangeIsCm.bind(this)}/>

                        </div>

                        <div className="col-md-7">
                            <div className="content-block">
                                <div className="content-block-header">
                                    <h3 className='js-measurement-unit'>Measurements ({this.state.isCm?"mm":'mm'})</h3>
                                </div>
                                <div className="content-block-body measurenments-details">
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <ResultDemo demoResult={this.state.demoResult} isCm={this.state.isCm}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="content--continue-btn">
                                <button id="save-mtm-client" className="button button--purple button--lg body-model__btn" type="submit"><span className="text">Add new customer</span></button>
                            </div> */}
                        </div>                       
                    </div>
                </div>
            </div>
        );
    }
}

