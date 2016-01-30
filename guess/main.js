var app = new Vue({
		el: '#app',
		data () {
    return {
      totalScore: 5000,
      gsRaiseClass: '', // 加减积分cur
      gsRaiseFlag: false,
      gsCombo: 0, // 连击指数,4-6连击积分再翻倍，7+连击翻两番
      gsRaiseNum: 100,
      musicOpen: false,
      gscallStatus: null, // 押注位置(「大」，「小」，「豹子」)
      gsResult: false,
      resultNum:{
        a:'',
        b:'',
        c:'',
        count: '',
        win: null,
        prize: null  //奖励积分数
      },
      sanziGroup: {
        one: 'one',
        two: 'two',
        three: 'three',
      },
      rock: {
        flag: false,
        hideFn:null
      },
      gsBang: false,
      gsRules: false
    }
    
  },
  ready(){
  	var _self = this;
      var ts = localStorage.getItem("gsScore");
        ts ? _self.totalScore = parseInt(ts): _self.totalScore;
    document.getElementById('mask').style.display = 'none';
  },
  methods:{
      gsRaise (option){
        var _self = this;
        _self.gsRaiseFlag = !_self.gsRaiseFlag;
        if(_self.gsRaiseFlag&&!_self.rock.flag){
          if(option == 'less'){
            _self.gsRaiseClass = 'less';
            
            _self.gsRaiseNum < 200? _self.gsRaiseNum = 100 :_self.gsRaiseNum -= 100;
          }else if(option == 'add'){
            _self.gsRaiseClass = 'add'
            _self.gsRaiseNum += 100;
          }
          // document.getElementById('btnSound').play();
        }
         setTimeout(function(){
            _self.gsRaiseFlag = !_self.gsRaiseFlag;
            _self.gsRaiseClass = '';
         },300) 
          
          
      },
      addScore (){
        var _self = this;
        alert('未完成')
      },
      openBang(){
      	var _self = this;
      		_self.gsBang = true;
      },
      openRules (){
		var _self = this;
      		_self.gsRules = true;
      },
      selectfrom (lowValue,highValue){
        
        var _self = this;
        var a,b,c;
        var choice=highValue-lowValue+1;
        var zimu = ['one','two','three','four','five','six'];
         _self.gsResult = false;
         _self.resultNum.baozi = false;
        a = Math.floor(Math.random()*choice+lowValue);
        b = Math.floor(Math.random()*choice+lowValue);
        c = Math.floor(Math.random()*choice+lowValue);
        _self.resultNum.a = a;
        _self.resultNum.b = b;
        _self.resultNum.c = c;
        if((a+b+c) >10){
          _self.resultNum.count = '大';
          _self.resultNum.win = _self.gscallStatus == 'big' ? true: false;
          
        } else{
          _self.resultNum.count = '小';
          _self.resultNum.win = _self.gscallStatus == 'small' ? true: false;
           
        }
        if(a == b && b==c){
            _self.resultNum.count = '豹子';
            _self.resultNum.win = _self.gscallStatus == 'baozi' ? true: false;
        }
        setTimeout(function(){
          _self.sanziGroup.one = zimu[a - 1];
          _self.sanziGroup.two = zimu[b - 1];
          _self.sanziGroup.three = zimu[c - 1];
          // document.getElementById('diceSound').play();
       },300)
       
        _self.rock.flag = true;

            _self.rock.hideFn = function(){
            setTimeout(function () {
                _self.rock.flag = false;
                _self.gsResult = true;
               if(_self.resultNum.win){
                  _self.gsCombo +=1; // 记录连击
                  if(_self.gscallStatus =='baozi'){
                      
                      if(_self.gsCombo > 3 && _self.gsCombo < 7){   // 连击4-6 ，奖励积分X4
                        _self.totalScore += _self.gsRaiseNum*18;
                        _self.resultNum.prize = _self.gsRaiseNum*18;
                      } else if(_self.gsCombo > 6){                 // 连击7+ ，奖励积分X8
                        _self.totalScore += _self.gsRaiseNum*30;
                        _self.resultNum.prize = _self.gsRaiseNum*30;
                      } else{
                        _self.totalScore += _self.gsRaiseNum*9;  
                        _self.resultNum.prize = _self.gsRaiseNum*9;
                      }
                  }else{
                      
                      if(_self.gsCombo > 3 && _self.gsCombo < 7){   // 连击4-6 ，奖励积分X4
                        _self.totalScore += _self.gsRaiseNum*4;
                        _self.resultNum.prize = _self.gsRaiseNum*4;
                        // document.getElementById('duang').play();
                      } else if(_self.gsCombo > 6){                 // 连击7+ ，奖励积分X8
                         // document.getElementById('duang').play();
                        _self.totalScore += _self.gsRaiseNum*8;
                        _self.resultNum.prize = _self.gsRaiseNum*8;
                      } else{
                        _self.totalScore += _self.gsRaiseNum*2;
                        _self.resultNum.prize = _self.gsRaiseNum*2;
                      }
                  }
                  
                // document.getElementById('winSound').play();  
               }else{
                  _self.gsCombo = 0;
                  _self.totalScore -= _self.gsRaiseNum;
                 // document.getElementById('failSound').play()
               }
               localStorage.setItem("gsScore",_self.totalScore);
               _self.gscallStatus = '';
               console.log('连击+'+_self.gsCombo)
            }, 2200);
        };
        _self.rock.hideFn();
      },
      gsCall (option){
        var _self = this;
        if(_self.totalScore < 100){
          alert('没积分了');
          return false;
        }else if(_self.totalScore < _self.gsRaiseNum){
          alert('你没有足够的积分');
           return false;
        }else if(_self.totalScore == _self.gsRaiseNum){
          alert('生死有命，就看这一把了');
        }
        switch(option){
          case 'small':
          if(!_self.rock.flag){
            
             _self.gscallStatus = 'small';
             _self.selectfrom(1,6);
             
          }         
           break;


          case 'baozi':
          if(!_self.rock.flag){
            
             _self.gscallStatus = 'baozi';
             _self.selectfrom(1,6);
          }         
           break;


          default:
          if(!_self.rock.flag){
             _self.gscallStatus = 'big';
             _self.selectfrom(1,6);
          }         
          
        }
       
      }
  }
	})