<script>
  function handleLogin() {
    window.location.href = '/login';
  }
</script>

<style>
   :global(body) {
    margin: 0;
  } 

.container{
    top: 0px;
left: 0px;
width: 360px;
height: 640px;
background: transparent linear-gradient(180deg, #001C5E 0%, #084CA0 100%) 0% 0% no-repeat padding-box;
opacity: 1;
grid-template-rows: 1fr 1fr 3fr;
display: grid;
}
 
.row1{
    grid-row-start: 1;
    display: flex;
    justify-content: center;
}

#lypa{
width: 139px;
height: 60px;
background: transparent url('img/Image 90.png') 0% 0% no-repeat padding-box;
opacity: 1;
font-style: italic;
color: white;
font-size: 500%; 
margin-top: 4%;
margin-bottom: 4.5%;
}

.row2{
    grid-row-start: 2;
    display: flex;
    align-items: center;
    margin-bottom: 0%;

}
#privacy{
width: 290px;
height: 131px;
font: normal normal bold 53px/53px Paralucent;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
margin-left: 15%;
margin-bottom: 2%;




}
.row3 {
    background-image: url('Images/Image 83.png');
    background-size: 160% auto;         /* Zoom into the image */
    background-position: 100% center;     /* Shift to the left edge */
    background-repeat: no-repeat;

    grid-row-start: 3;
    height: 359px;
}



.button-group {
  display: flex;
  gap: 0;
}

.btn {
  padding: 10px 0px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 26px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 60%; 
margin-left: 7%;
gap: 0px;
}

.login-btn {
  background-color: #28a745; /* green */
  color: white;
  border-color: #28a745;
  width: 40%;
height: 20%;
font-size: 140%;
}

/* Join button (white background, green border & text) */
.join-btn {
  background-color: white;
color: #043682;
  border-color: white;
  width: 40%;
  font-size: 140%;
}

/* Optional: hover effect */
.btn:hover {
  opacity: 0.9;
}



.page-indicators {
  display: flex;
  gap: 8px; /* spacing between dots */
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

/* Style for active page indicator */
.dot.active {
  background-color: transparent;
  border: 2px solid white;
}
</style>



<div class="container">
    <div class="row1">
        <p id="lypa"><b>lypa<b></p>
    </div>
    <div class="row2">

        <p id="privacy"> <b>Send Money To your Loved ones</b></p>
    </div>
    <div class="row3">

    <div class="button-group">
<button class="btn login-btn" on:click={handleLogin}>Login</button>
      <button class="btn join-btn" on:click={() => goTo('join.html')}>Join</button>
    </div>

   <div class="page-indicators">
  <span class="dot"></span>
     <span class="dot active"></span>

  <span class="dot"></span>
</div>



    </div>
</div>
