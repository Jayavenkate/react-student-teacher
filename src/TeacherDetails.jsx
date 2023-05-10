import { Card } from "@mui/material";

export function TeacherDetails({data,editdata,deletedata}) {
  return (
    <div>
      <Card className="student-details" elevation={3}>
        <h2>Name :{data.Name}</h2>
        <p>Gender :{data.Gender}</p>
        <p>Age :{data.Age}</p>
        <p>Place:{data.Place}</p>
        <p>Qualification :{data.Qualification}</p>
        <button onClick={() => editdata(data.Id)}>edit</button>
        <button onClick={() => deletedata(data.Id)}>delete</button>
      </Card>
    </div>
  );
}
