import {Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'cnt-flexy-view-islam-promo-footer-1_01',
  styleUrl: 'cnt-flexy-view-islam-promo-footer.css',
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoFooter implements ComponentInterface {
  @Prop() payload: any;

  render() {
  const clicker = item => {
            console.log(item);
          }
    return (
      <div>
        <cnt-flexy-view-islam-promo-footer payload={this.payload}
                                            onClickFooterContact={(item) => clicker(item)}
                                            onClickFooterPhoneIcon={(item) => clicker(item)}
                                            onClickFooterPhone={(item) => clicker(item)}
                                            onClickFooterLetterIcon={(item) => clicker(item)}
                                            onClickFooterLetter={(item) => clicker(item)}
                                            onClickFooterMapMarker={(item) => clicker(item)}
                                            onClickFooterLocation={(item) => clicker(item)}
                                            onClickFooterLink={(item) => clicker(item)}
                                            onClickFooterMyLink={(item) => clicker(item)}
                                            onClickFooterButton={(item) => clicker(item)}
                                            onClickFooterVkIcon={(item) => clicker(item)}
                                            onClickFooterInstagramIcon={(item) => clicker(item)}
                                            onClickFooterTwitterIcon={(item) => clicker(item)}
                                            onClickFooterFacebookIcon={(item) => clicker(item)}
                                            onClickFooterYoutubeIcon={(item) => clicker(item)}/>
      </div>
    );
  }

}
