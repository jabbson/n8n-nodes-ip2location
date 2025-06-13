import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class Ip2LocationApi implements ICredentialType {
	name = 'ip2LocationApi';
	displayName = 'IP2Location API';
	documentationUrl = 'https://www.ip2location.io/documentation';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			typeOptions: {
				password: true,
			},
			type: 'string',
			placeholder: '1234567890ABCDEF1234567890ABCDEF',
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				key: '={{ $credentials.apiKey }}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.ip2location.io',
			url: '/',
			qs: {
				ip: '8.8.8.8',
				format: 'json',
			},
		},
	};
}
