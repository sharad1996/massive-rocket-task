import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell,Tooltip} from 'recharts';
import axios from "axios";
import Statics from "./Statics";

function App() {
  const [file, setFile] = useState("");

  const onHandleChange = (e) => {
    console.log(e?.target?.files)
    setFile(e?.target?.files);
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data = [
    {name: 'Geeksforgeeks', students: 400 },
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
  ];
  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 }
  ];
  
  const onHandleSubmit = () => {
    console.log("=========== File ===========", file);
    let formData = new FormData();    //formdata object

    formData.append('file', file);   //append the values with key, value pair

    const config = {     
      headers: { 'content-type': 'multipart/form-data' }
    }
    debugger
    axios.post("http://localhost:5555/upload", formData).then(res => {
      console.log("=========== res =========", res);
    })
    .catch(error => {
      console.error(error);
    })
  }

  useEffect(() => {
    // let formData = new FormData();    //formdata object

    // formData.append('file', 'ABC');   //append the values with key, value pair

    // const config = {     
    //   headers: { 'content-type': 'multipart/form-data' }
    // }
    // // debugger
    // axios.post("http://localhost:9000/profile", formData).then(res => {
    //   console.log("=========== res =========", res);
    // })
    // .catch(error => {
    //   console.error(error);
    // })
  },[])
  return (
    <div className="App">
      <PieChart width={1000} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
    </PieChart>
      {/* <PieChart width={700} height={700}>
          <Pie data={data} dataKey="students" outerRadius={250}>
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart> */}
      <form action="http://localhost:5555/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="csvFile" />
        <Button type='submit'> Import </Button> 
      </form>
      {/* <Button
        method= 
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          hidden
          name='uploaded_file'
          onChange={onHandleChange}
        />
      </Button>
      <Button onClick={onHandleSubmit}> Import </Button> */}
    </div>
  );
}

export default App;
