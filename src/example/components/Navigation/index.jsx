import React from 'react';

import Store from '../../store';

import style from './style.scss';

export default class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: Store.getState().demoState,
    };

    this.hideSidebar = this.hideSidebar.bind(this);
    this.showSidebar = this.showSidebar.bind(this);
  }

  componentWillMount() {
    Store.subscribe(() => {
      this.setState({
        data: Store.getState().demoState,
      });
    });
  }

  componentDidMount() {
    console.dir(document);
    // console.log(window.screen.availWidth);
    // console.log(window.screen.availHeight);
    console.log(document.documentElement.clientWidth);
    console.log(document.documentElement.clientHeight);

    // this.shadow.style.setProperty('width', `${document.documentElement.clientWidth}px`);
    // this.shadow.style.setProperty('height', `${document.documentElement.clientHeight}px`);
  }

  componentDidUpdate() {
    console.log('组件 OtherDemo 已重新渲染');
  }

  hideSidebar() {
    this.shadow.style.setProperty('display', 'none');
    this.sidebar.style.setProperty('display', 'none');
  }

  showSidebar() {
    this.shadow.style.setProperty('display', 'block');
    this.sidebar.style.setProperty('display', 'block');
  }

  render() {
    return (
      <div>
        <div
          className={style.shadow}
          ref={(ref) => { this.shadow = ref; }} onClick={this.hideSidebar}
        />
        <div className={style.sidebar} ref={(ref) => { this.sidebar = ref; }}>
          <section>
            <div className="title">
              <h3>兰亭集序</h3>
            </div>
            <div className="content">
              <p>永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。群贤毕至，少长咸集。此地有崇山峻岭，茂林修竹；
                又有清流激湍，映带左右，引以为流觞曲水，列坐其次。虽无丝竹管弦之盛，一觞一咏，亦足以畅叙幽情。是日也，天朗气清，
                惠风和畅，仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也。</p>
              <p>夫人之相与，俯仰一世，或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。虽趣舍万殊，静躁不同，当其欣于所遇，
                暂得于己，快然自足，不知老之将至。及其所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之兴怀。
                况修短随化，终期于尽。古人云：“死生亦大矣。”岂不痛哉！</p>
              <p>每览昔人兴感之由，若合一契，未尝不临文嗟悼，不能喻之于怀。固知一死生为虚诞，齐彭殇为妄作。后之视今，亦犹今之视昔。
                悲夫！故列叙时人，录其所述，虽世殊事异，所以兴怀，其致一也。后之览者，亦将有感于斯文。</p>
            </div>
          </section>
        </div>
        <div className={style.container} onClick={this.showSidebar} >
          123
        </div>
      </div>
    );
  }
}
