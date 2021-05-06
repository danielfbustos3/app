<template>
  <div class="row">
    <WidgetIotButton :config="configButton"></WidgetIotButton>
  </div>
</template>

<script>
import WidgetIotButton from "../components/WidgetIotButton.vue";
export default {
  components: { WidgetIotButton },
  data() {
    return {
      value: false,
      configButton: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "984237562348756ldksjfh",
          saverRule: false
        },
        variableFullName: "Pump",
        variable: "var1",
        icon: "fa-sun",
        column: "col-6",
        widget: "indicator",
        class: "warning",
        message: "{'fanstatus':'stop'}"
      },

      configIndicator: {
        userId: "userid",
        selectedDevice: {
          name: "Home",
          dId: "8888",
          templateName: "Power Sensor",
          templateId: "984237562348756ldksjfh",
          saverRule: false
        },
        variableFullName: "Pump",
        variable: "var1",
        icon: "fa-sun",
        column: "col-6",
        widget: "indicator",
        class: "warning"
      }
    };
  },
  methods: {}
};
</script>
