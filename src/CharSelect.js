
import React, { useEffect, useState } from 'react';

const characters = [
    {
        tachie:"ayano.png",
        pixel:"ayano_pixel.png",
        name:"アリア・ミーデアス  (風宮 亜夜乃)",
        subtitle:"迷子の異世界人",
        desc:"意志の強さと妹への深い愛情を持つ決断力のある異界の少女。妹を取り戻すため、謎の「？？？」スキルを解明し、女神ソレンを倒すのが目的。",
    },
    {
        tachie:"rosalia.png",
        pixel:"rosalia_pixel.png",
        name:"ロザリア・ヴァン・クーリア",
        subtitle:"献身的なシスター",
        desc:"クーリア家の長女であり、クーリア教会のトップ。口数少なく、物静かな性格。喋る時はクールで毒舌。女神グローリアへの信仰心は誰よりも強い。",
    },
    
    {
        tachie:"diana.png",
        pixel:"diana_pixel.png",
        name:"ダイアナ・アーバス",
        subtitle:"無邪気なシスター",
        desc:"信念に強く、ポンコツで天真爛漫な少女。ローレンスの唯一の家族。幼い頃ローレンスに守られたことから、役に立つように頑張っているが、普段は天然ボケ。",
    },
    {
        tachie:"lawrence.png",
        pixel:"lawrence_pixel.png",
        name:"ローレンス・アーバス",
        subtitle:"不幸な神父",
        desc:"勇敢で情熱的な冒険者でありながら、家族愛に溢れる思慮深いプリースト。ダイアナを守るためにモンスターとの戦いで重傷を負い、左目に酷い怪我を負ってしまった。その怪我が冒険者としての旅路を開始するきっかけとなった。",
    },
    {
      tachie:"millie.png",
      pixel:"millie_pixel.png",
      name:"ミリー・フリューゲル",
      subtitle:"冒険したい受付嬢",
      desc:"元気で溢れる不器用なギルドの受付嬢。子供の頃から冒険者を憧れて、受付の仕事をしながら駆け出しの冒険者を目指さす！失敗するばかりですけどね、最近！",
  },
  {
    tachie:"soren.png",
    pixel:"soren_pixel.png",
    name:"女神ソレン",
    subtitle:"滅びをもたらすもの",
    desc:"輪廻を司る破壊神。",
},
];

export default function CharSelect(props) {
    const [currentImage, setImage] = useState(0);
    const [currentOpacity, setOpacity] = useState(false);

    function changeCharacter(index) {
      setImage(index);
      setOpacity(true);
      setTimeout(() => {
        setOpacity(false);
      }, 100);
    }

    const invisibleStyle = {
      opacity: '0',
      display: 'block',
      marginLeft:'auto',
      marginRight:'auto',
    };
    const visibleStyle = {
      opacity: '1',
      transition: '1.2s ease',
      marginLeft:'-50px',
      paddingRight:'50px',
      display: 'block',
      marginLeft:'auto',
      marginRight:'auto'
    };

    return (
        <>
      {/*<div style={{padding:'50px', border:'2px solid rgba(0,0,0,0)', backgroundImage:'url("guild_bg.png")', backgroundRepeat:'no-repeat', backgroundPosition:'right top', backgroundAttachment:'relative', backgroundSize:'100% 100%'}}>*/}
      <h1 style={{textAlign: 'center', color:'rgb(50, 25, 14)', marginTop:'50px', marginBottom: '100px', fontSize:'8vw',}}>CHARACTER</h1>
      <p style={{textAlign: 'center', color:'rgb(50, 25, 14)', marginTop:'-100px', marginBottom: '0px', fontSize:'5vw',}}>キャラクター</p>
      <div style={{margin:'auto',width:'80%',padding:'10px'}}>
      <div class="imageRow">
        <a id="charSelectButton" onClick={() => changeCharacter(0)} href="#ayano"><img src="ayano_portrait.png"></img></a>
        </div><div class="imageRow">
        <a id="charSelectButton" onClick={() => changeCharacter(1)} href="#rosalia"><img src="rosalia_portrait.png"></img></a>
        </div><div class="imageRow">
        <a id="charSelectButton" onClick={() => changeCharacter(2)} href="#diana"><img src="diana_portrait.png"></img></a>
        </div><div class="imageRow">
        <a id="charSelectButton" onClick={() => changeCharacter(3)} href="#lawrence"><img src="lawrence_portrait.png"></img></a>
        </div><div class="imageRow">
        <a id="charSelectButton" onClick={() => changeCharacter(4)} href="#millie"><img src="millie_portrait.png"></img></a>
        </div><div class="imageRow">
        <a id="charSelectButton" onClick={() => changeCharacter(5)} href="#soren"><img src="soren_portrait.png"></img></a>
        
      </div></div>
      <div class="">
        <div class="character-select">
        <div class="section2">
            <img style={currentOpacity ? invisibleStyle : visibleStyle} src={characters[currentImage].tachie}></img>
          </div>
          <p  style={currentOpacity ? invisibleStyle : visibleStyle} >
            <span style={{color:'rgb(171, 142, 111)', fontSize:'25px', paddingRight:'15px', marginTop:'5px'}}>名前   </span>
            {characters[currentImage].name}
          </p>
          <div style={currentOpacity ? invisibleStyle : visibleStyle} >
          <p style={{color:'rgba(171, 142, 111,0.6)', fontSize:'23px',marginTop:'-30px'}}>{characters[currentImage].subtitle}</p>
          <hr style={{border:'1px solid rgba(111, 82, 51, 0.9)'}}></hr>
          <p style={{fontSize:'24px'}}>
            {characters[currentImage].desc}
          </p>
          <div class="section2">
            <img style={{maxWidth:"100%", width:"50%", imageRendering:"pixelated", margin:'auto', marginTop:'20px'}} src={characters[currentImage].pixel}></img>
          </div>
          </div>
          {currentOpacity}
          <br></br><br></br><br></br>
        </div>
      </div>
        </>
    );
}

CharSelect.defaultProps = {
    
}