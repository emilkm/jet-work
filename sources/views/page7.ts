import {JetView} from "webix-jet";

export default class page7 extends JetView {
	config() {
		return { view: 'form', localId: 'frm', elementsConfig: { labelWidth: 90 },
			rows: [
				{ view: 'toolbar', localId: 'tbr',
					cols: [
						{ view: 'label', template: ' ' },
					]
				},
				{ view: 'list', localId: 'lst', select: 'row',
					type: {
						height: 'auto',
						template: function (item) {
							let html = '<div class="item"><div class="title">' + (item.value||'') + '</div>';
							html += '<span class="app_property_name">id: </span> ' + (item.id||'');
							html += '<span class="right"><span class="app_property_name">data: </span> ' + (item.data||'') + '</span>';
							html += '</div>';
							return html;
						}
					}
				}
			]
		};
	}
}