class particle {
    constructor(x,y,w,h){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
            
        }
        this.r =10
        this.body = Bodies.circle(x,y,this.r,options)

        World.add(world,this.body)

    }
    display(){
    this.body = Bodies.circle(x,y,this.r,options)
    this.color=color(random(0,255), random(0,255))
    World.add(world, this.body)
        
        push()
        Translate(pos.x,pos.y)
        rotate(angle)
        ImageMode(CENTER)
        noStroke()
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}