import { Button, Card, CardContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { StudentDetails } from "./StudentDetails";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddStudent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const [editId, seteditId] = useState("");
  const [Id, setId] = useState("");
  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Gender, setGender] = useState("");
  const [Place, setplace] = useState("");
  const [Qualification, setQualification] = useState("");
  const [data, setData] = useState([
    {
      Id:"1",
      Name: "Jaya",
      Gender: "Female",
      Age: "26",
      Place: "Nagercoil",
      Qualification: "B.E Electronics",
    },
  ]);
  const addData = () => {
    const newStudent = {
      Id,
      Name,
      Age,
      Gender,
      Place,
      Qualification,
    };
    console.log(newStudent);
    setData([...data, newStudent]);
  };
  const editdata = (Id) => {
    const selected = data.find((data) => data.Id === Id);
    setShow(!show);
    seteditId(Id);
    setName(selected.Name);
    setAge(selected.Age);
    setGender(selected.Gender);
    setplace(selected.Place);
    setQualification(selected.Qualification);
  };
  const deletedata = (Id) => {
    const removedata = data.filter((data) => data.Id != Id);
    setData(removedata);
  };
  const updatedata = () => {
    setShow(!show);
    const editstudent = data.findIndex((data) => data.Id === editId);
    const update = {
      Id,
      Name,
      Age,
      Gender,
      Place,
      Qualification,
    };
    data[editstudent] = update;
    setData([...data]);
  };
  return (
    <div>
      <div>
        <Card className="add-student">
          <CardContent className="student">
          <TextField
              label="Enter Id Number"
              value={Id}
              onChange={(event) => setId(event.target.value)}
              variant="outlined"
            />
            <TextField
              label="Name"
              value={Name}
              onChange={(event) => setName(event.target.value)}
              variant="outlined"
            />
            <TextField
              label="Gender"
              value={Gender}
              onChange={(event) => setGender(event.target.value)}
              variant="outlined"
            />
            <TextField
              label="Age"
              value={Age}
              onChange={(event) => setAge(event.target.value)}
              variant="outlined"
            />
            <TextField
              label="Place"
              value={Place}
              onChange={(event) => setplace(event.target.value)}
              variant="outlined"
            />
            <TextField
              label="Qualification"
              value={Qualification}
              onChange={(event) => setQualification(event.target.value)}
              variant="outlined"
            />
            {show ? (
              <Button
                className="btn"
                color="success"
                variant="contained"
                onClick={() => addData()}
              >
                Add Student
              </Button>
            ) : (
              <Button
                className="btn"
                color="secondary"
                variant="contained"
                onClick={() => updatedata()}
              >
                update
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
      <br />
      <div>
        <h1 className="heading">Student Details</h1>
        <div className="data-con">
          {data.map((data, index) => (
            <StudentDetails
              data={data}
              key={index}
              editdata={editdata}
              deletedata={deletedata}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
