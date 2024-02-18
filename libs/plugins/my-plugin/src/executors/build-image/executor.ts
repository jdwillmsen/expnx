import { BuildImageExecutorSchema } from './schema';
import { ExecutorContext } from 'nx/src/config/misc-interfaces';
import * as path from 'path';
import { logger } from 'nx/src/utils/logger';
import { LARGE_BUFFER } from 'nx/src/executors/run-commands/run-commands.impl';

export default async function runExecutor(
  options: BuildImageExecutorSchema,
  context: ExecutorContext,
) {
  const root = path.resolve(context.root, options.root);
  logger.log('Test');
  // return runBuilderCommand('jibDockerBuild', options.args, {
  //   cwd: root,
  //   ignoreWrapper: options.ignoreWrapper,
  //   runFromParentModule: options.runFromParentModule,
  // });
}

// function runBuilderCommand(
//   commandAlias: string,
//   getBuilder: (cwd: string) => BuilderCore,
//   params: string[],
//   options: {
//     cwd: string;
//     ignoreWrapper?: boolean;
//     useLegacyWrapper?: boolean;
//     runFromParentModule?: boolean;
//   } = { cwd: process.cwd(), ignoreWrapper: false, useLegacyWrapper: false, runFromParentModule: false }
// ): { success: boolean } {
//   // Take the parameters or set defaults
//   const buildSystem = getBuilder(options.cwd);
//   const executable = buildSystem.getExecutable(
//     options.ignoreWrapper ?? false,
//     options.useLegacyWrapper ?? false
//   );
//   const { cwd, command } = buildSystem.getCommand(commandAlias, options);
//   // Create the command to execute
//   const execute = `${executable} ${command} ${(params || []).join(' ')}`;
//   try {
//     logger.info(`Executing command: ${execute}`);
//     execSync(execute, { cwd, stdio: [0, 1, 2], maxBuffer: LARGE_BUFFER });
//     return { success: true };
//   } catch (e) {
//     logger.error(`Failed to execute command: ${execute}`);
//     logger.error(e);
//     return { success: false };
//   }
// }
