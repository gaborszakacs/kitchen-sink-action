import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name')

    core.debug('debug level log')
    core.info('info level log')
    core.warning('warning level log')
    core.error('error level log')

    core.setOutput('greeting', 'Hello ' + name)
    core.exportVariable('exportVarKey', 'exportVarValue')
    core.setSecret('secretToBeMasked')
    core.addPath('/path/to/mytool');
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
