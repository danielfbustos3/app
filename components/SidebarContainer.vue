<template>
    <div :data="sidebarBackground">
        <side-bar
      :background-color="sidebarBackground"
      short-title="ProC"
      title="IoT technologies"
    >
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'tim-icons icon-chart-pie-36',
            path: '/dashboard'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Devices',
            icon: 'tim-icons icon-chart-pie-36',
            path: '/devices'
          }"
        >
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Alarms',
            icon: 'tim-icons icon-chart-pie-36',
            path: '/alarms'
          }"
        >
        </sidebar-item>


        <sidebar-item
        :link="{
          name: 'Templates',
          icon: 'tim-icons icon-chart-pie-36',
          path: '/templates'
        }"
      >
      </sidebar-item>




      </template>
    </side-bar>
    </div>
</template>
