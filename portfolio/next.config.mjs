import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {output: "export"
};
    

export default withSentryConfig(nextConfig, {

silent: true,
org: "leading technologies - media",
project: "Personal Protfolio",
}, {
widenClientFileUpload: true,


transpileClientSDK: true,

hideSourceMaps: true,

disableLogger: true,


automaticVercelMonitors: true,
});