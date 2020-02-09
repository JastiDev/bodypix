import React from 'react';

export default class ResultVolume extends React.Component{
    
    render(){
        return(
            <div className="row">
                <div className="col-6">
                    <table className="body-model__params-col">
                        <tbody>
                            <tr className="body-model__param">
                                <td><span className="text">Bust girth:</span></td>
                                <td><input id="chest" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Under bust girth:</span></td>
                                <td><input id="under-bust-girth" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Upper chest girth:</span></td>
                                <td><input id="upper-chest-girth" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Waist girth:</span></td>
                                <td><input id="waist" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Upper hip girth:</span></td>
                                <td><input id="high-hips" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Hip girth:</span></td>
                                <td><input id="low-hips" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Upper-arm girth:</span></td>
                                <td><input id="bicep" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Knee girth:</span></td>
                                <td><input id="knee" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Ankle girth:</span></td>
                                <td><input id="ankle" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-6">
                    <table className="body-model__params-col">
                        <tbody>
                            <tr className="body-model__param">
                                <td><span className="text">Wrist girth:</span></td>
                                <td><input id="wrist" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Calf girth:</span></td>
                                <td><input id="calf" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Thigh girth:</span></td>
                                <td><input id="thigh" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Neck base girth:</span></td>
                                <td><input id="neck" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Neck girth:</span></td>
                                <td><input id="neck-girth" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Forearm girth flexed:</span></td>
                                <td><input id="forearm" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                            <tr className="body-model__param">
                                <td><span className="text">Elbow girth:</span></td>
                                <td><input id="elbow-girth" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>

                            <tr className="body-model__param">
                                <td><span className="text">Abdomen girth:</span></td>
                                <td><input id="abdomen" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>

                            <tr className="body-model__param">
                                <td><span className="text">Armscye girth:</span></td>
                                <td><input id="armscye-girth" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}
