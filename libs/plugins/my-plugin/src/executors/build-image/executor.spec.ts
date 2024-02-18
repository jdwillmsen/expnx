import { BuildImageExecutorSchema } from './schema';
import executor from './executor';

const options: BuildImageExecutorSchema = { root: '' };

describe('BuildImage Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
