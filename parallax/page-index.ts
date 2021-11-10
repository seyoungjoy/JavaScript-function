import {Page} from "../common/page";
import {EventHandler} from "../frame/eventHandler";
import {DFUtils} from "../util/DFUtils";
import {Parallax} from "../lib/parallax";
import Pagination from "../lib/Pagination";

//@ts-ignore
import * as ejsPrList from '/src/comp/index/comp-index-news-list-item.ejs';

class PageIndex extends Page{
	private sec2El:HTMLElement;

	private prListTag:string;
	private paginationTag :string;
	private paginationTagMobile :string;


	public setPage() {
		this.sec2El = this.el.querySelector('.sec-2');
        
		this.onResizeHandler();
		EventHandler.getInstance().addHandler(window,'resize',()=>this.onResizeHandler());

		new Parallax(this.el.querySelector('.sec-3 .col-img-right'),0, -0.1,false);
		new Parallax(this.el.querySelector('.sec-3 .col-img-left'),0, 0.2,false);

		new Parallax(this.el.querySelector('.sec-1 .img-1'),0, -0.1,false);

		new Parallax(this.el.querySelector('.sec-1 .img-holder .s1'), 0.8,0,true);
		new Parallax(this.el.querySelector('.sec-1 .img-holder .s2'), -0.5,0,true);


		if (this.el.querySelector('.col-ul-list')) {
			this.getData();
		}

	}

	public setShow() {
		super.setShow();
	}

	private getData():void{
		const {prList} = this.data;
		this.prListTag = DFUtils.getEjsStrElement(ejsPrList(),{prList});
		this.insertData();
	}

	private insertData():void{
		this.el.querySelector('.col-ul-list').insertAdjacentHTML('beforeend',this.prListTag);

		this.modifyLink();
	}

	private modifyLink():void{
		const lists :any= this.el.querySelectorAll('.comp-index-news-list-item a');
		lists.forEach(el=>{
			let href = el.href;
			href = href.split('?')[1];
			href = `/pr/press-release/view/?${href}`
			el.href = href;
		})
	}

	private onResizeHandler() {
		if (DFUtils.getIsMobileSize()) {
			this.sec2El.style.height = `${this.sec2El.offsetWidth *  (666/375)}px`;
		} else {
			this.sec2El.style.height = `${this.sec2El.offsetWidth *  (3164/3840)}px`;
		}
	}
}

export {PageIndex }