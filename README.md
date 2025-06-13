# n8n-nodes-ip2location

This is an n8n community node. It lets you use ip2location.com in your n8n workflows.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

ip2locatopm has three actions:
	- ip2location, which returns information about a given IP address
	- ip2whoisDomain, which return information about a given domain
	- ip2whoisHostedDomain, which returns information about domains for a given IP address

## Credentials

Using this requires an active account with ip2location.com and an api key. 
You can sign up for the service on their [website](https://www.ip2location.io/sign-up).
7 days trial is [available](https://www.ip2location.io/sign-up?ref=5&trial=1) if you want to check out the service.
Familiarize yourself with service pricing [here](https://www.ip2location.io/pricing).

## Compatibility

Tested with following self-hosted docker installations:
- 1.95.3
- 1.97.1

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [ip2location website](http://ip2location.io/)

## Version history

- June 12, 2025: v0.1.0 - initial commit