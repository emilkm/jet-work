import {JetView} from "webix-jet";

export default class page11 extends JetView {
	config() {
		return { view: 'form', localId: 'frm', elementsConfig: { labelWidth: 90 },
			rows: [
				{ view: 'toolbar', localId: 'tbr',
					cols: [
						{ view: 'label', template: ' ' },
						{ view: 'menu', localId: 'mnu', subMenuPos: 'bottom', layout: 'y', width: 80,
							data: [
								{ id: 'sub', value: 'menu',
									config: { width: 240,
										on: {
											onItemClick: (id) => this.runAction(id)
										}
									},
									submenu: []
								}
							]
						},
						{}
					]
				},
				{}
			]
		};
	}

	ready() {
		const mnu: any = this.$$('mnu');
		const sub: any = mnu.getSubMenu('sub');
		sub.clearAll();
		sub.parse([
			{ id: 1, value: 'aaa' },
			{ id: 2, value: 'bbb' },
		]);
	}

	runAction(id) {
		const x = 0;
	}
}