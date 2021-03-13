import React, {useEffect} from 'react';
import styles from './DashBoard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
 } from '@material-ui/core';

 import { useSelector, useDispatch } from 'react-redux';
 import { fetchAsyncGetDaily, selectDaily } from '../covidSlice';
import SwitchCountry from '../SwitchCountry/SwitchCountry';
import Cards from '../Cards/Cards';
import Chart from '../Chart/Cart';
import PieChart from '../PieChart/PieChart';

 const useStyles = makeStyles((theme) => ({
  // "flexGrow" shows expanding of ratio, 
  // In this case, flexGrow:1 means occupy for whole areas.
   barColor: {backgroundColor:'rgb(47, 126, 109)'},
   title:{
     flexGrow:1,
   },
   content: {
     marginTop:85,
   },
 }));
 
const Dashboard:React.FC = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
   const daily = useSelector(selectDaily)

   useEffect(() => {
    dispatch(fetchAsyncGetDaily("canada"));
  }, [dispatch])
  return (
    <main>
       <AppBar position="absolute" color="secondary">
        <Toolbar className={classes.barColor}>
          <Typography variant="h6" className={classes.title+" "+styles.navFont} >
          <i className="fas fa-virus"></i>&nbsp;
            COVID-19 Live Dashboard
          </Typography>
              <div>
               <Typography variant="body1" className={styles.navFont}>
                 <i className="fas fa-calendar-alt"></i>&nbsp;{new Date(daily[daily.length -1].Date).toDateString()}
               </Typography>
               </div>
        </Toolbar>
      </AppBar>

      <Container className={classes.content}>
         <div className={styles.container}>
           <SwitchCountry />
         </div>
         <Grid container spacing={3}>
           <Grid item xs={12} md={12}>
           <Cards />
           </Grid>

           <Grid item xs={12} md={7}>
           <Chart />
           </Grid>

           <Grid item xs={12} md={5}>
           <PieChart />
           </Grid>
         </Grid>
      </Container>
    </main>
  )
}

export default Dashboard
