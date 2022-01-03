
const canvas=document.getElementById('mycanvas');
const ctx=canvas.getContext('2d');
let ww=2000
let wh=1600
mysize()
const is_computer=iscomputer()

mx=ww/2
my=wh/2
let fps=50
//全域變數
let keys={} 
let world;
let tt=0
let camera

let s01
let b01



let ispress=false
function init(){
	
	world=new physic_world(0,1000,50)
	camera=new Camera(1000,800)
	
	s01=new Slider(0,0,300,10,'Test',0,100)
	s01.on()

	b01=new Button(0,200,200,50,'test')
	b01.on()
	

	//event
	window.addEventListener('keydown',keydown)
	window.addEventListener('keyup',keyup)
	window.addEventListener('resize',mysize)
}
function update(){
	tt+=1000/fps
	world.update(1/fps)
	
	
}
function draw(){
	camera.start(ctx)
	background('yellow',-1000,-800,2000,1600)
	
	s01.draw()
	b01.draw()


	camera.end(ctx)

	requestAnimationFrame(draw)
}
setInterval(update,1000/fps)
requestAnimationFrame(draw)


//event function
function keydown(e){
	keyid=e.code
	
	
	
}
function keyup(e){
	keyid=e.code
	
	
}











function get_p_in_world(x,y){
	let fx=(x-parseFloat(canvas.style.left))*ww/canvas.width-camera.middle.x+camera.position.x
	let fy=(y-parseFloat(canvas.style.top))*ww/canvas.width-camera.middle.y+camera.position.y
	return new vec2(fx,fy)
}
function mysize(){
	if(window.innerHeight/window.innerWidth>=wh/ww){
		canvas.style.width=window.innerWidth+'px'
		canvas.style.height=wh*window.innerWidth/ww+'px'
		canvas.width=window.innerWidth
		canvas.height=wh*window.innerWidth/ww
		canvas.position='absolute'
		canvas.style.position='absolute'
		canvas.style.left=0+'px'
		canvas.style.top=0+'px'
	}else{
		canvas.style.width=ww*window.innerHeight/wh+'px'
		canvas.style.height=window.innerHeight+'px'
		canvas.width=ww*window.innerHeight/wh
		canvas.height=window.innerHeight
		canvas.style.position='absolute'
		canvas.style.left=(window.innerWidth-canvas.width)/2+'px'
		canvas.style.top=0+'px'
		
	}
	ctx.restore()
	ctx.save()

	if(window.innerHeight/window.innerWidth>=wh/ww){
		ctx.scale(window.innerWidth/ww,window.innerWidth/ww)
	}else{
		ctx.scale(window.innerHeight/wh,window.innerHeight/wh)
	}
	
}
function iscomputer(){
	let iscom=true
	let phone_char= ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
	for(let i of phone_char){
		if(navigator.userAgent.match(i)){
			iscom=false
			break
		}
	}
	return iscom
}

init()

















