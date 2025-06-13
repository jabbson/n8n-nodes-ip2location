import type {
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	NodeConnectionType,
} from 'n8n-workflow';

import { resources } from './resources';
import { parameters } from './parameters';
import { operations } from './operations';

export class Ip2Location implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'IP2Location',
		name: 'ip2Location',
		icon: 'fa:globe',
		group: [],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description: 'IP2Location',
		defaults: {
			name: 'IP2Location',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,

		credentials: [
			{
				name: 'ip2LocationApi',
				required: true
			},
		],

		properties: [
			...resources,
			...parameters,
			...operations
		],
	};
}

