class swing{
	constructor(start,long,radius,mass,deg=Math.PI/2,count=500000,origin_dis=long){
		this.long=long
		this.end=new vec2(0,0).set(long,deg).add(start)
		this.start=start.scale(1,1)
		this.center=new physic_ball(start.x,start.y,10,Infinity)
		this.center.isgravity=false
		this.ball=new physic_ball(this.end.x,this.end.y,radius,mass)
		this.color='red'
		world.add(this.ball)
		world.add(this.center)
		world.add_constraint(this.ball,this.center,origin_dis,count)
	}
	draw(){
		ctx.beginPath()
		ctx.moveTo(this.center.position.x,this.center.position.y)
		ctx.lineTo(this.ball.position.x,this.ball.position.y)
		ctx.lineWidth=5
		ctx.closePath()
		ctx.strokeStyle='white'
		ctx.stroke()
		this.center.draw_helper('white')
		this.ball.draw_helper(this.color)
	}
	
	
}























































/*
//example
class example{
	constructor(aa){
		let element={
			position:{x:0,y:0},
			rotation:0,
			scale:{x:1,y:1},
			through:1,
			visible:true,
			style:0,
		}
		this.styles=[]
		this.group=[]
		//this.styles.push({method:'drawer',array:[]})
		//this.styles.push({method:'img',img:document.getElementById(''),middle:{x:,y:},path:[]})

		Object.assign(element,aa)
		Object.assign(this,element)
	}
	draw(){
		if(this.visible){
			if(this.styles[this.style].method==='img'){
				ctx.save()
				ctx.translate(this.position.x,this.position.y)
				ctx.rotate(this.rotation)
				ctx.scale(this.scale.x,this.scale.y)
				ctx.globalAlpha=this.through
				ctx.drawImage(this.styles[this.style].img,-this.styles[this.style].middle.x,-this.styles[this.style].middle.y)
				ctx.globalAlpha=1.0
				ctx.restore()
			}else{
				ctx.save()
					ctx.translate(this.position.x,this.position.y)
					ctx.rotate(this.rotation)
					ctx.scale(this.scale.x,this.scale.y)
					drawer(this.styles[this.style].array,this.through)
				ctx.restore()
			}
			
		}
	}
	ispointinpath(x,y){
		if(this.styles[this.style].method==='img'){
			ctx.save()
			ctx.translate(this.position.x,this.position.y)
			ctx.rotate(this.rotation)
			ctx.scale(this.scale.x,this.scale.y)
			ctx.beginPath()
			for(let i=0;i<this.styles[this.style].path.length;i++){
				if(i===0){
					ctx.moveTo(this.styles[this.style].path[i].x,this.styles[this.style].path[i].y)
				}else{
					ctx.lineTo(this.styles[this.style].path[i].x,this.styles[this.style].path[i].y)
				}
			}
			ctx.closePath()
			ctx.restore()
			return ctx.isPointInPath(x,y)
		}else{
			ctx.save()
			ctx.translate(this.position.x,this.position.y)
			ctx.rotate(this.rotation)
			ctx.scale(this.scale.x,this.scale.y)
			return ispointinarraypath(x,y,this.styles[this.style].array)
		}
		
	}
	addimg(src,middle,path){
		let img=new Image()
		img.src=src 
		this.styles.push({method:'img',img:img,middle:middle,path:path})
	}
}
*/