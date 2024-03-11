<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="12" md="12">
          <div class="info-container">
            <p>Última modificación: {{ data.modifiedAt }}</p>
            <IconStatus :status="status" />
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="7">
          <b-form-group
            id="fgname"
            label="Nombre del paquete"
            label-for="lbname"
          >
            <b-input disabled v-model="data.packageName"></b-input>
          </b-form-group>

          <b-form-group
            id="fgdescription"
            label="Descripción del paquete"
            label-for="lbdescription"
          >
            <b-form-textarea
              disabled
              size="sm"
              v-model="data.packageDescription"
              placeholder="Sin descripción"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group class="spacetop" label="Capacidad de personas">
            <b-input v-model="data.ability" disabled></b-input>
          </b-form-group>
          <b-row>
            <b-col>
              <b-form-group class="spacetop" label="Precio">
                <b-input-group prepend="$">
                  <b-form-input
                    v-model="data.price"
                    id="ipprice"
                    disabled
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group class="spacetop" label="Descuento">
                <b-input-group prepend="$">
                  <b-form-input
                    v-model="data.discount"
                    prepend="$"
                    disabled
                    placeholder="00.00"
                  ></b-form-input>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
        <b-col cols="5" class="colstyle">
          <b-row>
            <div v-if="data.image" class="imageShow">
              <b-img
                :src="data.image"
                v-model="data.image"
                fluid
                :alt="data.packageName"
                rounded
                center
                class="imgsize"
              ></b-img>
            </div>
            <div v-else class="imageShow">
              <div class="imgsizenone"><p>No hay imagen disponible</p></div>
            </div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import IconStatus from "./IconStatus.vue";
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      status: this.data.status,
    };
  },
  methods: {},
  components: {
    IconStatus,
  },
};
</script>

<style>
.spacetop {
  margin-top: 15px;
}
.colstyle {
  justify-content: center;
  align-items: center;
  display: flex;
}
.info-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
