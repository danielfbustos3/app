export const state = () => ({
  auth: null,
  devices: [],
  selectedDevice: {}
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  },
  setDevices(state, devices) {
    state.devices = devices;
  },
  setSelectedDevice(state, device) {
    state.selectedDevice = device;
  }
};

export const actions = {
  readToken() {
    let auth = null;

    try {
      auth = JSON.parse(localStorage.getItem("auth"));
    } catch (error) {
      console.log(error);
    }

    //guardar auth en state
    this.commit("setAuth", auth);
  },

  getDevices() {
    const axiosHeader = {
      headers: {
        token: this.state.auth.token
      }
    };

    this.$axios.get("/device", axiosHeader).then(res => {
      console.log(res.data.data);

      res.data.data.forEach((device, index) => {
        if (device.selected) {
          this.commit("setSelectedDevice", device);
          $nuxt.$emit("selectedDeviceIndex", index);
        }
      });
      this.commit("setDevices", res.data.data);
    });
  }
};