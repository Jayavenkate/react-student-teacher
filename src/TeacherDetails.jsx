import { Card } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export function TeacherDetails({ data, editdata, deletedata }) {
  return (
    <div>
      <Card className="student-details" elevation={3}>
        <h2>Name :{data.Name}</h2>
        

        <p>Gender :{data.Gender}</p>
        <p>Age :{data.Age}</p>
        <p>Place:{data.Place}</p>
        <p>Qualification :{data.Qualification}</p>
        <div className="icon">
          <EditIcon color="secondary" onClick={() => editdata(data.Id)}>
            <EditIcon />
          </EditIcon>
          <DeleteIcon
            className="delete"
            color="error"
            onClick={() => deletedata(data.Id)}
          >
            <DeleteIcon />
          </DeleteIcon>
        </div>
      </Card>
    </div>
  );
}
