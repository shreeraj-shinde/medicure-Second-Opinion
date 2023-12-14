import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import { Select, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalComponent = (props) => {
  const navigate = useNavigate();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const handleOk = async () => {
    const res = await axios.post("http://127.0.0.1:5000/prescribe", {
      array: [props.disease, gender, Number(age)],
    });
    console.log(res);
    props.setMedicine(res.data);
    navigate("/v1/medicine_prescribtion");
    // props.setIsModalOpen(false);
  };
  const handleCancel = () => {
    props.setIsModalOpen(false);
  };
  const handleChange = (value) => {
    setGender(value);
  };
  return (
    <>
      <Modal
        title="Enter Details"
        open={props.isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Proceed"
      >
        <Input
          placeholder="Basic usage"
          onChange={(e) => setAge(e.target.value)}
          style={{ marginBottom: "14px" }}
        />

        <Select
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: 0,
              label: "Female",
            },
            {
              value: 1,
              label: "Male",
            },
          ]}
        />
      </Modal>
    </>
  );
};
export default ModalComponent;
