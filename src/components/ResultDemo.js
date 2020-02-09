import React from 'react';

export default class ResultDemo extends React.Component{
    // constructor(props){ // demoResult, fileResultFront, fileResultSide
    //     super(props);
    // }

    render(){
        
        let bodyParams = this.props.demoResult.bodyParams; 
        if(bodyParams===undefined) bodyParams={};
        console.log(bodyParams);

        let labelmaps = [
            {"label":"Neck Size", "field":"Neck_Round_Length"}, 
            {"label":"Bicep Size", "field":"Arm_Round_Length"}, 
            {"label":"Forearm Size", "field":""}, 
            {"label":"Waist", "field":"Waist_Round_Length"}, 
            {"label":"Hip Size", "field":"Hip_Round_Length"}, 
            {"label":"Thigh Size", "field":""}, 
            {"label":"Calf Size", "field":""}
        ];

        // let url0 = urlAPI +"/"+ demoResult.url0;
        // let url1 = urlAPI +"/"+ demoResult.url1;

        return(
            <div className="row">
                <div className="col-6">
                    <table className="body-model__params-col">
                        <tbody>
                            {labelmaps.map((lagelmap, i)=>{
                                return(
                                    <tr key={i} className="body-model__param">
                                        <td><span className="text">{lagelmap.label}:</span></td>
                                        <td><div className="input body-model__param-input" style={{paddingTop:'5px'}}>{(bodyParams[lagelmap.field]===null)?(''):(bodyParams[lagelmap.field])}</div></td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
{/*                 
                <div className="col-6">
                    <img className= "w3-border w3-padding" src={url0} style={{width:"100%"}} alt=""/>
                    <img className= "w3-border w3-padding" src={url1} style={{width:"100%"}} alt=""/>
                </div> */}
            </div>
        );
    }
}
