import {JetView} from "webix-jet";

export default class page5 extends JetView {

	config() {
		return { view: 'form', localId: 'frm', elementsConfig: { labelWidth: 90 },
			rows: [
				{ view: 'toolbar', localId: 'tbr',
					cols: [
						{ view: 'label', template: 'CLEAN: ui.datable column template & tooltip =>' },
					]
				},
				{
					cols: [
						{
							rows: [
								{ view: 'combo', localId: 't1', name: 'type', label: 'Search Type', value: 1, width: 250,
									options: [
										{ id: 1, value: 'A' },
										{ id: 2, value: 'B' },
									]
								},
							]
						},
						{
							rows: [
								{ view: 'text', localId: 'f1', name: 'f2', label: 'F1' },
								{ view: 'text', localId: 'f2', name: 'f2', label: 'F2' }
							]
						}
					]
				},
				{ view: 'datatable', localId: 'tbl', select: 'row', gravity: 3,
					columns: [
						{ id: 'id', header: 'Id', width: 100 },
						{ id: 'value', header: 'Value', fillspace: true },
						{ id: 'status', header: 'Status', width: 40, template: (item) => this.statusTemplate(item) },
						{ id: '_',  header: '', fillspace: true }
					],
					tooltip: (item, config) => {
						if (',status,'.indexOf(`,${config.column.id},`) >= 0) {
							return this.statusTooltip(item, config.column.id);
						} else {
							return '';
						}
					}
				},
			]
		};
	}

	statusTemplate(item) {
		return 'S';
	}

	statusTooltip(item, column) {
		return 'T';
	}
}