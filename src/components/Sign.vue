<script setup></script>

<template>
  <div>
    <!---------------------------- Navbar --------------------------->
    <div class="navbar">
      <h5 class="logo">cartet</h5>
      <span style="flex: 1"></span>
      <div>
        <span class="choose">Choose Language</span>
        <span class="tooltip"></span>
      </div>
    </div>

    <!---------------------------- Form --------------------------->
    <div class="form-section">
      <div class="form">
        <h1>SIGN IN/SIGN UP</h1>
        <p>Use your phone number to easily access or create your account</p>
        <div class="phone">
          <div class="phone-icon">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.8881 15.9201V18.9201C20.8892 19.1986 20.8322 19.4743 20.7206 19.7294C20.6091 19.9846 20.4454 20.2137 20.2402 20.402C20.035 20.5902 19.7927 20.7336 19.5289 20.8228C19.265 20.912 18.9855 20.9452 18.7081 20.9201C15.631 20.5857 12.6751 19.5342 10.0781 17.8501C7.66194 16.3148 5.61345 14.2663 4.07812 11.8501C2.38809 9.2413 1.33636 6.27109 1.00812 3.1801C0.983127 2.90356 1.01599 2.62486 1.10462 2.36172C1.19324 2.09859 1.33569 1.85679 1.52288 1.65172C1.71008 1.44665 1.93792 1.28281 2.19191 1.17062C2.44589 1.05843 2.72046 1.00036 2.99812 1.0001H5.99812C6.48342 0.995321 6.95391 1.16718 7.32188 1.48363C7.68985 1.80008 7.93019 2.23954 7.99812 2.7201C8.12474 3.68016 8.35957 4.62282 8.69812 5.5301C8.83266 5.88802 8.86178 6.27701 8.78202 6.65098C8.70227 7.02494 8.51698 7.36821 8.24812 7.6401L6.97812 8.9101C8.40167 11.4136 10.4746 13.4865 12.9781 14.9101L14.2481 13.6401C14.52 13.3712 14.8633 13.1859 15.2372 13.1062C15.6112 13.0264 16.0002 13.0556 16.3581 13.1901C17.2654 13.5286 18.2081 13.7635 19.1681 13.8901C19.6539 13.9586 20.0975 14.2033 20.4146 14.5776C20.7318 14.9519 20.9003 15.4297 20.8881 15.9201Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="tooltip"></span>
          </div>
          <input class="phone-input" placeholder="Enter phone number" />
        </div>
        <div class="send-code">SEND CODE</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

/*********************************  Navbar  ************************************/
.navbar {
  height: 41px;
  margin: 50px 50px;
  display: flex;
}

.logo {
  display: inline-block;
  padding-top: 6px;
  width: 88px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 100%;
  color: #000000;
}

.choose {
  display: inline-block;
  padding-top: 4px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #9b9aa2;
  margin-right: 5px;
}

.tooltip {
  content: " ";
  border-width: 5px;
  border-style: solid;
  border-color: #9b9aa2 transparent transparent transparent;
  margin-top: 9px;
}

/*********************************  Form  ************************************/

.form-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  /* Neutrals White */
  width: 640px;
  background: #ffffff;
  /* Neutrals (Lightest Gray) */

  border: 1px solid #dedede;
  /* Style 1 (Desktop */

  box-shadow: 1px 9px 18px 5px rgba(45, 45, 45, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form h1 {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  color: #000000;
  margin-top: 56px;
  margin-bottom: 56px;
}

.form p {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 425px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 32px;
}

.phone {
  margin-top: 48px;
  margin-bottom: 48px;
  display: flex;
}

.phone-icon {
  width: 74px;
  height: 48px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.phone-icon svg {
  margin-right: 5px;
}

.phone-input {
  flex: 1;
  height: 48px;
  background: #dedede;
  color: #9b9aa2;
  border: none;
  padding: 8px 16px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 32px;
}

.send-code {
  margin-top: 72px;
  margin-bottom: 20px;
  width: 200px;
  height: 56px;
  background: #000000;
  backdrop-filter: blur(6px);
  text-align: center;
  color: white;
  padding: 16.5px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 100%;
}

@media screen and (max-width: 750px) {
  .navbar {
    height: auto;
    margin: 30px 50px;
    display: flex;
    flex-direction: row !important;
  }

  .navbar .logo {
    font-size: 16px;
  }

  .navbar div .choose {
    font-size: 14px;
  }

  .form {
    width: 90%;
  }

  .form h1 {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    text-align: left;
    font-size: 24px;
    font-weight: 700;
  }

  .phone {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .phone-input {
    font-size: 16px;
  }

  .send-code {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 16px;
    padding: 10px 27px !important;
    height: auto;
    width: auto;
  }

  .form p {
    width: auto;
    padding: 0px 10px;
    font-size: 16px;
  }
}
</style>
