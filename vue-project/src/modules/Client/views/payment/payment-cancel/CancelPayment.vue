<template>
    <b-container class="container">
      <div class="message-container">
        <div class="cancel-message">
          <h2>¡Pago cancelado exitosamente!</h2>
          <p>¡Gracias por su visita!</p>
          <b-button @click="returnHome" class="mt-2"variant="secondary">Volver a comprar</b-button>
        </div>
      </div>
    </b-container>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
       
      };
    },
    mounted() {
     
    },
    methods: {
      
      returnHome() {
        this.$router.push("/")
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .message-container {
    text-align: center;
  }
  
  .cancel-message {
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 30px;
    margin-bottom: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .cancel-message:hover {
    transform: translateY(-5px);
  }
  
  .cancel-message h2 {
    color: #333;
    margin-bottom: 15px;
    font-size: 26px;
  }
  
  .cancel-message p{
    color: #666;
    margin-bottom: 0;
  }
  </style>
  