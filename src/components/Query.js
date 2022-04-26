import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FilterData from './FilterData';
import './CSS/Query.css'



function Query(props) {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'green', 
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#4B7BE5',
          },
          '&:hover fieldset': {
            borderColor: '#4B7BE5',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'green',
          },
        },
      });

    const [query, setQuery] = React.useState(' ');
    const [submitQuery, setSubmitQuery] = React.useState(0);

    const handleChange = async (event) => {
        setQuery(event.target.value);
      };
    
    const handleSubmit = (query) => {
        console.log(query)
        if(query == 1){
            setSubmitQuery(query)
        }
        else if(query == 2){
          setSubmitQuery(query)
      }
      else if(query == 3){
        setSubmitQuery(query)
    }
    } 


    const queries = [
       {
        label : "select * from customers",
        value: 1
       },
       {
        label : "select * from customers where contactTitle= 'Owner'",
        value: 2
       },
       {
        label : "select * from customers where country= 'Mexico'",
        value: 3
       }
    ]


    return (
        <div>
            <center>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '1fr 1fr', width: '400px' },
                        gap: 2,
                    }}
                    style = {{display: "block", marginTop: '10%'}}
                >
                    <CssTextField label="Select a SQL Query" id="custom-css-outlined-input" select value={query} onChange={(e) => handleChange(e)} style={{textAlign: 'center'}} fullWidth >
                    {queries.map((option) => (
                        <MenuItem  key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </CssTextField>
                    <div className='container'>
                      <div className='center'>
                    <Stack direction="row" spacing={2} style={{marginTop: '5px', marginBottom :'5px'}}>
                        <Button variant="contained" onClick={handleSubmit.bind(this,query)}>Submit</Button>
                    </Stack>
                    </div>
                    </div>
                </Box>
                {submitQuery === 1 && <FilterData query={submitQuery} />}
                {submitQuery === 2 && <FilterData query={submitQuery} />}
                {submitQuery === 3 && <FilterData query={submitQuery} />}
            </center>
        </div>
    )
    
}

export default Query