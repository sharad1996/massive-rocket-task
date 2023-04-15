import { Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { PieChart, Pie, Cell,Tooltip} from 'recharts';
import axios from "axios";
import useStyles from "./Styles";

function App() {
  const styles = useStyles();
  const [file, setFile] = useState("");
  const [data, setData] = useState(null);
  const onHandleChange = (e) => {
    console.log(e?.target?.files)
    setFile(e?.target?.files);
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const onHandleSubmit = () => {
    let formData = new FormData(); 

    formData.append('file', file);

    axios.post("http://localhost:5555/upload", formData).then(res => {      
      if (res?.data?.data) {
        setData(res.data.data);
      }
    })
    .catch(error => {
      console.error(error);
    })
  }

  return (
    <Box className={styles.container} sx={{

    }}>
      <Box>
        <form action="#">
            <Box className="flex">
              <Box sx={{ marginBottom: 1}}>
                <label htmlFor="file">
                  <Typography variant='h3'> Import your file </Typography>  
                </label>
                   </Box>
              <Box>
                <input
                  type="file"
                  id="file"
                  // accept=".jpg"
                  onChange={event => {
                    const file = event.target.files[0];
                    setFile(file);
                  }}
                />
              </Box>
            </Box>
          </form>
          <Button sx={{ marginTop: 2}} variant='contained' size='large' onClick={onHandleSubmit}> Import </Button>
      </Box>
      <Box>
        {
          data && (
            <PieChart width={1000} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
          </PieChart>
          )
        }
      </Box>
    </Box>
  );
}

export default App;
