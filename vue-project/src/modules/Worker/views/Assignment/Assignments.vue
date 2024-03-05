<template>
  <div class="div">
    <div class="div-9">
      <div class="div-10">
        <div class="div-11">Asignaciones</div>
        <b-form-input class="mr-sm-2 div-12 w-50" placeholder="Buscar"></b-form-input>
        <div class="div-15">
          <div class="div-16">
            <b-col class="column p-0 d-none d-lg-block col-md-4 col-lg-5 col-xl-5">
              <img src="../../../../assets/img/asig.jpg" class="img-7 r-image rounded-start-4 w-100 h-100"/>
            </b-col>
            <b-col class="column-2">
              <b-container class="div-17">
                <h4 class="div-18">Paquete Simple</h4>
                <p class="div-19">Entregar a las 16:47 hs el dia 19 de Enero del 2024</p>
              </b-container>
            </b-col>
          </div>
        </div>
        <div class="div-20">
          <div class="div-16">
            <b-col class="column p-0 d-none d-lg-block col-md-4 col-lg-5 col-xl-5">
              <img src="../../../../assets/img/asig.jpg" class="img-7 r-image rounded-start-4 w-100 h-100"/>
            </b-col>
            <b-col class="column-2">
              <b-container class="div-17">
                <h4 class="div-18">Paquete Simple</h4>
                <p class="div-19">Entregar a las 16:47 hs el dia 19 de Enero del 2024</p>
              </b-container>
            </b-col>
          </div>
        </div>
        <div class="div-25">
          <div class="div-16">
            <b-col class="column p-0 d-none d-lg-block col-md-4 col-lg-5 col-xl-5">
              <img src="../../../../assets/img/asig.jpg" class="img-7 r-image rounded-start-4 w-100 h-100"/>
            </b-col>
            <b-col class="column-2">
              <b-container class="div-17">
                <h4 class="div-18">Paquete Simple</h4>
                <p class="div-19">Entregar a las 16:47 hs el dia 19 de Enero del 2024</p>
              </b-container>
            </b-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .div {
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  
  .div-9 {
    border: 3px solid #d9d9d9;
    background-color: #f5f5f7;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 60px;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-10 {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    display: flex;
    width: 570px;
    max-width: 100%;
    flex-direction: column;
    padding: 50px 35px;
  }
  @media (max-width: 991px) {
    .div-10 {
      padding: 0 20px;
    }
  }
  .div-11 {
    color: #000;
    text-align: center;
    align-self: start;
    margin-left: 10px;
    font: 400 30px Inter, sans-serif;
  }
  .div-12 {
    border-radius: 15px;
    background-color: rgba(191, 193, 192, 0.5);
    align-self: start;
    display: flex;
    margin-top: 16px;
    gap: 4px;
    padding: 9px 12px;
  }
  .div-13 {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    display: flex;
    aspect-ratio: 1;
    width: 15px;
    justify-content: center;
    align-items: center;
  }
  .img-5 {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .img-6 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
  }
  .div-14 {
    color: rgba(79, 79, 79, 0.5);
    flex-grow: 1;
    font: 400 16px Inter, sans-serif;
  }
  .div-15 {
    border-radius: 15px;
    border: 1px solid #b9b9b9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    margin-top: 29px;
    padding-right: 23px;
  }
  @media (max-width: 991px) {
    .div-15 {
      max-width: 100%;
      padding-right: 20px;
    }
  }
  .div-16 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-16 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 34%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .img-7 {
    aspect-ratio: 0.81;
    object-fit: auto;
    object-position: center;
    width: 156px;
    max-width: 100%;
    flex-grow: 1;
  }
  @media (max-width: 991px) {
    .img-7 {
      margin-top: 13px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 66%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-17 {
    display: flex;
    margin-top: 21px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-17 {
      margin-top: 34px;
    }
  }
  .div-18 {
    color: #ed8003;
    white-space: nowrap;
    font: 700 25px Mukta, sans-serif;
  }
  @media (max-width: 991px) {
    .div-18 {
      white-space: initial;
    }
  }
  .div-19 {
    color: #000;
    margin-top: 22px;
    font: 400 16px Inter, sans-serif;
  }
  .div-20 {
    border-radius: 15px;
    border: 1px solid #b9b9b9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    margin-top: 71px;
    padding-right: 23px;
  }
  @media (max-width: 991px) {
    .div-20 {
      max-width: 100%;
      padding-right: 20px;
      margin-top: 40px;
    }
  }
  .div-21 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-21 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .img-8 {
    aspect-ratio: 0.81;
    object-fit: auto;
    object-position: center;
    width: 156px;
    max-width: 100%;
    flex-grow: 1;
  }
  @media (max-width: 991px) {
    .img-8 {
      margin-top: 13px;
    }
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 66%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .div-22 {
    display: flex;
    margin-top: 21px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-22 {
      margin-top: 34px;
    }
  }
  .div-23 {
    color: #ed8003;
    white-space: nowrap;
    font: 700 25px Mukta, sans-serif;
  }
  @media (max-width: 991px) {
    .div-23 {
      white-space: initial;
    }
  }
  .div-24 {
    color: #000;
    margin-top: 22px;
    font: 400 16px Inter, sans-serif;
  }
  .div-25 {
    border-radius: 15px;
    border: 1px solid #b9b9b9;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #fff;
    padding-right: 23px;
    margin: 71px 0 7px;
  }
  @media (max-width: 991px) {
    .div-25 {
      max-width: 100%;
      padding-right: 20px;
      margin-top: 40px;
    }
  }
  .div-26 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-26 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .img-9 {
    aspect-ratio: 0.81;
    object-fit: auto;
    object-position: center;
    width: 156px;
    max-width: 100%;
    flex-grow: 1;
  }
  @media (max-width: 991px) {
    .img-9 {
      margin-top: 13px;
    }
  }
  .column-4 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 66%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-4 {
      width: 100%;
    }
  }
  .div-27 {
    display: flex;
    margin-top: 21px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-27 {
      margin-top: 34px;
    }
  }
  .div-28 {
    color: #ed8003;
    white-space: nowrap;
    font: 700 25px Mukta, sans-serif;
  }
  @media (max-width: 991px) {
    .div-28 {
      white-space: initial;
    }
  }
  .div-29 {
    color: #000;
    margin-top: 22px;
    font: 400 16px Inter, sans-serif;
  }
</style>