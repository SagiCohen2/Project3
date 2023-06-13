import "./InfoCard.css";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { prettyStartDate, prettyEndDate } from '../../Layout/Main/Main';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useState } from "react";

interface VacationProps{
    vacKey:number;
    vacDestination:string;
    vacDescription:string;
    vacStartDate:string;
    vacEndDate:string;
    vacPrice:number;
    // vacImage:string;
}


// checked={isChecked} onChange={handleCheckboxChange}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function InfoCard(props:VacationProps): JSX.Element {

    const [isChecked, setIsChecked] = useState(false);
  
    const handleCheckboxChange = (event:any) => {
      setIsChecked(event.target.checked);
      console.log('Card key:' , props.vacKey)
  
      // Call function to add/remove from MySQL database table
      if (event.target.checked) {
          addToFavorites();
        } else {
          removeFromFavorites();
        }
    };
  
    const addToFavorites = () => {
  
    }
  
    const removeFromFavorites = () => {
      
    }
  
    return (
        <div className="InfoCard">
			<Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
      {props.vacDestination}
      </Typography>
      <Typography level="body2">
            {props.vacDescription}<br/></Typography>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color="error"
        size="medium" checked={isChecked} onChange={handleCheckboxChange}
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
        />
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">{prettyStartDate(props.vacStartDate)}  Till  
            {prettyEndDate(props.vacEndDate)}<br/></Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${props.vacPrice}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          Add
        </Button>
      </Box>
    </Card>
        </div>
    );
}

export default InfoCard;
