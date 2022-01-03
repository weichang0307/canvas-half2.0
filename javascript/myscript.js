
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
let ss=[]
let choose=0
let sl01
let sl02

let ispress=false
let mousepress=false
function init(){
	
	world=new physic_world(0,0,500)
	camera=new Camera(1000,800)
	let nn=10
	let rr=20
	for(let i=0;i<nn;i++){
		let deg=Math.PI/2
		ss[i]=new swing(new vec2(i*rr*2,0),200,rr,10,deg)
	}
	ss[0].color='yellow'
	sl01=new Slider(ww/2-1020,-wh/2+100,1000,10,'deg:',0,360)
	sl01.value=ss[choose].ball.position.minus(ss[choose].start).deg()*360/2/Math.PI
	
	
	
	//event
	window.addEventListener('keydown',keydown)
	window.addEventListener('keyup',keyup)
	window.addEventListener('resize',mysize)
	window.addEventListener('mousedown',mousedown)
	window.addEventListener('mouseup',mouseup)
	window.addEventListener('mousemove',mousemove)
}
function update(){
	tt+=1000/fps
	world.update(1/fps)
	
}
function draw(){
	camera.start(ctx)
	background('black',-1000,-800,2000,1600)

	for(let i of ss){
		i.draw()
	}
	ctx.fillStyle='white'
	let text='ball '+(choose+1)+' > '
	ctx.font='60px sans-serif'
	ctx.fillText(text,ww/2-ctx.measureText(text).width,-wh/2+60)


	sl01.draw()
	camera.end(ctx)

	requestAnimationFrame(draw)
}
setInterval(update,1000/fps)
requestAnimationFrame(draw)


//event function
function keydown(e){
	keyid=e.code
	
	if(keyid==='ArrowRight'){
		let cc=choose
		choose+=1
		if(choose>ss.length-1){
			choose=0
		}
		ss[cc].color='red'
		ss[choose].color='yellow'
		sl01.value=ss[choose].ball.position.minus(ss[choose].start).deg()*360/2/Math.PI
	}
	if(keyid==='Enter'){
		world.gravity.y=1000
	}
	
}
function keyup(e){
	keyid=e.code
	
	
}
function mousedown(e){
	mousepress=true
	let pp=get_p_in_world(e.pageX,e.pageY)
	sl01.change(pp.x,pp.y,50)
	ss[choose].ball.position.set_in(ss[choose].long,Math.floor(sl01.value)*2*Math.PI/360)
	ss[choose].ball.position.add_in(ss[choose].start)
}
function mouseup(e){
	mousepress=false
}
function mousemove(e){
	let pp=get_p_in_world(e.pageX,e.pageY)
	if(mousepress){
		sl01.change(pp.x,pp.y,50)
		
		ss[choose].ball.position.set_in(ss[choose].long,Math.floor(sl01.value)*2*Math.PI/360)
		ss[choose].ball.position.add_in(ss[choose].start)
	}

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

















