import { Component, ComponentInterface, h, Prop, Event, EventEmitter } from "@stencil/core";
import {SCntFlexyViewIslamPromoFooter} from "./interface/common.interface";

@Component({
  tag: "cnt-flexy-view-islam-promo-footer",
  styleUrl: "cnt-flexy-view-islam-promo-footer.css",
  shadow: false,
  scoped: true,
})
export class CntFlexyViewIslamPromoFooter implements ComponentInterface {
  @Prop() payload: any;

  /**
   * Приём данных из массива для вывода
   */
    @Prop() intro: SCntFlexyViewIslamPromoFooter[] = []

   /**
    * Клик по Contact
    */
     @Event() clickFooterContact: EventEmitter;


   /**
    * Клик по PhoneIcon
    */
     @Event() clickFooterPhoneIcon: EventEmitter;


   /**
    * Клик по Phone
    */
     @Event() clickFooterPhone: EventEmitter;


   /**
    * Клик по LetterIcon
    */
     @Event() clickFooterLetterIcon: EventEmitter;


   /**
    * Клик по Letter
    */
     @Event() clickFooterLetter: EventEmitter;


   /**
    * Клик по MapMarker
    */
     @Event() clickFooterMapMarker: EventEmitter;


   /**
    * Клик по Location
    */
     @Event() clickFooterLocation: EventEmitter;


   /**
    * Клик по Link
    */
     @Event() clickFooterLink: EventEmitter;


   /**
    * Клик по MyLink
    */
     @Event() clickFooterMyLink: EventEmitter;


   /**
    * Клик по Button
    */
     @Event() clickFooterButton: EventEmitter;


   /**
    * Клик по VkIcon
    */
     @Event() clickFooterVkIcon: EventEmitter;


   /**
    * Клик по InstagramIcon
    */
     @Event() clickFooterInstagramIcon: EventEmitter;


   /**
    * Клик по TwitterIcon
    */
     @Event() clickFooterTwitterIcon: EventEmitter;


   /**
    * Клик по FacebookIcon
    */
     @Event() clickFooterFacebookIcon: EventEmitter;


   /**
    * Клик по YoutubeIcon
    */
     @Event() clickFooterYoutubeIcon: EventEmitter;



  render() {
    return (
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div class="contact" onClick={() => this.clickFooterContact.emit('FooterContact')}>{this.payload[0].contact}</div>
              <div class="phoneIcon"onClick={() => this.clickFooterPhoneIcon.emit('FooterPhoneIcon')}>
                <i class={this.payload[0].phoneIcon} />
                <span class="phone"onClick={() => this.clickFooterPhone.emit('FooterPhone')}>{this.payload[0].phone}</span>
              </div>
              <div class="letterIcon" onClick={() => this.clickFooterLetterIcon.emit('FooterLetterIcon')}>
                <i class={this.payload[0].letterIcon} />
                <span class="letter" onClick={() => this.clickFooterLetter.emit('FooterLetter')}>{this.payload[0].letter}</span>
              </div>
              <div class="mapMarkerIcon" onClick={() => this.clickFooterMapMarker.emit('FooterMapMarker')}>
                <i class={this.payload[0].mapMarker} />
                <span class="location">{this.payload[0].location}</span>
              </div>
            </div>
            <div class="col-3">
              <div class="link" onClick={() => this.clickFooterLink.emit('FooterLink')}>{this.payload[0].link}</div>
              <div class="my-link" onClick={() => this.clickFooterMyLink.emit('FooterMyLink')}>{this.payload[0].homeNav}</div>
              <div class="my-link" onClick={() => this.clickFooterMyLink.emit('FooterMyLink')}>{this.payload[0].aboutUsNav}</div>
              <div class="my-link" onClick={() => this.clickFooterMyLink.emit('FooterMyLink')}>{this.payload[0].ourTeamNav}</div>
              <div class="my-link" onClick={() => this.clickFooterMyLink.emit('FooterMyLink')}>{this.payload[0].contactsNav}</div>
            </div>
            <div class="col-4">
              <input class="input" placeholder={this.payload[0].email} />
              <div class="button" onClick={() => this.clickFooterButton.emit('FooterButton')}>
                <button class="btn">{this.payload[0].button}</button>
              </div>
              <div class="icons">
                <div class="vk" onClick={() => this.clickFooterVkIcon.emit('FooterVkIcon')}>
                  <i class={this.payload[0].vkIcon} />
                </div>
                <div class="instagram" onClick={() => this.clickFooterInstagramIcon.emit('FooterInstagramIcon')}>
                  <i class={this.payload[0].instagramIcon} />
                </div>
                <div class="twitter" onClick={() => this.clickFooterTwitterIcon.emit('FooterTwitterIcon')}>
                  <i class={this.payload[0].twitterIcon} />
                </div>
                <div class="facebook" onClick={() => this.clickFooterFacebookIcon.emit('FooterFacebookIcon')}>
                  <i class={this.payload[0].facebookIcon} />
                </div>
                <div class="youtube" onClick={() => this.clickFooterYoutubeIcon.emit('FooterYoutubeIcon')}>
                  <i class={this.payload[0].youtubeIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
