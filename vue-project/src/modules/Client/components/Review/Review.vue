<template>
  <div>
    <div class="mt-1">
      <div class="d-flex justify-content-start text-start">
        <b-row>
          <b-col lg="2" md="2" sm="2" xs="2" class="mb-2">
            <div class="user-pic">
              <b-avatar size="50"></b-avatar>
            </div>
          </b-col>

          <b-col>
            <p class="fw-semibold">{{ date }}</p>
            <div class="rating">
              <span
                v-for="id in 5"
                :key="id"
                class="star"
                :class="{ 'disabled-star': id > review.point }"
                >&#9733;</span
              >
            </div>
          </b-col>
        </b-row>
      </div>

      <p class="p-justify-text mt-1">
        {{ review.comment }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
    },
  },
  data() {
    return {
      date: "",
    };
  },
  methods: {
    dateFormater(date) {
      const temp = new Date(date);
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      let formattedDate = temp.toLocaleString("es-ES", options);
      formattedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
      return formattedDate;
    },
  },
  mounted() {
    this.date = this.dateFormater(this.review.commentDate);
  },
};
</script>

<style>
.rating {
  font-size: 24px;
  margin-top: -20px;
}

.star {
  color: #ed8003;
  display: inline-block;
}
.disabled-star {
  color: #919191;
  display: inline-block;
}
.user-pic {
  width: 50px;
  height: 50px;
  background-color: #f1f1f1;
  border-radius: 50%;
}
</style>