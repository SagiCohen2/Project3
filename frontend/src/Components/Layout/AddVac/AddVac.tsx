import "./AddVac.css";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Vacation from '../../../Model/Vacation';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";

function AddVac(): JSX.Element {

    const navigate = useNavigate();

    const {
      register,handleSubmit,formState: {errors},
          } = useForm<Vacation>();

    const addNewVacation = (newVacData: Vacation) => {
      axios
        .post(`http://localhost:8080/api/v1/vacations/AddVac`, newVacData)
        .then((response) => {
        console.log(response)
      })
        .catch((err) => {
        console.error(err)
      })
      navigate("/")
    }

    return (
        <div className="AddVac">
            <form onSubmit={handleSubmit(addNewVacation)}>
			<div className="Box"><h3>Add Vacation:</h3><br/>
            <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Destination"
          multiline
          maxRows={4} {...register("destination", { required: true })}
        />
            <br/><hr/>
            <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={9} {...register("description", { required: true })}
        />
            <br/>
            <hr/>
            
            <input type="date" placeholder="Start on:" {...register("startDate", { required: true })}/><hr/>
            <input type="date" placeholder="End on:" {...register("endDate", { required: true })}/>
            
            <hr/>
            <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount" {...register("price", { required: true })}
          /></FormControl><br/>
            Cover image:<br/><input type="file" {...register("vacImage")}></input><hr/>
            <Button fullWidth variant="contained" type="submit">Add Vacation</Button><br/>
            <Button variant="contained" color="error" size="small">Cancel</Button><br/>
            </div>
            </form>
        </div>
    );
}

export default AddVac;
