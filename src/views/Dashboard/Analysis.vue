<template>
  <div>
    <Chart :option="chartOption" style="height: 500px;" />
  </div>
</template>

<script>
// import random from "lodash/random";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import request from "../../utils/request";
import Chart from "../../components/Chart";
export default {
  name: "Analysis",
  data() {
    return {
      chartOption: {}
    };
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      // this.chartOption.series[0].data = this.chartOption.series[0].data.map(
      //   () => random(100)
      // );
      // this.chartOption = { ...this.chartOption };
      this.getChartData();
    }, 3000);
  },
  methods: {
    getChartData() {
      // axios
      //   .get("/api/dashboard/chart", { params: { ID: 12345 } })
      request({
        url: "/api/dashboard/chart",
        method: "get",
        params: { ID: 12345 }
      }).then(response => {
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  },
  components: {
    Chart
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped></style>
