import React , {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import {getPosts} from './actions/posts';
import Posts from "./components/Posts/Posts";
import memories from "./Images/memories.jpg";
import './index.css'
import Form from './components/Form/Form';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[currentId,dispatch]);

  return (
<Container maxWidth="lg">
<AppBar className="appBar" position="static" color="inherit">
<Typography className="heading" variant="h2" align="center">Attendance Portal</Typography>
<img className="image" src={memories} alt="icon" height="60"/>
</AppBar>
<Grow in>
    <Container>
      <Grid container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
      
        <Posts setCurrentId={setCurrentId}/>
      
      </Grid>
      <Grid item xs={12} sm={4}>
        
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      
      </Grid>
      </Grid>
      </Container>
</Grow>
</Container>
  )
};

export default App