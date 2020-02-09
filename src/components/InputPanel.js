import React from "react";
import * as bodyPix from "@tensorflow-models/body-pix";
import { drawKeypoints, drawSkeleton } from "./demo_util";
import * as posenet from "@tensorflow-models/posenet";

export default class InputPanel extends React.Component {
  constructor(props) {
    super(props); //propStartCalc

    this.state = {
      uniqueName: "nick",
      isCm: true,
      isKg: true,
      height: "170",
      heightFt: "6",
      heightIn: "1",
      weight: "85",
      gender: "female",
      bufFront: "",
      bufSide: "",
      fileFront: undefined,
      fileSide: undefined
    };
  }

  setIsCm(isCm) {
    this.setState({ isCm });
    this.props.propChangeIsCm(isCm);
  }

  setIsKg(isKg) {
    this.setState({ isKg });
  }

  onChangeGender(event) {
    let gender = event.target.value;
    let bufFront = "";
    let bufSide = "";
    this.setState({ gender, bufFront, bufSide });
  }

  doImagePreview(file, isFront) {
    var reader = new FileReader();
    reader.onloadend = e => {
      let buf = e.target.result;
      if (isFront) this.setState({ bufFront: buf, fileFront: file });
      else this.setState({ bufSide: buf, fileSide: file });
    };

    reader.readAsDataURL(file);
  }

  onChangeImage(isFront) {
    return function(event) {
      let input = event.target;
      if (input.files && input.files[0]) {
        this.doImagePreview(input.files[0], isFront);
      }
    };
  }

  onDropImage(isFront) {
    return function(event) {
      if (event.preventDefault) {
        event.preventDefault();
      }
      var dt = event.dataTransfer;
      var files = dt.files;
      if (files && files[0]) {
        this.doImagePreview(files[0], isFront);
      }
      return false;
    };
  }

  isValidData(myParams) {
    return true;
  }

  async loadAndPredict(img) {
    const net = await bodyPix.load({
      architecture: "MobileNetV1",
      outputStride: 8,
      quantBytes: 4
    });

    // const outputStride = 8;
    // const segmentationThreshold = 0.5;
    const partSegmentation = await net.segmentPersonParts(img, {
      flipHorizontal: false,
      internalResolution: "high",
      segmentationThreshold: 0.5,
      maxDetections: 1
    });

    /// The colored part image is an rgb image with a corresponding color from the
    // rainbow colors for each part at each pixel, and black pixels where there is
    // no part.
    const coloredPartImage = bodyPix.toColoredPartMask(partSegmentation);
    const opacity = 0.7;
    const flipHorizontal = false;
    const maskBlurAmount = 0;
    const canvas = document.getElementById("canvas");
    // Draw the colored part image on top of the original image onto a canvas.
    // The colored part image will be drawn semi-transparent, with an opacity of
    // 0.7, allowing for the original image to be visible under.
    bodyPix.drawMask(
      canvas,
      img,
      coloredPartImage,
      opacity,
      maskBlurAmount,
      flipHorizontal
    );

    const ctx = canvas.getContext("2d");
    this.drawPoses(partSegmentation, false, ctx);
  }

  onClickSubmit(event) {
    event.preventDefault();

    // let {uniqueName, isKg, isCm, height, heightFt, heightIn, weight, gender, fileFront, fileSide} = this.state;
    // if(!isKg) weight = Number(weight) * 0.453592;
    // else weight = Number(weight);

    // if(!isCm) height = (Number(heightFt)*12 + Number(heightIn)) * 2.54;
    // else height = Number(height);

    // let isMale = (gender==="male")? true: false;
    // let myParams = {uniqueName, height, weight, isMale};

    // if(this.isValidData(myParams) && fileFront && fileSide) this.props.propStartCalc(myParams, fileFront, fileSide);
    // else alert('Invalid Input');

    let img = document.getElementById("img_male_front");
    this.loadAndPredict(img);
  }

  drawPoses(personOrPersonPartSegmentation, flipHorizontally, ctx) {
    if (Array.isArray(personOrPersonPartSegmentation)) {
      personOrPersonPartSegmentation.forEach(personSegmentation => {
        let pose = personSegmentation.pose;
        if (flipHorizontally) {
          pose = bodyPix.flipPoseHorizontal(pose, personSegmentation.width);
        }
        drawKeypoints(pose.keypoints, 0.1, ctx);
        drawSkeleton(pose.keypoints, 0.1, ctx);
      });
    } else {
      personOrPersonPartSegmentation.allPoses.forEach(pose => {
        if (flipHorizontally) {
          pose = bodyPix.flipPoseHorizontal(
            pose,
            personOrPersonPartSegmentation.width
          );
        }
        drawKeypoints(pose.keypoints, 0.1, ctx);
        drawSkeleton(pose.keypoints, 0.1, ctx);
      });
    }
  }

  render() {
    let {
      uniqueName,
      isKg,
      isCm,
      height,
      heightFt,
      heightIn,
      weight,
      gender,
      bufFront,
      bufSide
    } = this.state;
    return (
      <div>
        <div className="content-block">
          <div className="content-block-header">
            <h3>Enter User Data</h3>
          </div>
          <div className="content-block-body">
            <form>
              <div className="form-group row">
                <label htmlFor="uniquename" className="col-sm-3 col-form-label">
                  Name:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="uniquename"
                    placeholder=""
                    autoComplete="off"
                    value={uniqueName}
                    onChange={e =>
                      this.setState({ uniqueName: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="height" className="col-sm-3 col-form-label">
                  Height:
                </label>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="number"
                        className="form-control height-input__cm "
                        placeholder=""
                        value={height}
                        style={{ display: isCm ? "" : "none" }}
                        onChange={e =>
                          this.setState({ height: e.target.value })
                        }
                      />
                      <div
                        className="height-input__in"
                        style={{ display: isCm ? "none" : "" }}
                      >
                        <input
                          type="number"
                          className="form-control"
                          placeholder=""
                          value={heightFt}
                          onChange={e =>
                            this.setState({ heightFt: e.target.value })
                          }
                        />
                        <input
                          type="number"
                          className="form-control "
                          placeholder=""
                          value={heightIn}
                          onChange={e =>
                            this.setState({ heightIn: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="col-3 pr-2 pl-2 ">
                      <span className="height-input__switch">
                        <button
                          type="button"
                          tabIndex="-1"
                          className={
                            "height-input__btn height-input__btn--cm" +
                            (isCm
                              ? " active js-active-check"
                              : " js-active-check")
                          }
                          onClick={e => this.setIsCm(true)}
                        >
                          cm
                        </button>
                        <button
                          type="button"
                          tabIndex="-1"
                          className={
                            "height-input__btn height-input__btn--in" +
                            (!isCm
                              ? " active js-active-check"
                              : " js-active-check")
                          }
                          onClick={e => this.setIsCm(false)}
                        >
                          in
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label htmlFor="height" className="col-sm-3 col-form-label">
                  Weight:
                </label>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-9">
                      <input
                        type="number"
                        className="form-control height-input__cm "
                        placeholder=""
                        value={weight}
                        onChange={e =>
                          this.setState({ weight: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-3 pr-2 pl-2 ">
                      <span className="height-input__switch">
                        <button
                          className={
                            "height-input__btn height-input__btn--kg" +
                            (isKg ? " active" : "")
                          }
                          type="button"
                          onClick={e => this.setIsKg(true)}
                        >
                          kg
                        </button>
                        <button
                          className={
                            "height-input__btn height-input__btn--lb" +
                            (!isKg ? " active" : "")
                          }
                          type="button"
                          onClick={e => this.setIsKg(false)}
                        >
                          lb
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-3 pt-0">
                    Gender:
                  </legend>
                  <div className="col-sm-9">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input select-gender"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        checked={gender === "female" ? true : false}
                        onChange={this.onChangeGender.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input select-gender"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        checked={gender === "female" ? false : true}
                        onChange={this.onChangeGender.bind(this)}
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
              <canvas id="canvas" style={{ border: "1px solid #d3d3d3" }} />

              <div className="form-group row mt-4">
                <div className="col-sm-6 front_photo upload-iamges">
                  <label
                    htmlFor="front_photo"
                    id="front_photo_input"
                    onDragOver={e => {
                      e.preventDefault();
                      return false;
                    }}
                    onDragEnter={e => {
                      e.preventDefault();
                      return false;
                    }}
                    onDrop={this.onDropImage(true).bind(this)}
                  >
                    <div className="body-model__form-file-preview" id="list">
                      <div
                        className="body-model__form-file-preview"
                        style={{ display: gender === "male" ? "" : "none" }}
                      >
                        <img
                          className="body-model__form-file-preview-real img-fluid"
                          id="img_male_front"
                          src={
                            bufFront === ""
                              ? "static/images/male.svg"
                              : bufFront
                          }
                          alt="Male"
                        />
                      </div>
                      <div
                        className="body-model__form-file-preview"
                        style={{ display: gender === "female" ? "" : "none" }}
                      >
                        <img
                          className="body-model__form-file-preview-real img-fluid"
                          id="img_female_front"
                          src={
                            bufFront === ""
                              ? "static/images/female.svg"
                              : bufFront
                          }
                          alt="Female"
                        />
                      </div>
                      <img
                        className="body-model__form-file-preview-real img-fluid"
                        src="images/front-dummy.jpg"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="body-model__form-file-overflow">
                      <p className="body-model__form-file-pos">Front photo</p>
                      <p className="body-model__form-file-text">
                        Drop files to upload
                        <br /> or click here
                      </p>
                      <i
                        className="body-model__form-file-icon fa fa-camera"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      ></i>
                    </div>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="front_photo"
                    style={{ display: "none" }}
                    onChange={this.onChangeImage(true).bind(this)}
                  />
                </div>
                <div className="col-sm-6 side_photo upload-iamges">
                  <label
                    htmlFor="side_photo"
                    id="side_photo_input"
                    onDragOver={e => {
                      e.preventDefault();
                      return false;
                    }}
                    onDragEnter={e => {
                      e.preventDefault();
                      return false;
                    }}
                    onDrop={this.onDropImage(false).bind(this)}
                  >
                    <div className="body-model__form-file-preview" id="list2">
                      <div
                        className="body-model__form-file-preview"
                        style={{ display: gender === "male" ? "" : "none" }}
                      >
                        <img
                          className="body-model__form-file-preview-real img-fluid"
                          id="img_male_side"
                          src={
                            bufSide === ""
                              ? "static/images/side-male.svg"
                              : bufSide
                          }
                          alt="Male"
                        />
                      </div>
                      <div
                        className="body-model__form-file-preview"
                        style={{ display: gender === "female" ? "" : "none" }}
                      >
                        <img
                          className="body-model__form-file-preview-real img-fluid"
                          id="img_female_side"
                          src={
                            bufSide === ""
                              ? "static/images/side-female.svg"
                              : bufSide
                          }
                          alt="Female"
                        />
                      </div>
                      <img
                        className="body-model__form-file-preview-real img-fluid "
                        src="images/side-dummy.jpg"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className="body-model__form-file-overflow">
                      <p className="body-model__form-file-pos">Side photo</p>
                      <p className="body-model__form-file-text">
                        Drop files to upload
                        <br /> or click here
                      </p>
                      <i
                        className="body-model__form-file-icon fa fa-camera"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      ></i>
                    </div>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="side_photo"
                    style={{ display: "none" }}
                    onChange={this.onChangeImage(false).bind(this)}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="content--continue-btn">
          <button
            id="save-mtm-client"
            className="button button--purple button--lg body-model__btn"
            onClick={this.onClickSubmit.bind(this)}
          >
            <span className="text">Calculate</span>
          </button>
        </div>
      </div>
    );
  }
}
