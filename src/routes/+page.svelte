<script>
  function handleDeposit() {
    alert("Deposit button clicked");
  }

  function handleWithdraw() {
    alert("Withdraw button clicked");
  }

  function handleLogin() {
    window.location.href = '/login';
  }

  function handleJoin() {
    alert("Join button clicked");
  }
</script>


<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500&display=swap" rel="stylesheet" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>

<style>
  


:global(body){
   width: 100%;
  min-height: 100vh;
  font-family: 'Barlow', sans-serif;
  overflow-x: hidden;
}
@media (max-width: 768px) { /* Adjust the max-width as needed for your breakpoints */
      .desktop {
        display: none !important;
      }
    }
/* Default: hide everything */
/* Hide both by default */
.mobile, .desktop {
  display: none;
}

/* Show mobile only on small screens */
@media (max-width: 768px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}

/* Show desktop only on large screens */
@media (min-width: 769px) {
  .desktop {
    display: block;
  }
  .mobile {
    display: none;
  }
}



.desktop {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows:auto auto auto auto;
  background: transparent linear-gradient(180deg, #001C5E 0%, #084CA0 51%, #084698 100%) 0% 0% no-repeat padding-box;
}

.desktop .title {
  display: grid;
  grid-row-start: 1;
  width: 100%;
}

.desktop #lower {
  display: grid;
  grid-row-start: 2;
  grid-template-columns: 1fr 1fr;
}

.desktop #lypa {
  display: grid;
  grid-column-start: 1; 
  font-family: sans-serif;
  font-style: italic;
  font-size: 250%;
  color: white;
  margin-top: 4%;
  margin-left: 15%;
}

.desktop .button {
  display: flex;
  flex-direction: row;
  align-items: start;
  grid-column-start: 2;
  margin-left: 10%;
}

.desktop .btn {
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin-top: 6%;
  background-color: inherit;
  color: white;
}


.desktop .main {
  grid-row-start: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  width: 100%;
  gap: 20px;
}

.desktop .column1 {
  grid-column-start: 1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 0%;
  position: absolute;
  margin-left: -1%;
}

 
.desktop .custom{
    width:187% ;
height: 0.5px;
border: 0.5px solid #FFFFFF;
opacity: 1;
margin-left: 8%;
}

.desktop #sendMoney {
  grid-row-start: 2;
  background-color: #3DD29B;
  background: transparent linear-gradient(180deg, #68EB75 0%, #0D6DB8 100%) 0% 0% no-repeat padding-box;
  border-radius: 30px 90px 0px 0px;
  opacity: 1;
  margin-left: 0%;
  width: 40%;
  height: 250px;
  margin-top: 0%;
}

.desktop #sendMoneyP {
  text-align: left;
  font: normal normal bold 73px/80px Paralucent;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 350%;
  padding: 5%;
}

.desktop #paragraph0 {
  grid-row-start: 3;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
  grid-template-rows: 1fr 2fr;
  top: 0%;
  width: 50.8%;
    margin-bottom: 0%;
    margin-top: -2%;
    height:300px ;

}

.desktop #paragraph0a {
  grid-row-start: 1;
  padding-top: 3%;
  padding-left: 6%;
  padding-right: 6%;
  padding-bottom: 0%;
  text-align: left;
  font: 500 22px/35px 'Barlow', sans-serif;
  letter-spacing: 0px;
  color: #142944;
  opacity: 1;
  font-size: 120%;
}

.desktop #google {
  grid-row-start: 2;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: row;
  display: grid;
  padding-top: 0%;
}

.desktop #applestore {
  grid-column-start: 1;
  width: 273px;
  height: 96px;
  background: transparent url('img/Image 94.png') 0% 0% no-repeat padding-box;
  opacity: 1;
  padding-left: 5%;
}

.desktop #playstore {
  grid-column-start: 2; 
  width: 259px;
  height: 90px;
  background: transparent url('img/Image 95.png') 0% 0% no-repeat padding-box;
  opacity: 1;
}

.desktop .column2 {
  grid-column-start: 2;
  display: grid;
  width: 570px;
  margin-top: 10%;
  height: 800px;
  margin-bottom: -5%;
}

.desktop #paragraph1 {
  height: 730px;
  background: transparent linear-gradient(180deg, #F5F8F9 0%, #D5DFE2 100%) no-repeat;
  box-shadow: 0px 3px 6px #0037BC34;
  opacity: 1;
  padding: 20px;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 572px;
}

.desktop #country {
  display: grid;
  place-items: center;
  height: 100vh;
  grid-row-start: 1;
  top: 375px;
  left: 1005px;
  height: 100px;
  background: transparent linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0037BC34;
  border-radius: 53px;
  opacity: 1;
  grid-template-columns: 1fr 3fr 1fr;
  margin-top: 5%;
}

.desktop #flag {
  grid-column-start: 1;
}

.desktop #scroll {
  grid-column-start: 3;
}

.desktop #arab {
  grid-column-start: 2;
  font-size: 200%;
  align-items: center;
  font: normal normal medium 39px/41px Paralucent;
  letter-spacing: 0px;
  color: #001C5E;
  opacity: 1;
}

.desktop #receive {
margin-top:6% ;
  margin-left: 5%;
  width: 194px;
  height: 29px;
  text-align: left;
  font: normal normal medium 24px/24px Paralucent;
  letter-spacing: 0px;
  color: #001C5E;
  opacity: 1;
}

.desktop #money3 {
  top: 710px;
  margin-left: 40%;
  width: 194px;
  height: 29px;
  text-align: left;
  font: normal normal medium 24px/24px Paralucent;
  letter-spacing: 0px;
  color: #001C5E;
  opacity: 1;
}

.desktop #clicking {
  top: 0px;
  margin-left: 20%;
  width: 311px;
  height: 29px;
  text-align: left;
  font: normal normal medium 24px/24px Paralucent;
  letter-spacing: 0px;
  color: #142944;
  margin-bottom: 0%;
}

.desktop #hands {
    margin-top: -46%;
    margin-left: 28%;
    margin-right: 0%;
  top: 862px;
  left: 1323px;
  width: 435px;
  height: 269px;
  background: transparent url('img/Image 83.png') 0% 0% no-repeat padding-box;
  opacity: 0.52;
}
.desktop #line2 {   
  margin-bottom: 0%;
    margin-top: 0%;

 }

.desktop #sendAmount {
  height: 105px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
  box-shadow: 0px 3px 6px #0037BC34;
  border-radius: 53px;
  display: grid;
  place-items: center;
  margin: 100px auto 0 auto;
  margin-top: 5%;
}

.desktop #money {
  height: 49px;
  font: 500 41px/41px 'Paralucent', sans-serif;
  color: #001C5E;
  text-align: center;
  margin-left: 20%;
  margin-top: -8.5%;
}
.desktop #moneya {
  height: 49px;
  font: 500 41px/41px 'Paralucent', sans-serif;
  color: #001C5E;
  text-align: center;
  margin-top: -14%;
  margin-left: 15%;
}
.desktop #sender {
  margin-left: 40%;
  margin-top: 5%;
  width: 96px;
  height: 75px;
  font: normal normal medium 41px/41px Paralucent;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  font-size: 200%;
  display: flex;
  align-items: center; 

}

.desktop #receiveAmount {
  grid-row-start: 3;
  height: 100px;
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
  box-shadow: 0px 3px 6px #0037BC34;
  border-radius: 53px;
  display: grid;
  place-items: center;
  margin: 100px auto 0 auto;
  margin-top: -20%;
}

.desktop #send {
  margin-left: 10%;
  left: 1116px;
  width: 466px;
  height: 78px;
  background: #3DD29B 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0037BC34;
  border-radius: 53px;
  opacity: 1;
  margin-bottom: 8%;
}

.desktop .content {
  width: 100%;
  height: 940px;
  display: grid;
  grid-row-start: 3;
  background: transparent linear-gradient(180deg, #F5F8F9 0%, #E4E4E4 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0037BC34;
  opacity: 1;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-bottom: 0%;
}

.desktop #payment {
  display: grid;
  grid-row-start: 1;
  justify-items: center;
  align-items: center;
  margin-top: 4%;
}

.desktop #paymentP {
  top: 1292px;
  left: 550px;
  width: 820px;
  height: 187px;
  text-align: center;
  font: normal normal bold 86px/83px Paralucent;
  letter-spacing: 0px;
  color: #142944;
  opacity: 1;
}

.desktop #lypaHelp {
  grid-row-start: 2;
  justify-items: center;
  align-items: center;
  margin-top: -4%;
}

.desktop #lypaHelpP {
  font-size: 200%;
  margin-top: -3%;
  top: 1545px;
  left: 514px;
  width: 828px;
  height: 124px;
  text-align: center;
  font: normal normal medium 28px/45px Paralucent;
  letter-spacing: 0px;
  color: #142944;
  opacity: 1;
}

.desktop #graphics {
  margin-top: -3%;
  grid-row-start: 3;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
}

.desktop #bill {
  top: 1736px;
  width: 300px;
  height: 300px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 87px;
  opacity: 1;
  grid-column-start: 1;
  margin-left: 30%;
  display: grid;
  justify-items: center;
}

.desktop #billPayments {
  font: 500 47px/41px 'Barlow', sans-serif;
  top: 2129px;
  left: 301px;
  width: 278px;
  height: 57px;
  text-align: center;
  font: normal normal medium 47px/41px Paralucent;
  letter-spacing: 0px;
  color: #142944;
  opacity: 1;
  font-size: 250%;
  margin-top: 30%;
}

.desktop #product {
  width: 200px;
  height: 200px;
  margin-top: 50px;
}

.desktop #airtime {
  top: 1736px;
  left: 211px;
  width: 300px;
  height: 300px;
  margin-left: 15%;
  grid-column-start: 2;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 87px;
  opacity: 1;
  display: grid;
  justify-items: center;
}

.desktop #sendMoney2 {
  grid-column-start: 3;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 87px;
  opacity: 1;
  display: grid;
  justify-items: center;
  top: 1736px;
  left: 211px;
  width: 300px;
  height: 300px;
}

.desktop .footer {
  grid-row-start: 4;
  justify-items: center;
  width: 100%;
}

.desktop #startP {
  top: 2601px;
  left: 543px;
  width: 834px;
  height: 100px;
  text-align: center;
  font: normal normal bold 86px/83px Paralucent;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-top: 8%;
}
.desktop #great{
      margin-bottom: -3%;

}

.desktop #greatP {
  position: relative;
  top: 0px;
  left: 0px;
  width: 1150px;
  margin: 100px auto;
  text-align: center;
  font: normal normal bold 37px/36px 'Paralucent', sans-serif;
  letter-spacing: 0px;
  color: #6AED75;
  opacity: 1;
}

.desktop #a{ 
    color: #001C5E;
  font: 500 41px/41px 'Paralucent', sans-serif;
  margin-left: -70%;   

  grid-column-start: 1;
  margin-top: 7%;   


}
.desktop .dropbtn {
  background-color: #FFFFFF;
  color: orangered;
  font-size: 38px;
  border: none;
  cursor: pointer;
}
.desktop .dropbtna {
  background-color: #FFFFFF;
  color: orangered;
  font-size: 38px;
  border: none;
  cursor: pointer;
  margin-top: -22%;
  margin-right: 40%;


}

.desktop .dropbtnb {
  background-color: #FFFFFF;
  color: orangered;
  font-size: 38px;
  border: none;
  cursor: pointer;
  margin-top: 6%;
  margin-right: 40%;


}


.desktop #b{    
  font: 500 41px/41px 'Paralucent', sans-serif;
margin-bottom: 6%;
  color: #001C5E;
  margin-top: 10%;
margin-left: 8%;}

:global(body.mobile) {
    grid-template-rows: 1fr 2fr 1fr 1fr;
    height: 600px;
  }
.mobile .row1 {
    grid-row-start: 1;
    display: grid;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 200px;
    background: #011C5E 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 0%;
}
.mobile .top {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 60px;
    padding: 10px;
}
.mobile #balance {
    margin-left: 5%;
    left: 23px;
    height: 15px;
    text-align: left;
    font: normal normal medium 15px/18px Paralucent;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    font-size: 130%;
}
.mobile #what {
    margin-left: 5%;
    margin-top: 4%;
    height: 11px;
    text-align: left;
    font: normal normal medium 9px/11px Paralucent;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}
.mobile .graphics {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 100px;
    margin-top: 3%;
}
.mobile #withdraw {
    margin-top: 8%;
    left: 88px;
    width: 54px;
    height: 14px;
    text-align: left;
    font: normal normal bold 12px/14px Paralucent;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-left: -26%;
    font-size: 80%;
}
.mobile #left {
    width: 108px;
    height: 40px;
    background: #3DD29B 0% 0% no-repeat padding-box;
    border-radius: 20px 0px 0px 20px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0;
    margin-right: -8%;
}
.mobile #right {
    width: 108px;
    height: 40px;
    background: #3DD29B 0% 0% no-repeat padding-box;
    border-radius: 0px 20px 20px 0px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-left: 8%;
}
.mobile #centre {
    color: #FFFFFF;
    width: 61px;
    height: 62px;
    background: #FB527E 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border: 1px solid #FB527E;
    border-radius: 50%;
    opacity: 1;
    text-align: center;
    line-height: 35px;
    margin-top: -22%;
    margin-left: 40%;
}
.mobile #send {
    top: 109px;
    left: 232px;
    width: 28px;
    height: 14px;
    text-align: left;
    font: normal normal bold 12px/14px Paralucent;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin-top: 8%;
    margin-left: 0%;
    font-size: 80%;
}
.mobile #arrow1 {
    margin-top: 1%;
    left: 112px;
    width: 9px;
    height: 9px;
    background: transparent url('img/Image 25.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}
.mobile .row234 {
    top: 182px;
    left: 0px;
    width: 100vw;
    height: 540px;
    background: #ECEEF2 0% 0% no-repeat padding-box;
    opacity: 1;
}
.mobile .row2 {
    height: 160px;
    display: grid;
    grid-row-start: 2;
    grid-template-columns: 1.5fr 1fr 1.5fr;
    gap: 10px;
    width: 360px;
    border-bottom: 1px solid black;
}
.mobile .column1 {
    margin-right: 20%;
    margin-top: 25%;
    grid-column-start: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.mobile .column2 {
    margin-top: 29%;
    grid-column-start: 2;
    
}
.mobile .column3 {
    margin-top: 25%;
    grid-column-start: 3;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.mobile #sender {
    top: 267px;
    margin-left: 13%;
    width: 100px;
    height: 11px;
    text-align: left;
    font: normal normal medium 9px/11px Paralucent;
    letter-spacing: 0px;
    color: #142944;
    opacity: 1;
    font-size: 70%;
    margin-top: 10%;
}
.mobile #send1 {
    top: 267px;
    margin-right: 0%;
    width: 100px;
    height: 11px;
    text-align: right;
    font: normal normal medium 9px/11px Paralucent;
    letter-spacing: 0px;
    color: #142944;
    opacity: 1;
    font-size: 70%;
    margin-top: 10%;
}
.mobile #item1,
.mobile #item2 {
    width: 61px;
    height: 62px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 14px;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 11%;
}
.mobile #item3 {
    width: 61px;
    height: 62px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 14px;
    opacity: 1;
    margin-left: 10%;
    margin-top: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mobile .row3 {
    grid-row-start: 3;
    display: grid;
    justify-items: center;
    margin-top: 10%;
}
.mobile #safaricom {
    margin-top: 6%;
    width: 265px;
    height: 41px;
    background: transparent linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #0037BC34;
    border-radius: 53px;
    opacity: 1;
    grid-template-columns: 1fr 0.1fr 1fr 3fr;
    display: grid;
}
.mobile #safa {
    display: block;
    top: 332px;
    left: 114px;
    width: 140px;
    height: 40px;
    background: transparent url('img/Image 99.png') 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-left: auto;
    margin-right: auto;
}
.mobile #kes {
    grid-column-start: 1;
    top: 418px;
    left: 63px;
    width: 26px;
    height: 18px;
    text-align: left;
    font: normal normal medium 15px/15px Paralucent;
    letter-spacing: 0px;
    color: #001C5E;
    opacity: 1;
    margin-left: 28%;
    margin-top: -20%;
    font-size: 110%;
}
.mobile #scroll {
    grid-column-start: 2;
    top: 497px;
    left: 100px;
    width: 13px;
    height: 6px;
    transform: matrix(-1, 0, 0, -1, 0, 0);
    background: #F64942 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 150%;
    margin-left: 90%;
}


.mobile #linen{
  grid-column-start: 3;
  top: 413px;
left: 128px;
width: 3px;
height: 30px;
background: #ECEFF2 0% 0% no-repeat padding-box;
opacity: 1;
margin-left: 30%;
margin-top: 5%;
}
.mobile #numbern{
  grid-column-start: 3;
  margin-top: -23%;
  margin-left: 45%;
top: 488px;
left: 143px;
height: 18px;
text-align: left;
font: normal normal medium 15px/15px Paralucent;
letter-spacing: 0px;
color: #001C5E;
opacity: 0.3;
width: 120px;


}
.mobile #cash{
top: 407px;
left: 49px;
width: 265px;
height: 41px;
background: transparent linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #0037BC34;
border-radius: 53px;
opacity: 1;
justify-items: center;

}
.mobile #number{
top: 477px;
left: 46px;
width: 265px;
height: 41px;
background: transparent linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #0037BC34;
border-radius: 53px;
opacity: 1;
margin-top: 6%;
}

.mobile #topUp{
  margin-top: 6%;
top: 544px;
left: 89px;
width: 179px;
height: 31px;
background: #3DD29B 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #0037BC34;
border-radius: 53px;
opacity: 1;
}




 .mobile .footer {
         /* Centers items vertically */

  background-color: #FFFFFF;
  box-shadow: 0px 3px 6px #00000058;
  opacity: 1;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  height: 40px;
margin-top: 8%;
align-items: center;
margin-top: -3%;



}
.mobile #home {
  grid-column-start: 1;
    display: flex; /* Enables Flexbox layout */
    align-items: center; /* Vertically center items */
    color: #FFFFFF;
    margin-top: 10%;
    width: 67px;
    height: 34px;
    background-color: #142944;
    border-radius: 14px;
    opacity: 1;
    gap: 0px;
    margin-left: 6%;
}


.mobile #homeP {
  margin-left: 10%;
    
}

.mobile #clock{
    grid-column-start: 2;
}
.mobile #letter{
    grid-column-start: 3;
}
.mobile #about{
    grid-column-start: 4;
    margin-left: 35%;
    margin-top: -7%;
}
.mobile #p2{
  font: normal normal medium 8px/7px Paralucent;
letter-spacing: 0px;
color: #001C5E;
opacity: 1;
font-size: 80%;
margin-top: 4%;
}
.mobile #p2{
  margin-left: -18%;
}
.mobile #picture1{
  grid-column-start: 3;
  margin-top: -6.5%;
  margin-left:-20%;

}
.mobile #picture2{
  grid-column-start: 2;
  margin-left:14%;
  margin-top: -6.2%;

}
.mobile #p3{
  margin-top: 3%;
width: 40px;
height: 18px;
text-align: centre;
font: normal normal medium 15px/15px Paralucent;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
margin-left: 38%;
}

.mobile input[type="number"] {
      border: none;
      outline: none;
      font-size: 16px;
      padding: 8px;
      width: 120px;
      height: 20px;
      margin-top: 3%;
      background-color: white;
      

    -webkit-appearance: none;
      -moz-appearance: textfield;
      appearance: textfield;
    }

    /* Remove spinner arrows in Firefox */
    .mobile input[type="number"]::-webkit-outer-spin-button,
    .mobile input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .mobile input[type="tel"] {
      border: none;            /* Remove border */
      outline: none;           /* Remove blue focus outline */
      font-size: 16px;
      padding: 8px;
      width: 180px;
      background-color: #f0f0f0; /* Optional background */
      border-radius: 5px;  
      margin-top: -10%;
    }

    .mobile input[type="tel"]::placeholder {
      text-align: left;
font: normal normal medium 15px/15px Paralucent;
letter-spacing: 0px;
color: #001C5E;
opacity: 0.5;
width: 120px;

    }
   .mobile #code{
        margin-top: 4%;
        margin-left: -75% ;
        color: black;
    }



</style>

  <div class="desktop">
  <div class="title">
    <div id="lower">
      <p id="lypa">lypa</p>
      <div class="button">
        <button class="btn deposit" on:click={handleDeposit}>Deposit</button>
        <button class="btn withdraw" on:click={handleWithdraw}>Withdraw</button>
        <button class="btn login" on:click={handleLogin}>Login</button>
        <button class="btn join" on:click={handleJoin}>Join</button>
      </div>
      <hr class="custom" />
    </div>
  </div>

  <div class="main"> 
    <div class="column1">
      <div id="sendMoney">
        <p id="sendMoneyP">Send Money To Your Loved Ones</p>
      </div>

      <div id="paragraph0"> 
        <p id="paragraph0a">You don’t need to download ten apps for your financial services. Use LYPA for everything. Send money from UAE to Kenya instantly and right from the LYPA app on your phone.</p>
        <div id="google">
          <div id="applestore">
            <img src="/Images/Image 94.png" alt="App Store">
          </div>
          <div id="playstore">
<img src="/Images/Image 95.png" alt="Play Store">
          </div>
        </div>
      </div>
    </div>

    <div class="column2">
      <div id="paragraph1">
        <div id="country">
          <img id="flag" width="70" height="50" src="/Images/flag.jpeg" alt="UAE Flag">
          <p id="arab">United Arab Emirates</p>
            <button class="dropbtn"><span class="arrow">&#9660;</span></button>

          <img id="scroll" src="">
        </div>

        <p id="receive">SEND AMOUNT</p>
        <div id="sendAmount">                   
          
          <p id="a">AED</p>           
             <button class="dropbtna"><span class="arrow">&#9660;</span></button>

                 <div style="width: 4px; height: 70px; background-color: lightgrey; margin-left:-25%; margin-top:-23%"></div>
 
          <p id="moneya">10,000.00</p>
        </div>

        <p id="receive">RECEIVE AMOUNT</p>
                              <p id="b">KES</p>


      <div id="receiveAmount">
             <button class="dropbtnb"><span class="arrow">&#9660;</span></button>

                 <div id="line2" style="width: 4px; height: 70px; background-color: lightgrey; margin-left:-25%; margin-top:-11%"></div>


          <p id="money">320,193.00</p>
        </div>

        <p id="money3">1 AED = 32.02 KES</p>
        <div id="send">

          <p id="sender">Send</p>
        </div>
        <p id="clicking">By clicking send, I agree with terms & policy</p>
      </div>
      <img id="hands" src="/Images/Image 83.png" alt="Hands">
    </div>
  </div>

  <div class="content">
    <div id="payment">
      <p id="paymentP">All Your Payments In One Place</p>
    </div>

    <div id="lypaHelp">
      <p id="lypaHelpP">LYPA App helps with more than just sending money. You can easily make bill payments and even recharge mobile airtime Instantly. All in one APP, Lypa App.</p>
    </div>

    <div id="graphics">
      <div id="bill">
        <img id="product" height="200" width="200" src="/Images/Image 96.png" alt="Bill Payments">
        <p id="billPayments">Bill Payments</p>
      </div>

      <div id="airtime">
        <img id="product" height="200" width="200" src="/Images/Image 97.png" alt="Airtime Topup">
        <p id="billPayments">Airtime Topup</p>
      </div>

      <div id="sendMoney2">
        <img id="product" height="200" width="200" src="/Images/Image 98.png" alt="Send Money">
        <p id="billPayments">Send Money</p>
      </div>
    </div>

    <div id="space"></div>
  </div>

  <div class="footer">
    <div id="start">
      <p id="startP">Start Sending Money Stress Free</p>
    </div>

    <div id="great">
      <p id="greatP">Great Exchange Rates * Super Fast Transfers * Instant Payments</p>
    </div>
  </div>
</div>

<!-- Mobile Layout -->
<div class="mobile">
  <div class="row1">
    <div class="top">
      <div id="balance"><p id="row1P">Bal: 20,000</p></div>
      <div id="what"><p id="row1P">What would you like to do today?</p></div>
    </div>

    <div class="bottom">
      <div class="graphics">
        <div id="left">
          <div id="arrow1">
            <img width="9.23" height="9.15" src="/Images/Image 25.png" alt="Arrow">
          </div>
          <div id="withdraw">Withdraw</div>
        </div>

        <div id="right">
          <div id="arrow1">
            <img width="9.23" height="9.15" src="/Images/Image 25.png" alt="Arrow">
          </div>
          <div id="send">Send</div>
        </div>
      </div>
    </div>

    <div id="centre">
      <p>Top Up</p>
    </div>
    <div class="blank"></div>
  </div>

  <div class="row234">
    <div class="row2">
      <div class="column1">
        <div id="item1">
          <img width="39" height="37" src="/Images/Image 98.png" alt="Send Money">
        </div>
        <p id="send1">Send Money</p>
      </div>

      <div class="column2">
        <div id="item2">
          <img width="39" height="37" src="/Images/Image 97.png" alt="Airtime Topup">
        </div>
        <p id="sender">Airtime Topup</p>
      </div>

      <div class="column3">
        <div id="item3">
          <img width="39" height="37" src="Images/Image 96.png" alt="Bill Payments">
        </div>
        <p id="sender">Bill Payments</p>
      </div>
    </div>

    <div class="row3">
      <div id="cash">
        <img id="safa" src="/Images/safaricom.png" alt="Safaricom">
      </div>
      <p id="p2">ENTER AIRTIME AMOUNT</p>

      <div id="safaricom">
        <div id="kes"><p>KES</p></div>
        <div id="scroll"></div>
        <div id="line"></div>
        <div id="money">
          <input type="number" id="numberInput" name="numberInput" min="0" max="1000000" step="1" placeholder="10000">
        </div>
      </div>

      <p id="p2">ENTER PHONE NUMBER</p>
      <div id="number">
        <div id="code">+254</div>
        <div id="scrolln"></div>
        <div id="linen"></div>
        <div id="numbern">
          <input type="tel" id="phoneInput" name="phoneInput" placeholder="07 xx xxx xxx">
        </div>
      </div>

      <div id="topUp">
        <p id="p3">Topup</p>
      </div>
    </div>

    <div class="row4">
      <div class="footer">
        <div id="home">
          <img id="homeI" width="10" height="10" src="/Images/Image 32.png" alt="Home">
          <p id="homeP">Home</p>
        </div>

        <div id="picture1">
          <img id="clock" width="13" height="13" src="/Images/Image 30.png" alt="Clock">
        </div>

        <div id="picture2">
          <img id="letter" width="17" height="13" src="/Images/Image 31.png" alt="Message">
          <div id="about">
            <img id="aboutP" src="./Images/about.png" alt="About">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
