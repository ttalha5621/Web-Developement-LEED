// import "./App.css";
import { useState } from "react";
import { Container, Col, Row, Form, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  let [formData, setFormData] = useState({
    uname: "",
    uemail: "",
    uphone: "",
    umessage: "",
    index: "",
  });

  let [userData, setUserData] = useState([]);

  let getvalue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };
  let handleSubmit = (event) => {
    let currentUserDataForm = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
      index: formData.index,
    };
    // console.log(formData.index)
    if (formData.index === "") {
      let checkFilterUser = userData.filter(
        (v) => v.uemail === formData.uemail || v.uphone === formData.uphone
      );
      if (checkFilterUser.length === 1) {
        // alert("Email or Phone already Exist...");
        toast.error("Email or Phone already Exists...");
      } else {
        let oldUserData = [...userData, currentUserDataForm];
        // console.log(oldUserData);
        setUserData(oldUserData);
        // console.log(userData);
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      }
    } else {
      console.log(formData.index);
      let editIndex = formData.index;
      let oldData = userData;
      let checkFilterUser = userData.filter(
        (v, i) =>
          (v.uemail === formData.uemail || v.uphone === formData.uphone) &&
          i !== editIndex
      );
      if (checkFilterUser === 0) {
        oldData[editIndex]["uname"] = formData.uname;
        oldData[editIndex]["uemail"] = formData.uemail;
        oldData[editIndex]["uphone"] = formData.uphone;
        oldData[editIndex]["umessage"] = formData.umessage;
        setUserData(oldData);
        setFormData({
          uname: "",
          uemail: "",
          uphone: "",
          umessage: "",
          index: "",
        });
      } else {
        toast.error("Email or Phone already Exists...");
      }
    }
    event.preventDefault();
  };
  // console.log(formData);

  let deleteRow = (indexNumber) => {
    let filterDataafterDelete = userData.filter((v, i) => i !== indexNumber);
    setUserData(filterDataafterDelete);
    toast.success("Data Delete");
  };

  let editRow = (indexNumber) => {
    let editData = userData.filter((v, i) => i === indexNumber)[0];
    // console.log(editData)
    editData["index"] = indexNumber;
    // console.log(editData)
    setFormData(editData);
  };

  return (
    <div className="App">
      <Container fluid>
        <ToastContainer />
        <Container>
          <Row>
            <Col className="text-center py-5">
              <h1>Enquiry Now</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              {userData.length}
              <Form onSubmit={handleSubmit}>
                <div className="pb-3">
                  <label className="form-label" htmlFor="Name">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.uname}
                    name="uname"
                    className="form-control"
                    onChange={getvalue}
                  />
                </div>
                <div className="pb-3">
                  <label className="form-label" htmlFor="Email">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.uemail}
                    name="uemail"
                    className="form-control"
                    onChange={getvalue}
                  />
                </div>
                <div className="pb-3">
                  <label className="form-label" htmlFor="Phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={formData.uphone}
                    name="uphone"
                    className="form-control"
                    onChange={getvalue}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    value={formData.umessage}
                    name="umessage"
                    rows={3}
                    onChange={getvalue}
                  />
                </div>

                <button className="btn btn-primary">
                  {formData.index !== "" ? "Update" : "Save"}
                </button>
              </Form>
            </Col>
            <Col lg={7}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length >= 1 ? (
                    userData.map((obj, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{obj.uname}</td>
                          <td>{obj.uemail}</td>
                          <td>{obj.uphone}</td>
                          <td>{obj.umessage}</td>
                          <td>
                            <Button
                              className="btn btn-secondary m-1"
                              onClick={() => editRow(i)}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button
                              className="btn btn-danger m-1"
                              onClick={() => deleteRow(i)}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />{" "}
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No Data Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
