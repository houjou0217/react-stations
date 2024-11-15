// @ts-check
import react, {useState, useEffect} from 'react';
import { DogImage } from './DogImage'
export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/entlebucher/n02108000_2464.jpg");
  const dogAPI = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())                          //JSONに変換する
    .then(data => setDogUrl(data.message))            //データの使用
    .catch(error => console.error('Error;',error));   //エラー処理をする
  }
  return (
    <div>
      <DogImage imageUrl ={dogUrl}></DogImage>
      <button onClick={dogAPI}>更新</button>
    </div>
  );
}

export default Description;
