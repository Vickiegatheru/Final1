<script>
  function handleLogin() {
    window.location.href = '/login';
  }
</script>

<style>
  :global(body) {
    margin: 0;
  }

  .container {
    width: 360px;
    height: 640px;
    background: linear-gradient(180deg, #001C5E 0%, #084CA0 100%);
    display: grid;
    grid-template-rows: 1fr 1fr 3fr;
  }

  .row1 {
    display: flex;
    justify-content: center;
  }

  #lypa {
    width: 139px;
    height: 60px;
    background: url('img/Image 90.png') no-repeat center center;
    background-size: contain;
    font-style: italic;
    color: white;
    font-size: 500%;
    margin-top: 8%;
    margin-bottom: 12.5%;
  }

  .row2 {
    display: flex;
    align-items: center;
  }

  #privacy {
    width: 196px;
    height: 138px;
    font: normal normal bold 43px/43px Paralucent, sans-serif;
    color: white;
    margin-left: 30%;
    margin-bottom: 8%;
  }

  .row3 {
    background-image: url('/Images/Image 82.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 297px;
  }

  .button-group {
    display: flex;
    gap: 0;
    justify-content: center;
    margin-top: 42%;
  }

  .btn {
    padding: 10px 0;
    font-size: 16px;
    border: 2px solid transparent;
    border-radius: 26px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 40%;
    font-size: 140%;
    margin: 0 5px;
  }

  .login-btn {
    background-color: #28a745;
    color: white;
    border-color: #28a745;
    height: 20%;
  }

  .join-btn {
    background-color: white;
    color: #043682;
    border-color: white;
    height: 20%;
  }

  .btn:hover {
    opacity: 0.9;
  }

  .page-indicators {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 14%;
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: white;
  }

  .dot.active {
    background-color: transparent;
    border: 2px solid white;
  }
</style>

<div class="container">
  <div class="row1">
    <p id="lypa"><b>lypa</b></p>
  </div>

  <div class="row2">
    <p id="privacy"><b>Privacy Made Effortless</b></p>
  </div>

  <div class="row3">
    <div class="button-group">
<button class="btn login-btn" on:click={handleLogin}>Login</button>
      <button class="btn join-btn" on:click={() => goTo('join.html')}>Join</button>
    </div>

    <div class="page-indicators">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </div>
</div>
