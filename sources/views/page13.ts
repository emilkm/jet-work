import {JetView} from "webix-jet";

export default class page13 extends JetView {

	private dataset: webix.DataCollection;

	config() {
		return { view: 'form', localId: 'frm', elementsConfig: { labelWidth: 90 },
			rows: [
				{ view: 'toolbar', localId: 'tbr',
					cols: [
						{ view: 'label', template: ' ' },
						{ view: 'button', label: 'add', click: () => this.add() }
					]
				},
				{ view: 'datatable', localId: 'tbl', select: 'row', gravity: 3, editable: true, width: 600,
					columns: [
						{ id: 'id', header: 'Id', width: 100, editor: 'text' },
						{ id: 'value', header: 'Value', fillspace: true, editor: 'popup' },
						{ id: '_',  header: '', fillspace: true }
					]
				},
			]
		};
	}

	init(view, url) {
		this.dataset = new webix.DataCollection();
	}

	ready(view, url) {
		(this.$$('tbl') as any).sync(this.dataset, null, true);
	}

	destroy() {
		this.dataset = null;
	}

	add() {
		this.dataset.add({id: 1, value: 'blah'});
	}

}