import "./EditVac.css";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import Vacation from "../../../../Model/Vacation";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function EditVac(): JSX.Element {

    const navigate = useNavigate();
    const {
        register,handleSubmit,formState: {errors},
            } = useForm<Vacation>();

            const EditVacation = (newVacData: Vacation) => {
                axios
                  .put(`http://localhost:8080/api/v1/vacations/EditVac`, newVacData)
                  .then((response) => {
                  console.log(response)
                })
                  .catch((err) => {
                  console.error(err)
                })
                navigate("/")
              }
            
    return (
        <div className="EditVac">
			<div className="Box"><h3>Edit Vacation:</h3><hr/>
            <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Destination"
          multiline
          maxRows={4} {...register("destination", { required: false })}
        />
            <br/><hr/>
            <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={9} {...register("description", { required: false })}
        />
            <br/>
            <hr/>
            
            <input type="date" placeholder="Start on:" {...register("startDate", { required: false })}/><hr/>
            <input type="date" placeholder="End on:" {...register("endDate", { required: false })}/>
            
            <hr/>
            <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount" {...register("price", { required: false })}
          /></FormControl><br/>
            Cover image:<br/><input type="file" {...register("vacImage")}></input><hr/>
            <Button fullWidth variant="contained" type="submit">Update Vacation</Button><hr/>
            <Button variant="contained" color="error" size="small">Cancel</Button><br/>
            </div>
        </div>
    );
}

export default EditVac;
