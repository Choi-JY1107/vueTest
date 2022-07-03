<template>
    <div>
		<input
			   type="search"
			   naem="" id=""
			   @keyup="checkEnter($event)"
			   v-model="searchText"
		>
		<input
			   type="search"
			   naem="" id=""
			   @keyup.ctrl.enter="doSearch"
			   v-model="searchText"
		>
		<button @click="doSearch">조회</button>
		<button type="submit" @click.prevent="doSearch">hello</button>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}

</script>
