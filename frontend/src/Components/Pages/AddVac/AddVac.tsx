import "./AddVac.css";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Vacation from '../../../Model/Vacation';
import { useNavigate } from 'react-router-dom';
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import { useState } from "react";

function AddVac(): JSX.Element {

    const navigate = useNavigate();

    const {
      register,handleSubmit,formState: {errors},
          } = useForm<Vacation>();

    const addNewVacation = (newVacData: Vacation) => {
      const formdata = new FormData();
      formdata.append('image',file);
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

    const [file, setFile] = useState("");

    const handleFile = (event:any) => {
            setFile(event.target.files[0])
            console.log(event.target.files[0])
    }

    const handleUpload = () => {
        const formdata = new FormData();
        formdata.append('image',file);
        axios.post(`http://localhost:8080/api/v1/vacations/AddVac`,formdata)
        .then((response) => {
          console.log(response)
          console.log(`works`)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    const handleFormSubmit = (data:Vacation) => {
      addNewVacation(data);
      handleUpload();
    }

      // const uploadImage = (newImage:any) => {
      //   console.log(newImage)
      //   const uploadFile = new FormData();
      //   uploadFile.append("newImage", newImage);
      //   axios.post(`http://localhost:8080/api/v1/vacations/uploadFile`,uploadFile),
      //     {
      //       headers: {
      //         "Content-Type":"multipart/form-data"
      //       }
      //     }
      //   };
      

    return (
        <div className="AddVac">
            <form onSubmit={handleSubmit(handleFormSubmit)} encType="multipart/form-data">
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
          <h4>Choose Vacation Image</h4>
            <br/><TextField fullWidth type="file" onChange={(e) => {
            handleFile(e);
            register("vacImage").onChange(e);}}></TextField><hr/>
            {/* <br/><input id='files' type="file" multiple></input><hr/> */}
            <Button variant="contained" type="submit">Add Vacation</Button><hr/>
            <Button variant="contained" color="error" size="small">Cancel</Button><br/>
            </div>
            </form>
        </div>
    );
}

export default AddVac;
