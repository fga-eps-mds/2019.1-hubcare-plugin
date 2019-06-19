//##########################################TETRIS###############################################

var refreshT,fallBlockT;
var fallTimout;
var speed = 1000, downSpeed = 30, nomrlSpeed = 1000;
var fallLine = 20, rlMove = 4,score = 0,death=false;

var data = [] ,data2 = [];

Array.prototype.clone=function(){ var a=[]; for(var i=0,l=this.length;i<l;i++){ if(this[i] instanceof Array){ a.push(this[i].clone()); }else{ a.push(this[i]); }} return a; }

var block1={
    basePt :  [[0,0],[0,1],[1,0],[1,1]],
    roate: function(){
        
    }
};
var block2={
    basePt :  [[0,0],[1,0],[2,0],[2,1]],
    shapList:[
        [[0,0],[1,0],[2,0],[2,1]],
        [[0,0],[0,1],[0,2],[1,0]],
         [[0,0],[0,1],[1,1],[2,1]],
          [[0,2],[1,0],[1,1],[1,2]]
        ],
    shapIndex : 0,
    roate: function(){
        this.shapIndex ++;
        this.basePt = this.shapList[this.shapIndex%this.shapList.length].clone();
    }
};
var block3={
    basePt :  [[0,1],[1,0],[1,1],[2,0]],
    shapList:[
       [[0,1],[1,0],[1,1],[2,0]],
        [[0,0],[0,1],[1,1],[1,2]],
         [[0,1],[1,0],[1,1],[2,0]],
          [[0,0],[0,1],[1,1],[1,2]]
        ],
    shapIndex : 0,
    roate: function(){
        this.shapIndex ++;
        this.basePt = this.shapList[this.shapIndex%this.shapList.length].clone();
    }
};
var block4={
    basePt :  [[0,0],[1,0],[1,1],[2,1]],
    shapList:[
        [[0,0],[1,0],[1,1],[2,1]],
        [[0,1],[0,2],[1,0],[1,1]]
        ],
    shapIndex : 0,
    roate: function(){
        this.shapIndex ++;
        this.basePt = this.shapList[this.shapIndex%this.shapList.length].clone();
    }
};
var block5={
    basePt :  [[0,0],[0,1],[1,0],[2,0]],
    shapList:[
        [[0,0],[0,1],[1,0],[2,0]],
        [[0,0],[0,1],[0,2],[1,2]],
         [[0,1],[1,1],[2,1],[2,0]],
          [[0,0],[1,0],[1,1],[1,2]]
        ],
    shapIndex : 0,
    roate: function(){
        this.shapIndex ++;
        this.basePt = this.shapList[this.shapIndex%this.shapList.length].clone();
    }
};
var block6={
    basePt :  [[0,0],[1,0],[1,1],[2,0]],
    shapList:[
       [[0,0],[1,0],[1,1],[2,0]],
        [[0,0],[0,1],[0,2],[1,1]],
         [[1,0],[0,1],[1,1],[2,1]],
          [[0,1],[1,0],[1,1],[1,2]]
        ],
    shapIndex : 0,
    roate: function(){
        this.shapIndex ++;
        this.basePt = this.shapList[this.shapIndex%this.shapList.length].clone();
    }
};
var block7={
    basePt :  [[-1,0],[0,0],[1,0],[2,0]],
    shapList:[
       [[-1,0],[0,0],[1,0],[2,0]],
       [[0,0],[0,1],[0,2],[0,3]]
        ],
    shapIndex : 0,
    roate: function(){
        this.shapIndex ++;
        this.basePt = this.shapList[this.shapIndex%this.shapList.length].clone();
    }
};

var blocks = [block1,block2,block3,block4,block5,block6,block7];

var randomBlock = function(){
  var rnm=  parseInt(Math.random()*100)%7;
  var blk = blocks[rnm];
  var ck = Math.random()*6;
  for (var i = 0; i < ck; i++) {
      blk.roate();
  }
  return blk;
};
var firstBlock = randomBlock();
// 全部方块
for (var j = 0; j < 20; j++) {
    for (var i = 0; i < 10; i++) {
        data.push([i,j,0]);
    }
}

var option = {
    backgroundColor:  '#aaa',
    title: [{
        text: '俄罗斯方块'
    },{
        text: "    当前得分：0",
        left:550,
        top: '30%'
    },
    {
        text: "   ←、→ 左右移动\r\n\r\n↓ 加速下落，↑ 变形",
        left:550,
        top: '60%'
    }],
    grid:{
        show:true,
        borderColor :'#000',
        z:2,
        top:50,
        left:200,
        height:520,
        width:260
    },
    legend: {
       show:false
    },
    xAxis: {
         interval :2,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        max:10,
        axisTick :{
            show:false
        },
        axisLabel :{
            show:false
        } ,
        axisLine :{
            show:false
        }
    },
    yAxis: {
        interval :2,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        max:20,
        axisTick :{
            show:false
        },
        axisLabel :{
            show:false
        } ,
        axisLine :{
            show:false
        }
       
    },
    series: [{
        data: data,
        type: 'scatter',
        symbol :'rect',
        symbolSize: function(v){
            return v[2]*26;
        },
        symbolOffset :[13,-13],
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(120, 36, 50, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(251, 118, 123)'
                }, {
                    offset: 1,
                    color: 'rgb(204, 46, 72)'
                }])
            }
        }
    },{
        data: data2,
        type: 'scatter',
        symbol :'rect',
        symbolSize: function(v){
            return v[2]*26;
        },
        symbolOffset :[13,-13],
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
               color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(151, 218, 23)'
                }, {
                    offset: 1,
                    color: 'rgb(104, 100, 5)'
                }])
            }
        }
    }]
};

console.log('my options')
console.log(option)
var touchDistortionOther = function(){
    var old_Pts = firstBlock.basePt.clone();
    firstBlock.roate();
    var isTouch = touchFallOther();
    firstBlock.basePt = old_Pts;
    firstBlock.shapIndex--;
    
    return isTouch;
}

var touchFallOther = function(){
   var pts = firstBlock.basePt.clone();
   
     for (var i = 0; i < pts.length; i++) {
       var da_i = pts[i][0]+rlMove;
       var da_j =  pts[i][1]+fallLine;
       if(da_i<0 || da_i >=10){
           return true;
       }
       if( option.series[0].data[da_j*10+da_i] && option.series[0].data[da_j*10+da_i][2] === 1){
           return true;
       }
   }
   return false;
}
var touchLeftRightOther = function(lrOffset){
    var pts = firstBlock.basePt.clone();
    var preLR_move = rlMove + lrOffset;
    
     for (var i = 0; i < pts.length; i++) {
       var da_i = pts[i][0] + preLR_move;
       var da_j =  pts[i][1] + fallLine;
       if(da_i<0 || da_i >=10){
           return true;
       }
       if( option.series[0].data[da_j*10+da_i] && option.series[0].data[da_j*10+da_i][2] === 1){
           return true;
       }
   }
   return false;
}
var setScore = function(){
    for (var j = 0; j < 20; j++) {
        var rowBlok=0;
        for (var i = 0; i < 10; i++) {
           rowBlok+= option.series[0].data[j*10+i][2]
        }
        //消除一行
        if(rowBlok == 10){
            for (var k = j+1; k < 20; k++) {
                for (var m = 0; m < 10; m++) {
                    option.series[0].data[(k-1)*10+m][2] = option.series[0].data[k*10+m][2];
                }
            }
            score++;
           option.title[1].text = '    当前得分：'+score;
           j--;
        }
    }
};
var  checkDeath = function(){
    for (var i = 0; i < 10; i++) {
         if( option.series[0].data[19*10+i][2] === 1){
             death = true;
              option.title[1].text = '游戏结束\r\n\r\n    本次得分：'+score;
         }
    }
};
refreshT = function () {
   var pts = firstBlock.basePt.clone();
   
   if(fallLine < 0 || touchFallOther()){
      for ( i = 0; i < pts.length; i++) {
          var da_i = pts[i][0]+rlMove;
          var da_j =  pts[i][1]+fallLine+1;
          if(option.series[0].data[da_j*10+da_i]){
            option.series[0].data[da_j*10+da_i][2] = 1;
          }
      }
      myChart.setOption(option);
      //计算得分
      setScore();
      checkDeath();
       option.series[1].data=[];
       firstBlock = randomBlock();
       rlMove = 4;
       fallLine = 20;
       speed = nomrlSpeed;
   }else{
       for (var i = 0; i < pts.length; i++) {
           //横轴移动4
           pts[i][0]+=rlMove;
           pts[i][1]+=fallLine;
           pts[i][2]=1;
        }
        option.series[1].data = pts;
   }
   //停止下落，
//   option.series[1].data = pts;
//   option.series[0].data = data;
   myChart.setOption(option);
    
};

fallBlockT = function () {
    if(death) return;
  fallLine--;
  refreshT();
 fallTimout = setTimeout( fallBlockT, speed);
};
fallBlockT();
document.onkeydown = function (event) { 
	if (event && event.keyCode === 37 ) {
        if(!touchLeftRightOther(-1)){
            rlMove--;
            refreshT();
        }
	}
	if (event && event.keyCode === 40 ) {
          speed = downSpeed;
          clearTimeout(fallTimout);
          fallBlockT();
	}
	if (event && event.keyCode === 39 ) {
          if(!touchLeftRightOther(1)){
            rlMove++;
            refreshT();
        }
	}
	//变形
	if (event && event.keyCode === 38 ) {
          if(!touchDistortionOther()){
           firstBlock.roate();
           refreshT();
        }
	}
}