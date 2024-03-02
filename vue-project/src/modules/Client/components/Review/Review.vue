<template>
  <div>
    <div class="mt-1">
      <div class="d-flex justify-content-start text-start">
        <b-row>
          <b-col md="2">
            <div class="user-pic">
              <b-avatar></b-avatar></div
          ></b-col>

          <b-col
            ><div>
              <p class="fw-semibold">Martes 27, Febrero a las 11:28am</p>
              <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <p class="p-justify-text mt-1">
        I've been using this product for a few days now and I'm really
        impressed! The interface is intuitive and easy to use, and the features
        are exactly what I need to streamline my workfloed! The interface is
        intuitive and easy to use, and the features are exactly what I need to
        streamline my workflow. I've been using
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.rating {
  color: #ed8003;
  font-size: 24px;
  margin-top: -20px;
}

.star {
  display: inline-block;
}
.user-pic {
  width: 40px;
  height: 40px;
  background-color: #f1f1f1;
  border-radius: 50%;
}
</style>