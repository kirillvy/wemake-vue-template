#!/usr/bin/env sh

set -o errexit
set -o nounset

# Scaffolding a project:
expect 'tests/scaffold.sh'
cd 'test-project'

# Using default configuration:
cp 'config/.env.template' 'config/.env'

# Running integration tests with docker:
docker-compose run vue "ls flow-typed/npm && cat flow-typed/npm/axios_v0.18.x.js && yarn test"
