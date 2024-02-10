<template>
  <div>
    <b-container>
      <div class="lp-image">
        <div class="lp-overlay"></div>
        <h1 class="fw-bold lp-tittle">Buffet</h1>
      </div>
      <b-row class="mt-5">
        <h1 class="lp-subtitle">Paquetes</h1>
      </b-row>

      <b-row class="mt-5">
        <b-col
          v-for="(pkg, index) in packageList"
          :key="index"
          cols="12"
          sm="12"
          md="4"
          class="mb-5"
        >
          <Card :imageUrl="pkg.imageUrl" :name="pkg.name" :to="pkg.to" />
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="12" sm="6" md="6" class="mb-5"
          ><h1 class="mt-5">Calidad</h1>
          <div class="lp-line"></div>
          <p class="m-5">
            Nos destacamos en la creación de eventos, donde cada
            detalle se adapta a sus necesidades y supera sus expectativas.
            Cumplimos con sus deseos en cada aspecto.
          </p>
        </b-col>
        <b-col cols="12" sm="6" md="6" style="background-image: url('https://www.orderyoyo.com/wp-content/uploads/2023/10/Buffet-Table-Plates-Olives.png');">
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12" sm="6" md="6" style="background-image: url('https://www.mashed.com/img/gallery/the-best-all-you-can-eat-buffets-in-every-state/intro-1682967790.jpg');">
        </b-col>
        <b-col cols="12" sm="6" md="6" class="mb-5"
          ><h1 class="mt-5">Personalización</h1>
          <div class="lp-line"></div>
          <p class="m-5">
            Realizamos un paquetes con todos los servicios y amenidades
            incluidas de acuerdo a tus gustos y necesidades
          </p>
        </b-col>
      </b-row>

      <b-row class="mt-5">
        <h1 class="lp-subtitle">Nuestros eventos</h1>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="12" sm="6" md="3" class="mb-5">
          <div>
            <b-img
              src="https://dosarroyos.mx/wp-content/uploads/2022/06/Cena-dos-arroyos-1024x683.jpg"
              fluid
              rounded
              alt="Nuestros-eventos-1"
            ></b-img>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="3" class="mb-5">
          <b-img
            src="https://cdn0.bodas.com.mx/vendor/1010/3_2/960/jpg/56510889-2329217620646604-2112741657542656000-o_5_161010-1565402685.jpeg"
            fluid
            rounded
            alt="Nuestros-eventos-2"
          ></b-img>
        </b-col>
        <b-col cols="12" sm="6" md="3" class="mb-5">
          <div>
            <b-img
              src="https://img77.uenicdn.com/image/upload/v1523890123/service_images/adobestock_120658057.jpg"
              fluid
              rounded
              alt="Nuestros-eventos-3"
            ></b-img>
          </div>
        </b-col>
        <b-col cols="12" sm="6" md="3" class="mb-5">
          <b-img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbAoJluL8HJNZxlIp6WYcdjzHO3C7EWH0c3qaiHpXBuJRbe-SYbcjM8VO6JkGgjZnIm2rHeDo8nvz1HbOmiL8mQd0wU3QsEDlFWXghJBer05Ib61smP4CoVCrZ8wGUh6wFKDP93w1u7c4/s1600/bufet.jpg"
            fluid
            rounded
            alt="Nuestros-eventos-4"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from "../../components/Card/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      packageList: [
        {
          imageUrl:
            "https://imgmedia.larepublica.pe/640x371/larepublica/migration/images/737LPQXOCNDAHMGNKZZAGOTGZQ.webp",
          name: "Nombre paquete",
          to: "/*",
          moreInfo: "/*",
        },
        {
          imageUrl:
            "https://i.blogs.es/6134cf/pexels-israel-franca-2264036/450_1000.jpeg",
          name: "Nombre paquete",
          to: "/*",
        },
        {
          imageUrl:
            "https://www.descubremadrid.com/wp-content/uploads/buffet-libre-madrid-scaled.jpg",
          name: "Nombre paquete",
          to: "/*",
        },
        {
          imageUrl:
            "https://www.poblanerias.com/wp-content/archivos/2024/01/desayunos-buffet-1021x580.jpg",
          name: "Nombre paquete",
          to: "/*",
        },
        {
          imageUrl:
            "https://i0.wp.com/coolbites.mx/wp-content/uploads/2019/02/Buffets-de-sushi-en-la-Ciudad-de-Me%CC%81xico.png?fit=1140%2C854&ssl=1",
          name: "Nombre paquete",
          to: "/*",
        },
        {
          imageUrl:
            "https://imgmedia.larepublica.pe/640x371/larepublica/migration/images/737LPQXOCNDAHMGNKZZAGOTGZQ.webp",
          name: "Nombre paquete",
          to: "/*",
        },
      ],
    };
  },
};
</script>

<style></style>
