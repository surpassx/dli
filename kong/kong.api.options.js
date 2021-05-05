const KongOption = {
    KongHOST: 'http://59.110.124.65:8001',
    service: {
        name: 'test-http',
        protocol: 'http',
        port: 80,
        connect_timeout: 60000,
        write_timeout: 60000,
        host: 'ups-test-http'
    },
    route: {
        name: 'test-http',
        hosts: ['api.mok88.com'],
        paths: ['/test/(?i)'],
        methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS', 'HEAD', 'TRACE', 'CONNECT'],
        protocols: ['http', 'https'],
        service: {name: 'test-http'}
    },
    upstream: {
        name: 'ups-test-http',
        'healthchecks': {
            'active': {
                'https_verify_certificate': true,
                'unhealthy': {
                    'http_statuses': [429, 404, 500, 501, 502, 503, 504, 505],
                    'tcp_failures': 0,
                    'timeouts': 0,
                    'http_failures': 0,
                    'interval': 0
                },
                'http_path': '/test/metrics',
                'timeout': 1,
                'healthy': {
                    'http_statuses': [200, 302],
                    'interval': 0,
                    'successes': 0
                },
                'concurrency': 10,
                'type': 'http'
            },
            'passive': {
                'unhealthy': {
                    'http_failures': 0,
                    'http_statuses': [429, 500, 503],
                    'tcp_failures': 0,
                    'timeouts': 0
                },
                'type': 'http',
                'healthy': {
                    'successes': 0,
                    'http_statuses': [200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308]
                }
            },
            'threshold': 0
        }
    },
    target: {
        target: '59.110.124.65:8080',
        weight: 100,
        upstream: ''
    }
}

module.exports = KongOption
