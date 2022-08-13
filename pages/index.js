import HomePage from './../components/HomePage/index';

export default function Home() {
  return (
    <>
      <HomePage />
      <style global jsx>{`
       html {
          scroll-behavior: smooth;
          font-family: 'Montserrat', sans-serif;
        }
        body{
          box-sizing: border-box;
          background-color: rgb(252, 243, 240);
          
        }
        hr{
          color:white;
          height: 100px;
        }
        
      `}</style>
    </>
  )
}
