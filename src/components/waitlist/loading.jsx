const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      <div className="loader">
        <p>Carregando</p>
        <div className="words">
          <span className="word"></span>
          <span className="word">uma IA</span>
          <span className="word">no seu</span>
          <span className="word">WhatsApp</span>
          <span className="word">RochaGPT,</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
