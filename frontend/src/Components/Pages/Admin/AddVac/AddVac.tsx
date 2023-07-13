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
    console.log(newVacData)
  })
    .catch((err) => {
    console.error(err)
  })
  navigate("/")
}


const uploadImage = async (file:File) => {
  console.log("File received in uploadImage:", file);

  const formData = new FormData();
  formData.append('vacImage', file);

  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/vacations/uploadImage",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Image uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

  const [image, setImage] = useState("");

  function handleChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      // console.log(URL.createObjectURL(file));
      console.log("File name",event.target.files[0].name);
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
        vacImage: data.vacImage[0].name
      };
      // check if destiny exist in database if it exists cancel the upload and notyf
      addNewVacation(newVacation);
      await uploadImage(data.vacImage[0]);
      console.log(data.vacImage[0])
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
            <label>End Date:</label>
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
            <br/>
            {/* <TextField fullWidth type="file" name="vacImage" {...register("vacImage", { required: true })} onChange={handleChange}></TextField> */}
            <hr/>
            <br/>
            <input type="file" name="vacImage" {...register("vacImage")} onChange={handleChange}></input>
            <hr/>
            <Button variant="contained" type="submit">Add Vacation</Button><hr/>
            <Button variant="contained" color="error" size="small">Cancel</Button><br/>
            </div>
            </form>
        </div>
    );
}

export default AddVac;