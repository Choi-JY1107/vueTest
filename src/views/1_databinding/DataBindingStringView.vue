<template>
	<div>
		<h1>
			Hello {{userName}}
		</h1>
		<p>
			{{message}}
		</p>

	</div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome 재여영',
      arr: [],
      obj: {}
    }
  }
}
</script>

<!-- 이 화면에만 쓰임 -->
<style scoped>
.text-red{
		color:red;
}
</style>
