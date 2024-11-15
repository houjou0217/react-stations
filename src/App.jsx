// DO NOT DELETß
import './App.css';
import Description from './Description';
import Header from './Header';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  /*const [dogUrl, setDogUrl] = useState("https://dog.ceo/api/breeds/image/random")
  const next_dog = () => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")*/

  //const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/entlebucher/n02108000_2464.jpg");

  /* fetch:サーバーと非同期処理を行うためのインターフェース 
    fetch()は、URLを引数に取り、リクエストを実行します。
    結果はPromiseとして返されるため、.then()と.catch()を使ってリクエストの結果やエラーを処理する。*/
  /*const dogAPI = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())                          //JSONに変換する
    .then(data => setDogUrl(data.message))            //データの使用
    .catch(error => console.error('Error;',error));   //エラー処理をする
  }
  // async awaitを使って書くこともできる 
  // async : 関数の前につけることでその関数は非同期関数となる。常にPromiseを返す
  // await : asyncの中でのみ使うことができ、Promiseの値が返されるまで処理を一時停止し、その値を返す
  
  /*
  async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data);
  }
  
  fetchData();
  async/awaitの流れ
  
    1 : fetchData関数をasyncで宣言しています。
    2 : await fetch()でfetchが終了するまで待機し、リクエストの結果が変数responseに格納されます。
    3 : 次にawait response.json()が実行され、レスポンスをJSONに変換した結果がdataに格納されます。
      このコードは.then()を使わずに、同期処理のように書くことができるため、コードが読みやすくなります。*/
  return (
    /*<div>
      <header className='head'>Dogアプリ</header>
      <img src={ dogUrl } alt='dog_img'></img>
      <button onClick={ dogAPI }>更新</button>
    </div>*/
    <div>
      <Header />
      <Description />
    </div>
  )
}
