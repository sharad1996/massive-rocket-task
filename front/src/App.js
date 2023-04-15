import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell} from 'recharts';
import axios from "axios";

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
      <PieChart width={700} height={700}>
          <Pie data={data} dataKey="students" outerRadius={250}>
          {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
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
