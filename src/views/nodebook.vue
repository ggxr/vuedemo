<template>
	<div>
		<h1>{{title}}</h1>
		标题：<input type="text" value="">
		内容：<input type="text" value="">
		<input type="button" value="提交">
		<div>
			<ul>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		name : 'nootbook',
		data(){
			return{
				title:'nootbook mongodb',
				
			}
		},
		methods:{

		}
	}
</script>