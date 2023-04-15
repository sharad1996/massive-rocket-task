import { Button } from '@mui/material';
import { useState } from 'react';
import { PieChart, Pie, Cell,Tooltip} from 'recharts';
import axios from "axios";

function App() {
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
    <div className="App">
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
            />
            <Tooltip />
        </PieChart>
        )
      }
      <form action="#">
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              // accept=".jpg"
              onChange={event => {
                const file = event.target.files[0];
                setFile(file);
              }}
            />
          </div>
        </form>
        <Button onClick={onHandleSubmit}> Import </Button>
    </div>
  );
}

export default App;
