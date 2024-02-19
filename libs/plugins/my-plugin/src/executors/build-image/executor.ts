import { BuildImageExecutorSchema } from './schema';
import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import * as path from 'path';
import { logger } from 'nx/src/utils/logger';
import { execSync } from 'child_process';

const LARGE_BUFFER = 1024 * 1000000;

export default async function runExecutor(
  options: BuildImageExecutorSchema,
  context: ExecutorContext,
) {
  const root = path.resolve(context.root, options.root);
  return runBuilderCommand('jibDockerBuild', options.args, {
    cwd: root,
    ignoreWrapper: options.ignoreWrapper,
    runFromParentModule: options.runFromParentModule,
  });
}

function runBuilderCommand(
  command: string,
  params: string[],
  options: {
    cwd: string;
    ignoreWrapper?: boolean;
    useLegacyWrapper?: boolean;
    runFromParentModule?: boolean;
  } = {
    cwd: process.cwd(),
    ignoreWrapper: false,
    useLegacyWrapper: false,
    runFromParentModule: false,
  },
): { success: boolean } {
  const { cwd } = options;
  const execute = `gradlew ${command} ${(params || []).join(' ')}`;
  try {
    logger.info(`Executing command: ${execute}`);
    execSync(execute, { cwd, stdio: [0, 1, 2], maxBuffer: LARGE_BUFFER });
    return { success: true };
  } catch (e) {
    logger.error(`Failed to execute command: ${execute}`);
    logger.error(e);
    return { success: false };
  }
}
