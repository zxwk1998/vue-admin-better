<template>
  <div class="map-container">
    <div id="map" class="container"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import * as mapv from 'mapv'
  export default {
    name: 'Map',
    components: {},
    data() {
      return {}
    },
    created() {},
    mounted() {
      this.$nextTick(() => {
        const map = this.$baseMap()
        axios
          .get(
            'https://fastly.jsdelivr.net/npm/mapv@2.0.12/examples/data/od-xierqi.txt'
          )
          .then((rs) => {
            let data = []
            let timeData = []

            rs = rs.data.split('\n')
            let maxLength = 0
            for (let i = 0; i < rs.length; i++) {
              let item = rs[i].split(',')
              let coordinates = []
              if (item.length > maxLength) {
                maxLength = item.length
              }
              for (let j = 0; j < item.length; j += 2) {
                let x = (Number(item[j]) / 20037508.34) * 180
                let y = (Number(item[j + 1]) / 20037508.34) * 180
                y =
                  (180 / Math.PI) *
                  (2 * Math.atan(Math.exp((y * Math.PI) / 180)) - Math.PI / 2)
                if (x == 0 || y == NaN) {
                  continue
                }
                coordinates.push([x, y])
                timeData.push({
                  geometry: {
                    type: 'Point',
                    coordinates: [x, y],
                  },
                  count: 1,
                  time: j,
                })
              }
              data.push({
                geometry: {
                  type: 'LineString',
                  coordinates: coordinates,
                },
              })
            }

            let dataSet = new mapv.DataSet(data)

            let options = {
              strokeStyle: 'rgba(53,57,255,0.5)',
              // globalCompositeOperation: 'lighter',
              shadowColor: 'rgba(53,57,255,0.2)',
              shadowBlur: 3,
              lineWidth: 3.0,
              draw: 'simple',
            }

            let mapvLayer = new mapv.MaptalksLayer(
              'mapv1',
              dataSet,
              options
            ).addTo(map)

            let dataSet2 = new mapv.DataSet(timeData)

            let options2 = {
              fillStyle: 'rgba(255, 250, 250, 0.2)',
              globalCompositeOperation: 'lighter',
              size: 1.5,
              animation: {
                stepsRange: {
                  start: 0,
                  end: 100,
                },
                trails: 3,
                duration: 5,
              },
              draw: 'simple',
            }

            let mapvLayer2 = new mapv.MaptalksLayer(
              'mapv2',
              dataSet2,
              options2
            ).addTo(map)
          })
      })
    },
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .map-container {
    .container {
      width: 100%;
      height: calc(100vh - 214px);
    }
  }
</style>
