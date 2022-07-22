<template>
<div class="Slider">
	<carousel
	@nex="nex"
	@prev="prev"
	>
	<carousel-slide v-for="(slide,index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide"> 
	<img :src="slide.img"/>
	<div class="slide-page mt-3">
	<h5>{{ slide.title }}</h5>
<p>{{ slide.testimonial }}</p>
	</div>
	</carousel-slide>
	</carousel>
</div>
	
</template>

<script>

import Carousel from "@/components/Carousel.vue";
import CarouselSlide from "@/components/CarouselSlide.vue";
export default {
	components: {
		Carousel ,
			CarouselSlide
		},
		data() {
			return {
				slides: [
					{ 'img': 'https://picsum.photos/id/237/600/350',
						'title': 'Leandre',
						'testimonial':"Jesse shows a lot of promise as a software developer. When he is focused, he works very diligently.  His coding skills are gradually and steadily improving over time. I'm always happy seeing Jesse grow as a developer and I hope he continues to work hard.",
					},
					{
						'img': 'https://picsum.photos/id/232/600/350',
						'title': 'Jason',
					    'testimonial': 'Jesse focused and dedicated. This has been shown with the quality of work he produces, as well as the assistance he gives his peers. Jesse also has a great talent for turning designs into working code and creating new implementations from concepts he is given. I know that Jesse will be a great value to any workforce.'},
					{
						'img': 'https://picsum.photos/id/263/600/350',
						'title': 'Carla',
						'testimonial': 'Jesse Spence is a highly talented web developer with a creative edge and driven spirit. One thing is for sure that he is both efficient and proficient and will not disappointment. Anything he creates, shows his vast knowledge in excellent user experience which speaks greatly of his digital marketing background. It has been a privilege to work alongside him and get to know the gem of a person that he is.',
					},
					{
						'img': 'https://picsum.photos/id/234/600/350',
					    'title': 'Muda',
						'testimonial': "Jesse shows a lot of promise as a software developer. When he is focused, he works very diligently.  His coding skills are gradually and steadily improving over time. I'm always happy seeing Jesse grow as a developer, and I hope he continues to work hard.",
					},
					{
						'img': 'https://picsum.photos/id/235/600/350',
					    'title': 'Cassidy',
						'testimonial': "Jesse shows a lot of promise as a software developer. When he is focused, he works very diligently.  His coding skills are gradually and steadily improving over time. I'm always happy seeing Jesse grow as a developer, and I hope he continues to work hard.",
					},
					{ 'img': 'https://picsum.photos/id/239/600/350',
					   'title': 'Miks and Cammy',
						'testimonial': "Jesse shows a lot of promise as a software developer. When he is focused, he works very diligently.  His coding skills are gradually and steadily improving over time. I'm always happy seeing Jesse grow as a developer, and I hope he continues to work hard.",
					}
				],
				visibleSlide : 0,
			};
		},
		computed: {
		slideslen(){
				return this.slides.length;
			}
		},
		methods: {
			nex() {
				if(this.visibleSlide >= this.slideslen - 1) {
					this.visibleSlide = 0;
				}else {
					this.visibleSlide++;
				}
			},
			prev() {
				if (this.visibleSlide <= 0) {
					this.visibleSlide = this.slideslen - 1
				} else {
					this.visibleSlide--;
				}
			}

	},
	};
</script>

<style scoped>
.Slider{
	display:flex;
	justify-content: center;
	padding-top: 10%;
	
}
.slide-page{
	border:2px solid var(--el-color);
	padding:5%;
	background: var(--text-mute);
	text-align: center;
	border-radius:20%;
}
p{position:relative}
p::before{
content:"❝";
position:absolute;
left:-5px;
color:var(--el-color);
top:-20px;
}
p::after{
content:"❞";
position:absolute;
right:10px;
color:var(--el-color);
bottom:-15px;
}
img{
	border: 5px solid var(--el-color);
}
	</style>