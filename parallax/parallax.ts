import {EventHandler} from "../frame/eventHandler";
import {ScrollControl} from "../common/scrollControl";
import {DFUtils} from "../util/DFUtils";

class Parallax {
	private distanceY: number;
	private distanceX : number;
	private rotate:number = 0;
	private y: number;
	private x: number;

	constructor(
			private el: HTMLElement,
			private offsetX: number,
			private offsetY: number,
			private isRotateOnMobile:boolean
            )
	{
		this.onResizeHandler();
		EventHandler.getInstance().addHandler(window, 'resize', () => this.onResizeHandler());

		this.onScrollHandler({detail: 0});
		EventHandler.getInstance().addHandler(window, ScrollControl.EVENT_CUSTOM_SCROLL, (e) => this.onScrollHandler(e));
	}

	private onResizeHandler() {
		this.distanceY = this.el.offsetHeight * this.offsetY;
		this.distanceX = this.el.offsetHeight * this.offsetX;
		this.y = DFUtils.getPos(this.el).y;
		this.x = DFUtils.getPos(this.el).x;

		if (DFUtils.getIsMobileSize()) {
			if (this.isRotateOnMobile) {
				this.rotate = 90;
			}
		} else {
			this.rotate = 0;
		}
	}

	private onScrollHandler(e) {
		let viewY = (e.detail - this.y + window.innerHeight);
		let viewX = (e.detail - this.x + window.innerHeight);

		if (viewY > 0) {
			let valueY = (viewY * this.distanceY) / window.innerHeight;
			let valueX = (viewX * this.distanceX) / window.innerHeight;


			// index sec-2 에서 글자가 새로일 경우 x,y 축을 반대로 움직이는 부분에 대한 처리 추가
			if (this.rotate > 0) {
				this.el.style.transform = `translate3d(${valueY}px,${valueX}px, 0) rotate(${this.rotate}deg)`;
			} else {
				this.el.style.transform = `translate3d(${valueX}px,${valueY}px, 0) rotate(${this.rotate}deg)`;
			}
		}
	}
}


export {Parallax};