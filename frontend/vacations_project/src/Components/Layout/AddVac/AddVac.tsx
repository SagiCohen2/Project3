import "./AddVac.css";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Vacation from '../../../Model/Vacation';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function AddVac(): JSX.Element {
    const navigate = useNavigate();
    const {
        register,handleSubmit,formState: {errors},
    } = useForm<Vacation>();
    const send = (newVacData: Vacation) => {
        console.log(newVacData);
        let vacations:Vacation[]=[];
        vacations = localStorage.getItem("vacations") 
        ? JSON.parse(localStorage.getItem("vacations"))
        : [];
        vacations.push(newVacData);
        localStorage.setItem("vacations",JSON.stringify(vacations));
        navigate("/");
        console.log(vacations);
    }
    
    return (
        <div className="AddVac">
            <form onSubmit={handleSubmit(send)}>
			<div className="Box"><h3>Add Vacation:</h3><br/>
            <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Destination"
          multiline
          maxRows={4} {...register("destination")}
        />
            <br/><hr/>
            <TextField fullWidth
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={9} {...register("description")}
        />
            <br/>
            <hr/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Start on:"  {...register("startDate")}/><hr/>
            <DatePicker label="End on:"  {...register("endDate")}/>
            </LocalizationProvider>
            <hr/>
            <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount" {...register("price")}
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
