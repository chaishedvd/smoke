class SmokeSystem{// class :建構新物件 Smoke
    constructor(x,y){ // 定義二維陣列原型
           this.x=x; // x 維度長度
           this.y=y; // y 維度長度
           this.life=500;
           this.smokes=[];
           
    }

    update(){//更新
         this.life--;
         this.smokes.push(new Smoke(this.x, this.y));
         for(let i=0;i<this.smokes.length;i++){
            let die=this.smokes[i].update();
            if(die){
                this.smokes.splice(i, 1);
                i--;
            }

         }
        

         return this.life<=0;
    }
    render(){   
        for(let i=0;i<this.smokes.length;i++){
            this.smokes[i].render();
        }
    }}


   
class Smoke{// class :建構新物件 Smoke
    constructor(x,y){ // 定義二維陣列原型
           this.x=x; // x 維度長度
           this.y=y; // y 維度長度
           this.vx=Math.random()*1-0.5;
           this.vy=Math.random()*1-2;
           this.size=5;
           this.alpha=1;//透明度
           
    }

    update(){//更新
         this.x+=this.vx;
         this.y+=this.vy;
         this.size+=0.1;
         this.alpha-=0.002;
         if(this.alpha<=0){
            this.alpha=0;
         }
         return this.y<0;
    }
    render(){   //繪圖
    ctx.globalAlpha=this.alpha;
    // let img=new Image();
    // img.src="smoke.png";
    // img .addEventListener("load" , function(){}
    
    ctx.drawImage(smokeImage,
    this.x, this.y,
    this.size, this.size
);
}
}