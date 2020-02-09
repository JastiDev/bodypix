import React from 'react';

export default class ResultLinear extends React.Component{

    render(){
        return(
            <div className="row">
                <div className="col-6">
                    <table className="body-model__params-col">
                        <tbody><tr className="body-model__param">
                            <td><span className="text">Neck to upper hip length:</span></td>
                            <td><input id="body-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Outside leg length:</span></td>
                            <td><input id="outseam" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Inside leg length:</span></td>
                            <td><input id="inseam" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Straight body rise:</span></td>
                            <td><input id="crotch-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Outer arm length:</span></td>
                            <td><input id="arm-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Upper hip breadth:</span></td>
                            <td><input id="high-hips-width" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Hip height:</span></td>
                            <td><input id="hip-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Front shoulder width:</span></td>
                            <td><input id="shoulders" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Chest width:</span></td>
                            <td><input id="chest-top" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Jacket length:</span></td>
                            <td><input id="jacket-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Shoulder length:</span></td>
                            <td><input id="shoulder-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Neck base width:</span></td>
                            <td><input id="neck-base" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Waist breadth:</span></td>
                            <td><input id="waist-breadth" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Waist to hip length:</span></td>
                            <td><input id="waist-to-low-hips" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Waist to knee length:</span></td>
                            <td><input id="waist-to-knees" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Back neck point to waist:</span></td>
                            <td><input id="nape-to-waist-centre-back" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Bust height:</span></td>
                            <td><input id="bust-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Shoulder slope:</span></td>
                            <td><input id="shoulder-slope" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side neck point to waist level:</span></td>
                            <td><input id="shoulder-to-waist" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Back neck height:</span></td>
                            <td><input id="back-neck-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                    </tbody></table>
                </div>
                <div className="col-6">
                    <table className="body-model__params-col">
                        <tbody><tr className="body-model__param">
                            <td><span className="text">Back neck point to wrist length:</span></td>
                            <td><input id="back-neck-point-to-wrist-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Upper hip height:</span></td>
                            <td><input id="upper-hip-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Waist Height:</span></td>
                            <td><input id="waist-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Across back width:</span></td>
                            <td><input id="across-back-width" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Outer ankle height:</span></td>
                            <td><input id="outer-ankle-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Knee height:</span></td>
                            <td><input id="knee-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Across back shoulder width:</span></td>
                            <td><input id="across-back-shoulder-width" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Total crotch length:</span></td>
                            <td><input id="total-crotch-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Inside leg height:</span></td>
                            <td><input id="inside-leg-height" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Neck length:</span></td>
                            <td><input id="neck-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Upper arm length:</span></td>
                            <td><input id="upper-arm-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Lower arm length:</span></td>
                            <td><input id="lower-arm-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Upper hip to hip length:</span></td>
                            <td><input id="upper-hip-to-hip-length" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Back shoulder width:</span></td>
                            <td><input id="shoulders-width" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side neck to bust point:</span></td>
                            <td><input id="neck-to-chest" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side bust point to waist level:</span></td>
                            <td><input id="chest-to-waist" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side waist level to ankles:</span></td>
                            <td><input id="waist-to-ankle" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side neck point to knee:</span></td>
                            <td><input id="shoulders-to-knees" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side upper hip level to knee:</span></td>
                            <td><input id="side-upper-hip-level-to-knee" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                        <tr className="body-model__param">
                            <td><span className="text">Side neck point to upper hip:</span></td>
                            <td><input id="side-neck-point-to-upper-hip" type="text" className="input body-model__param-input" value="14.3" readOnly={true}/></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

