import {react_data} from 'assets/data/framework/react_data.js'
import {vue_data} from 'assets/data/framework/vue_data.js'
import {chenxi_data} from 'assets/data/framework/chenxi_data.js'
import {bootstrap_data} from 'assets/data/framework/bootstrap_data.js'

export const chose_data = function  (path){
	var data=react_data;
	switch(path){
		case 'react':
		data=react_data;
		break;
		case 'vue':
		data=vue_data;
		break ;
	}
	return data;
}