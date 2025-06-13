import { INodeProperties } from "n8n-workflow";

export const resources: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		options: [
			{
				name: 'IP2Location',
				value: 'ip2location',
			},
			{
				name: 'IP2Whois Domain',
				value: 'ip2whoisDomain',
			},
			{
				name: 'IP2Whois Hosted Domain',
				value: 'ip2whoisHostedDomain',
			},
		],
		default: 'ip2location',
		noDataExpression: true,
		required: true,
		description: 'Resource to query',
	},
];
