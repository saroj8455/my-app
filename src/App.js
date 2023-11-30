function App() {
  const today = new Date();
  return (
    <div className='container d-flex align-items-center  justify-content-center  '>
      <h1 className='display-1 text-primary '>
        Welcome to React Starter Project
        <hr />
        <p className='text-center '>{today.toLocaleDateString()}</p>
      </h1>
    </div>
  );
}

export default App;
