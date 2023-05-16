const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return (
    <div class="spinnerContainer">
      <div class="spinner"></div>
      <div class="loader">
        <p>Carregando</p>
        <div class="words">
          <span class="word"></span>
          <span class="word">uma IA</span>
          <span class="word">no seu</span>
          <span class="word">WhatsApp</span>
          <span class="word">RochaGPT,</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
