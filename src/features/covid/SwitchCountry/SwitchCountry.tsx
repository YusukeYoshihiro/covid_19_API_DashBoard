import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NativeSelect, FormControl } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import { fetchAsyncGetDaily, selectCountry } from '../covidSlice';

// import { fetchAsyncGetCountry } from '../covidSlice'; 

const slugApiUrl = "https://api.covid19api.com/countries";


const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  }
}))


const SwitchCountry:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [slugs, setSlug] = useState<string[]>([]);
  const country = useSelector(selectCountry);
  
  useEffect(() => {
    const getContries= async ()=> {
      const {data} = await axios.get(slugApiUrl);
      const countries:string[] = [];
      
      for(let i=0; i< data.length; i++){
        countries.push(data[i].Slug)
      }
      console.log(slugs);
      await setSlug(countries)
      
    }
    getContries();
  }, [])

  // const countries:string[] = [];
   
  console.log(slugs)
  

  
  return (
    <div>
       <FormControl className={classes.formControl}>
         <NativeSelect
          onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>
            dispatch(fetchAsyncGetDaily(e.target.value))
          }
         >
         <option value={country} > {`${country.charAt(0).toUpperCase()}${country.substring(1).toLowerCase()}`}</option>
          {slugs.sort().map((slug, index)=>(
            <option key={index} value={slug} defaultValue="canada">
                {`${slug.charAt(0).toUpperCase()}${slug.substring(1).toLowerCase()}`}
            </option>
          ))}
         </NativeSelect>
    </FormControl>
    </div>
  )
}

export default SwitchCountry
