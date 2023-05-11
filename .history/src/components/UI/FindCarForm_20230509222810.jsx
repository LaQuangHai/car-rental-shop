import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Đi từ" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Đến" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Thời gian thuê" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Thời gian thuê"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">Xe máy lạnh</option>
            <option value="non-ac">Xe không máy lạnh</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Tìm xe</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
