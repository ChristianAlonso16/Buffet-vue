<template>
  <div
    class="w-100"
    @keydown.left="prevImage"
    @keydown.right="nextImage"
    tabindex="0"
  >
    <div>
      <b-row>
        <b-col class="img-size">
          <b-img
            fluid
            class="w-100 h-100 img"
            rounded
            :src="currentImage"
            alt=" image"
            @click="openModal"
          ></b-img>
          <div class="navigation-arrows">
            <span class="arrow arrow-left" @click="prevImage">
              <b-icon-caret-left-fill></b-icon-caret-left-fill>
            </span>
            <span class="arrow arrow-right" @click="nextImage">
              <b-icon-caret-right-fill></b-icon-caret-right-fill>
            </span>
          </div>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col
          v-for="(image, index) in imageList"
          :key="index"
          md="3"
          class="mb-3"
        >
          <b-img
            :class="{ 'selected-image': currentImage === image.image }"
            rounded
            :src="image.image"
            @click="changeImage(image)"
            class="w-100 h-100 img"
          />
        </b-col>
      </b-row>
    </div>
    <b-modal v-model="statusModal" hide-footer hide-header centered size="lg">
      <div>
        <b-img
          :src="currentImage"
          fluid
          alt="image"
          class="w-100 h-100"
        ></b-img>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    imageList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImageIndex: 0,
      statusModal: false,
    };
  },
  computed: {
    currentImage() {
      return this.imageList[this.currentImageIndex].image;
    },
  },
  methods: {
    changeImage(image) {
      this.currentImageIndex = this.imageList.indexOf(image);
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.imageList.length) %
        this.imageList.length;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imageList.length;
    },
    openModal() {
      this.statusModal = true;
    },
  },
};
</script>

<style>
.img {
  object-fit: cover;
  cursor: pointer;
}
.img-size {
  height: 400px;
}

@media screen and (max-width: 1024px) {
  .img-size {
    height: 350px;
  }
}
@media screen and (max-width: 750px) {
  .img-size {
    height: 300px;
  }
}
@media screen and (max-width: 540px) {
  .img-size {
    height: 250px;
  }
}
@media screen and (max-width: 480px) {
  .img-size {
    height: 200px;
  }
}
@media screen and (max-width: 360px) {
  .img-size {
    height: 150px;
  }
}
.navigation-arrows {
  position: relative;
  top: -50%;
}

.arrow {
  cursor: pointer;
  position: absolute;
  z-index: 1;
  color: white;
  font-size: 2vw;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
}
.arrow-left {
  left: 5px;
}

.arrow-right {
  right: 5px;
}
.selected-image {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 1);
  transition: 0.3s;
  cursor: pointer;
}
</style>