<template>
    <div>
		<!-- 문자열로 있는건 중괄호 -->
		<!-- html로 바인딩하려면 v-html -->
        <div>{{htmlString}}</div>
		<div v-html="htmlString"></div>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlString: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}

</script>
