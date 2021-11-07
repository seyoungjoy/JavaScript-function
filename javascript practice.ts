import {GlobalVars} from "../globalVars";
import {EventHandler} from "../frame/eventHandler";
import {ScrollControl} from "../common/scrollControl";
import {DFUtils} from "../util/DFUtils";
import {Router} from "../common/router";

class ProductNav {
	private readonly isSticky:boolean;
	private height:number;
	private headerHeight:number;
	private prevScroll:number;

	constructor(private navEl:HTMLElement, private kvEl:HTMLElement) {
		if (GlobalVars.getInstance().isSmoothScroll) {
			this.isSticky = true;
			this.navEl.style.position = 'absolute';
		}

		this.prevScroll = 0;
		this.setFocus();

		this.onResizeHandler();
		EventHandler.getInstance().addHandler(window, 'resize', ()=>this.onResizeHandler());
		EventHandler.getInstance().addHandler(window, ScrollControl.EVENT_CUSTOM_SCROLL, (e: { detail:number })=>this.onScrollHandler(e));
	}

	private onResizeHandler():void {
		this.headerHeight = document.querySelector('header .sec-menu content').getBoundingClientRect().height;
		this.height = this.navEl.getBoundingClientRect().height;

		if (this.kvEl) {
			if (DFUtils.getIsMobileSize()) {
				// if (this.kvEl.classList.contains('comp-product-detail-keyvisual')) {
				// 	this.kvEl.style.height = `${window.innerHeight}px`;
				// } else {
					this.kvEl.style.height = `auto`;
				// }
			} else {
				this.kvEl.style.height = `${window.innerHeight - this.height}px`;
			}
		}
		this.setTop();
	}

	private onScrollHandler(e:{detail:number}):void {
		this.setTop();
		if (this.isSticky) {
			this.forceSticky(e.detail);
		}

		//모바일 사이즈 일경우 스크롤 값이 0 이 아닐경우 on-top 을 붙임
		if (DFUtils.getIsMobileSize() || !this.kvEl) {
			if (e.detail <= 1 ) {
				this.navEl.classList.remove('on-top');
			} else {
				if (this.prevScroll > e.detail) {
					this.navEl.classList.remove('on-top');
				} else {
					this.navEl.classList.add('on-top');
				}
			}
		} else {
			if (e.detail > window.innerHeight - this.height) {
				if (this.prevScroll > e.detail) {
					this.navEl.classList.remove('on-top');
				} else {
					this.navEl.classList.add('on-top');
				}
			} else {
				this.navEl.classList.remove('on-top');
			}
		}
		this.prevScroll = e.detail;
	}

	private setTop():void {
		if (this.navEl.getBoundingClientRect().top > window.innerHeight/2) {
			this.navEl.classList.add('top');
		} else {
			this.navEl.classList.remove('top');
		}

		if (this.kvEl) {
			if (this.isSticky) {
				if (DFUtils.getIsMobileSize()) {
					this.navEl.style.top = `${this.headerHeight}px`
				} else {
					this.navEl.style.top = `${window.innerHeight - this.height}px`
				}
			}
		}
	}

	private forceSticky(detail: number) {
		let top = this.height + this.headerHeight;

		let velocity:number = 0;

		if (this.kvEl) {
			velocity = detail - window.innerHeight;
		} else {
			velocity = detail - top;
		}

		// 키비쥬얼이 있어도 모바일 환경에서는 최 상단에 제품 네비게이션이 있으므로
		if (DFUtils.getIsMobileSize()) {
			velocity = detail - top;
		}


		if (velocity > top*-1 ) {
			this.navEl.style.transform = `translate3d(0, ${velocity + top}px, 0)`;
		} else {
			this.navEl.style.transform = `translate3d(0, 0, 0)`;
		}
	}

	private setFocus() {
		// console.log(window.location);
		Router.getPageLocationClassArray().forEach((location) => {

			let tmpEls: NodeListOf<Element> = this.navEl.querySelectorAll(location)
			tmpEls.forEach((el:HTMLElement) => {

				if (el.tagName === 'LI') {
					let titleEl: HTMLElement = el.parentNode.parentNode.parentNode.querySelector('span');
					if (titleEl) {
						titleEl.insertAdjacentHTML('afterbegin', el.querySelector('a').text);
					}
				}
				// el.style.display = 'none';
			})
		})
	}
}

export {ProductNav};