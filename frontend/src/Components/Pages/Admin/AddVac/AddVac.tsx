import "./AddVac.css";
import { Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import Vacation from '../../../../Model/Vacation';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";
import { mainReducer } from "../../../Redux/VacationStore";
import { addVacAction } from "../../../Redux/VacationReducer";

function AddVac(): JSX.Element {

  const navigate = useNavigate();

const {
  register,handleSubmit,formState: {errors},
      } = useForm<Vacation>();

const addNewVacation = (newVacData: Vacation) => {
  mainReducer.dispatch(addVacAction(newVacData))
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


const uploadImage = (newImage: any) => {
  console.log(newImage);
  const image = new FormData();
  image.append("sampleFile", newImage);
  axios.post(
    "http://localhost:8080/api/v1/vacations/uploadImage",
    image,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};

  const [image, setImage] = useState("");

  function handleChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // console.log(URL.createObjectURL(file));
      console.log(event.target.files[0]);
    }
  }

  const onSubmit = async (data: any) => {
    try {
      const newVacation: Vacation = {
        vacKey: data.vacKey,
        destination: data.destination,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        price: data.price,
        vacImage: data.file[0].name
      };
      // check if destiny exist in database if it exists cancel the upload and notyf
      addNewVacation(newVacation);
      uploadImage(data.image[0]);
      console.log(newVacation) 
      
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div className="AddVac">
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
            <label>Start Date:</label>
            <input type="date" {...register("startDate", { required: true })}/><hr/>
            <label>End Date: Date:</label>
            <input type="date" {...register("endDate", { required: true })}/>
            <hr/>
            <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount" {...register("price", { required: true })}
          /></FormControl><br/>
          <h4>Choose Vacation Image</h4>
            <br/><TextField fullWidth type="file" name="vacImage" {...register("vacImage", { required: true })} onChange={handleChange}></TextField><hr/>
            {/* <br/><input id='files' type="file" multiple></input><hr/> */}
            <Button variant="contained" type="submit">Add Vacation</Button><hr/>
            <Button variant="contained" color="error" size="small">Cancel</Button><br/>
            </div>
            </form>
        </div>
    );
}

export default AddVac;