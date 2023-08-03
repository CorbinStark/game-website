import React from 'react'
import PrimaryHeader from './PrimaryHeader';
import SecondaryHeader from './SecondaryHeader';
import Carousel from './Carousel';
import CharSelect from './CharSelect';

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
      >
        {props.children}
      </div>
  )
}

function BigRedText(props) {
  return <span style={{padding:'10px', color:'rgb(190, 70, 70)', fontSize:'20px',transform:'rotate(-90deg)'}}>{props.children}</span>
}

export default class App extends React.Component {
    state = {
      loading: true,
      showModal:false
    };
  
    componentDidMount() {
      // this simulates an async action, after which the component will render the content
      demoAsyncCall().then(() => this.setState({ loading: false }));
    }
    
    render() {
      const { loading } = this.state;
      
      if(loading) { // if your component doesn't have to wait for an async action, remove this block 
        return null; // render null when app is not ready
      }
      
      if(this.state.showModal) {

      } else {
        return (
          <div class="everything">
          {/*<PrimaryHeader />*/}
          {/*<body style="margin-left:8.3vw;">*/}
          <body>
          <SecondaryHeader />

          <h1 class="text-gradient">8.29.2023</h1>
          <div style={{margin:'auto',padding:'20px'}} class="section">
            <a href="https://store.steampowered.com/" style={{fontFamily:'NotoSansJP'}}>Wishlish on Steam today!</a>
          </div>

            <FadeInSection>
              <h1 style={{textAlign: 'center', color:'rgb(50, 25, 14)', marginTop:'200px', marginBottom: '100px', fontSize:'8vw',}}>INTRODUCTION</h1>
              <p style={{textAlign: 'center', color:'rgb(50, 25, 14)', marginTop:'-100px', marginBottom: '0px', fontSize:'5vw',}}>イントロダクション</p>
            
            <div class="introduction">
              <div class="introduction-smaller-border">
              <h2>「ーー今度こそ、妹を死なさない！」</h2>
              <h3>
              <BigRedText>妹</BigRedText>
              の死を悼み悲しむ
              <BigRedText><ruby>風宮<rt>かぜみや</rt></ruby> <ruby>亜夜乃<rt>あやの</rt></ruby></BigRedText>
              は目を覚ますと、辺境伯であるカシアン・ミーデアスの娘、アリア・ミーデアスとして
              <BigRedText>転生</BigRedText>していた。
              </h3>

              <p>
              見知らぬ世界で生まれた<ruby>亜夜乃<rt>アリア</rt></ruby>の<BigRedText>固有スキル</BigRedText>は<BigRedText>「???」</BigRedText>という謎の多すぎるものだった・・・。
              </p>
              <p>
              アリアの<BigRedText>旅</BigRedText>は困難なものとなるだろう。未知の世界で新たな<BigRedText>困難</BigRedText>や<BigRedText>試練</BigRedText>が待ち受けているかもしれないし、固有スキルが役立つのかは不明。しかし、妹との<BigRedText>再会</BigRedText>を願って、アリアは毅然と前に進む。
              </p>
              </div>
            </div>
            </FadeInSection>

            <div class="section">
            <div class="section2">
            <div class="section3">
              <FadeInSection>
              <br></br>
              <h1 style={{textAlign: 'center', marginTop:'0px', marginBottom: '100px', fontSize:'10vw',}}>GAME SYSTEM</h1>
              <p style={{textAlign: 'center', marginTop:'-100px', marginBottom: '0px', fontSize:'6vw',}}>ゲームシステム</p>
              <br></br>
              <div class="grid-container">
                <div class="grid-item">
                <Carousel images={["combat.png", "itemShop.png"]} />
                  {/*<h3>Engaging Turn-Based Combat</h3>*/}
                  <h3>バトル</h3>
                  <p style={{marginTop:'-25px', fontSize:'16px'}}>
                    4タイプの属性攻撃が存在する。敵によって弱点が異なるので、敵にあわせて効果的な攻撃を選べる。クラスによって、特別なスキルを習得できるし、レベルアップするとスキルポイントと引き換えに鑑定、加護、ステータスアップなど様々なスキルをGET!
                  </p>
                </div>
                <div class="grid-item">
                  <Carousel images={["cutscene.png", "cutscene2.png", "cutscene3.png"]} />
                  <h3>ストーリー</h3>
                  <p style={{marginTop:'-25px', fontSize:'16px'}}>
                    膨大なシナリオ、アニメーション付きの立ち絵。定期的にスチルやイベントCGなどが登場する!
                  </p>
                </div>
                <div class="grid-item">
                  <Carousel images={["manor1.png", "manor2.png", "boukensha_guild.png", "machi.png", "oshiro.png"]} />
                  <h3>世界観</h3>
                  <p style={{marginTop:'-25px', fontSize:'16px'}}>
                    舞台は剣と魔法の世界、エヴァリオ。ここでは仲間と会ったり、クエストを受けたり、冒険したりすることができる。表には平和な世界に見えるが、水面下には影に覆うものは密かに這い寄る。
                  </p>
                </div>
                <div class="grid-item">
                  4
                </div>
                <br></br><br></br><br></br>
              </div>

              </FadeInSection>
            </div>
            </div>
            </div>

            <CharSelect />

            <div class="section">
              <div style={{zIndex:'100', textAlign:'left', marginLeft:'5%'}}>
                  <h1 style={{textAlign: 'left', color:'white', marginTop:'20px', marginBottom: '100px', fontSize:'66px',}}>FAQ</h1>
                  <p style={{textAlign: 'left', color:'white', marginTop:'-100px', marginBottom: '0px', fontSize:'18px',}}>よくある質問</p>

                  <div style={{display: 'block',marginLeft:'auto',marginRight:'auto',width:'100%'}}>
                    <img src="ayano_chibi.png"></img>
                  </div>

                  {/*<h3 style={{fontSize:'36px'}}>When will <i>Isekai Onee-san</i> officially launch?</h3>
                  <p style={{fontSize:'24px', paddingRight:'50px'}}>We’re focused on making a great game first and will wait until we are further into development to share a release date. Closed testing for Stormgate will begin in July 2023.</p>
                  <h3 style={{fontSize:'36px'}}>What will happen during closed testing?</h3>
                  <p style={{fontSize:'24px', paddingRight:'50px'}}>We’re focused on making a great game first and will wait until we are further into development to share a release date. Closed testing for Stormgate will begin in July 2023.</p>
                  */}

                  <h3 style={{fontSize:'36px'}}>発売日はいつですか？</h3>
                  <p style={{fontSize:'24px', paddingRight:'50px'}}>夏コミケ2024にて発売開始</p>
                  
                  <h3 style={{fontSize:'36px'}}>なんで男キャラが少ないですか？</h3>
                  <p style={{fontSize:'24px', paddingRight:'50px'}}>男を描きたくない。以上。</p>
              </div>
            </div>
            <div style={{display:'absolute', width:'100%',  height:'1080px'}}>
              <img src="title.png" style={{position:'relative', marginLeft:'auto',marginRight:'auto',width:'44%',top:'70%'}}></img>
              <p style={{position:'relative', fontSize:'24px',color:'white',textAlign:'center',top:'70%'}}>@2023 Corbin Stark</p>
              <p style={{position:'relative', fontSize:'20px',color:'white',textAlign:'center',top:'68%'}}>All Rights Reserved</p>
              <video loop autoPlay muted nocontrols width="100%" height="100%" style={{objectFit:'cover'}}>
                <source src="city.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
            </div>
          </body>
          
          </div>
        ); 
      }
  }
  }

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2000));
  }