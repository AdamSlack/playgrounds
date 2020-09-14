#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GreetingsApiStack } from '../lib/greetings-api-stack';

const app = new cdk.App();
new GreetingsApiStack(app, 'GreetingsApiStack', { env: { region: 'eu-west-2' }});
