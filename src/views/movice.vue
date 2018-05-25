<template>
	<div class="wrap">
		<h1>{{msg}}</h1>
		<div>
			<input type="button" value="正在热映" @click='showNow()'>
			<input type="button" value="即将上映" @click="showLast()">
		</div>
		<div class="loading">
			<img src=""/>
		</div>
		<div class="listTitleWrap">
			<ul>
				<li v-for="item in listFilm">
					<label> <img :src='getImg(item.images.small)' /> </label>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
		<div class="footer">
			<ul>
				<li @click="fileOrder()">排行</li>
				<li @click="search()">搜索</li>
			</ul>
		</div>
		<div class="searchWrap" v-if="isSearchShow">
			<input type="text" value="请输入搜索内容" v-model="searchKey">
			<input type="button" value="搜索" @click="searchFn()">
			<input type="button" value="关闭" @click='closeSearch();'>
			<div class="resultWrap">
				<ul>
					<li v-for="item in searchResult">
						<label> <img :src='getImg(item.images.small)'></label>
						<p>{{item.title}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
//豆瓣api接口地址：https://developers.douban.com/wiki/?title=movie_v2

	import axios from 'axios';
	export default{
		name:'movieapp',
		data(){
			return{
				msg:'仿豆瓣app',
				listFilm:'',
				isSearchShow: false,
				searchKey:'',
				searchResult:'',
				//api接口
				apiList: {
		        in_theaters : '/v2/movie/in_theaters',
		        coming_soon : '/v2/movie/coming_soon',
		        top250 : 'v2/movie/top250',
		        search : '/v2/movie/search'
		    }
			}
		},

		created(){
			this.getData('/api/v2/movie/in_theaters');
		},
		methods:{
			getData(_url){
				axios.get(_url).then( (_data)=>{
					console.log(_data);
					this.listFilm = _data.data.subjects;
				});
			},

			showLast(){
				this.listFilm = '';
				this.getData('/api/v2/movie/coming_soon');
			},

			showNow(){
				this.listFilm = '';
				this.getData('/api/v2/movie/in_theaters');
			},

			fileOrder(){
				this.listFilm = '';
				this.getData('/api/v2/movie/top250');
				this.isSearchShow= false;
			},

			search(){
				this.searchResult = '';
				this.searchKey = '请输入搜索内容';
				this.isSearchShow= true;
			},

			searchFn(){
				axios.get('/api/v2/movie/search',{
					params:{
						q: this.searchKey
					}
				}).then((_data) => {
					console.log(_data);
					this.searchResult = _data.data.subjects;
				});
			},

			closeSearch(){
				this.isSearchShow = false;
			},

			//图片403缓存问题
			getImg(_url){
				if(_url !== undefined){
					let _u = _url.substring(7);
					return 'https://images.weserv.nl/?url=' + _u;
				}
			},
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin:0;
	}
	.wrap{
		position:relative;
	}
	.searchWrap{
		position: absolute;
		left: 0; 
		top:40px;
		width:100%;
		height:530px;
		background: #fff;
		z-index:99;
	}
	ul,li{
		list-style: none;
	}
	.listTitleWrap>ul,.resultWrap>ul{
		height:500px;
		overflow: hidden;
		overflow-y: scroll;
	}
	.listTitleWrap>ul li,.resultWrap>ul li{
		height:120px;
		clear: both;
		margin:5px auto;

	}
	ul>li>label{
		float:left;
		width:100px;
		height:100px;
		border:2px solid #333;
	}
	label>img{
		width: 100px;
		height: 100px;
	}
	ul>li>p{
		float: left;
	}
	.footer ul{
		overflow: hidden;
		width:240px;
		margin:0 auto;
	}
	.footer li{
		float: left;
		width:80px;
		height:30px;
		border:1px solid #333;
		margin:10px;
		line-height: 30px;
	}
</style>