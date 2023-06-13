import { Button, Card, Input } from "antd";
import Track from "./track";

const MyTracks = () => {
  const handleChange = (event) => {
    console.log(event.target.files);
  };

  return (
    <div style={{marginRight: "10px"}}>
      <Input type="file" onChange={handleChange}></Input>
      
        <Track></Track>

    </div>
  );
};

export default MyTracks;
