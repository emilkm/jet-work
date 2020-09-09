import {JetView} from "webix-jet";

export default class pop extends JetView {

	config() {
		return {
			view: 'window', position: 'center', modal: true, close: true, move: true, resize: true, width: 520, height: 340,
			head: 'Note Editor',
			body: {
				view: 'form', localId: 'frm',
				rows: [
					{ view: 'textarea', localId: 'note', name: 'note', labelPosition: 'top', gravity: 3 },
				]
			}
		};
	}

	showPopup(node = null, ...args) {
		const root: any = this.getRoot();
		if (node) {
			root.show(node);
		} else {
			root.show();
		}
	}

}