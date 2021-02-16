import React, { Component } from "react";
import $ from "jquery";

var Image_Upload_Preview = function (file_input, image_element) {
  /**
   * Checks for supported features
   * @returns {boolean}
   */
  this.is_supported = function () {
    if (!FileReader instanceof Function) {
      // console.error(":( Your browser noes not support the FileReader...");
      return false;
    }
  };

  /**
   * Checks the inputs provided
   * @returns {boolean}
   */
  this.validate_inputs = function () {
    /**
     * Fail if:
     * 1. Not a HTML Input Element
     * 2. Not a File Input Element
     *
     */
    if (
      !$(file_input).get(0) instanceof HTMLInputElement ||
      $(file_input).first().attr("type") !== "file"
    ) {
      console.error("Invalid Element provided...");
      return false;
    }

    /**
     * Fail if:
     * 1. Image Element provided is invalid
     */
    if (!$(image_element).get(0) instanceof HTMLImageElement) {
      console.error("Ảnh Không Hợp Lệ");
      return false;
    }
  };

  /**
   * Only proceed if all the preliminary checks have passed
   */
  if (this.is_supported() || this.validate_inputs()) {
    return false;
  }

  /**
   * Set the file input to only accept images
   */
  $(file_input).attr("accept", "image/*");

  $(file_input).change(function () {
    /**
     * Fail if:
     * 1. 'files' data is non existent
     * 2. 'files' data has no data in it
     */
    if (!this.files || this.files.length < 1) {
      console.error("No files data exists for this file input...");
      return false;
    }

    var file_reader = new FileReader();

    file_reader.onload = function (reader_result) {
      var image_result = null;

      /**
       * Legacy lookup for the result
       */
      image_result =
        reader_result.target && reader_result.target.result
          ? reader_result.target.result
          : image_result;
      image_result =
        !image_result &&
        reader_result.srcElement &&
        reader_result.srcElement.result
          ? reader_result.srcElement.result
          : image_result;

      $(image_element).attr("src", image_result);
    };

    file_reader.readAsDataURL(this.files[0]);
  });
};
$(document).ready(function () {
  /**
   * Example Usages
   */
  new Image_Upload_Preview($("input[type=file]"), $("#img-avatar"));
});

class PreviewImage extends Component {
  render() {
    return (
      <div className="uk-text-center uk-margin-large">
        <div uk-form-custom="true">
          <input type="file"></input>
          <img type="file" className="uk-margin uk-border-rounded" id="img-avatar" alt="Avatar" width="300" height="100"></img>
          <div>
            <button
              className="uk-button uk-button-small uk-button-primary uk-margin uk-border-rounded "
              type="button"
              tabIndex="-1"
            >
              Choose images
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewImage;
