import { INodeProperties } from 'n8n-workflow';

export const operations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'get',

		displayOptions: {
			show: {
				resource: [
					'ip2location',
				],
			},
		},

		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get the location of an IP address',
				description: 'Get the location of an IP address',
				routing: {
					request: {
						method: 'GET',
						baseURL: 'https://api.ip2location.io',
						url: '/',
						qs: {
							ip: '={{ $parameter.ipAddress }}',
							format: '={{ $parameter.format }}',
						}
					},
				},
			},
		],
	},

	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'ip2whoisDomain',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get domain information',
				description: 'Get information about a domain',
				routing: {
					request: {
						method: 'GET',
						baseURL: 'https://api.ip2whois.com',
						url: '/v2',
						qs: {
							domain: '={{ $parameter.domain }}',
							format: '={{ $parameter.format }}',
						}
					},
				},
			},
		],
		default: 'get',
	},

	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'ip2whoisHostedDomain',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get domains for a given IP address',
				description: 'Get information about domain hosted on an IP address',
				routing: {
					request: {
						method: 'GET',
						baseURL: 'https://domains.ip2whois.com',
						url: '/domains',
						qs: {
							ip: '={{ $parameter.ipAddress }}',
							page: '={{ $parameter.page }}',
							format: '={{ $parameter.format }}',
						}
					},
				},
			},
		],
		default: 'get',
	}
];