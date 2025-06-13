import { INodeProperties } from "n8n-workflow";

export const parameters: INodeProperties[] = [
	{
		displayName: 'IP Address',
		name: 'ipAddress',
		type: 'string',
		displayOptions: {
			show: {
				resource: [
					'ip2location',
					'ip2whoisHostedDomain'
				],
			},
		},

		placeholder: '1.1.1.1',
		description: 'IP address to query for',
		default: ''
	},

	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ip2whoisDomain']
			},
		},

		placeholder: 'google.com',
		description: 'Domain to query',
		default: '',
	},

	{
		displayName: 'Page',
		name: 'page',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['ip2whoisHostedDomain']
			},
		},

		placeholder: '',
		description: 'Page number to query',
		default: "",
	},

	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		displayOptions: {
			show: {
				resource: ['ip2location', 'ip2whoisDomain', 'ip2whoisHostedDomain']
			},
		},
		options: [
			{
				name: 'JSON',
				value: 'json',
			},
			{
				name: 'XML',
				value: 'xml',
			},
		],
		default: 'json',
		noDataExpression: true,
		description: 'Response format',
	},
];
