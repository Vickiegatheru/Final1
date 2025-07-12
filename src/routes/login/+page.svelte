<script>
  let phone = '';
  let password = '';

  function handleSignIn() {
    if (!phone.trim() || !password.trim()) {
      alert('Please enter both phone number and password.');
      return;
    }

    console.log('Phone:', phone);
    console.log('Password:', password);
    alert(`Logging in with:\nPhone: ${phone}\nPassword: ${password}`);

    window.location.href = "https://accounts.google.com/signin";  
  }
 
  function goBack() {
    history.back();
  }

</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  :global(body) {
        background: #F5F5F5;

    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 20px;
    font-family: 'PT Sans', sans-serif;
  }

  .column2 {
    grid-column-start: 2;
    display: grid;
    grid-template-rows: 1.5fr auto auto auto auto 3fr;
    justify-items: center;
    gap: 5px;
    width: 390px;
    height: 100vh;
    background: #F5F5F5;
    padding-top: 20px;
    box-sizing: border-box;
  }

  .top {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    padding-left: 20px;
  }

  #arrow {
    margin-left: 4%;
    display: inline-block;
    width: 0;
    height: 0;
    margin-bottom: 18%;
    font-size: 150%;
  cursor: pointer;
  }

  .paragraph {
    width: 100%;
    padding-left: 20px;
    text-align: left;
    margin-left: 6%;
    margin-bottom: 4%;
  }

  #paragraphP {
    margin-left: 5%;
    font-size: 24px;
    color: #000000;
    margin: 0;
  }

  .input-btn {
    width: 349px;
    height: 70px;
    background: #ECEFF2;
    border: 1px solid #6C6D6D;
    border-radius: 21px;
    text-align: left;
    padding-left: 20px;
    font-size: 19px;
    color: #001C5E;
  }

  .forgot {
    text-align: center;
    font-size: 18px;
    color: #000;
  }

  .signin {
    width: 349px;
    height: 70px;
    background: linear-gradient(253deg, #A264C7 0%, #3DD29B 100%);
    border-radius: 19px;
    border: none;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    color: #001C5E;
  }

  .circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  #arrow2 {
    display: inline-block;
    width: 0;
    height: 0;
    font-size: 150%;
   margin-bottom: 45%; 
   margin-left: -45%;   
  cursor: pointer;
  }

  input.input-btn {
    border: none;
    outline: none;
  }
</style>

<div class="column2">
  <div class="top">
<span id="arrow" on:click={goBack}>
<i class="fa-solid fa-arrow-left"></i> 
</span>

  </div>

  <div class="paragraph">
    <p id="paragraphP">Sign in</p>
  </div>

  <!-- Phone Input -->
  <input
    class="input-btn"
    type="text"
    placeholder="Phone Number"
    bind:value={phone}
  />

  <!-- Password Input -->
  <input
    class="input-btn"
    type="password"
    placeholder="Password"
    bind:value={password}
  />

  <div class="forgot">
    <p>Forgot Password?</p>
  </div>
  
  <button class="signin" on:click={handleSignIn}>
    <span>Sign In</span>
    <span class="circle">
      <span id="arrow2"><i class="fa-solid fa-arrow-right"></i>
 </span>
    </span>
  </button>
</div>
