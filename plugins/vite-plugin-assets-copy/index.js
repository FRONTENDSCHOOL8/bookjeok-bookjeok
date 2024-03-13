import path from 'node:path';
import fsPromise from 'node:fs/promises';

let viteConfig = null;

const VitePluginAssetsCopy = (
  // 사용자로부터 전달받은 옵션
  { input, output, timout = 100 } = {}
) => ({
  // 플러그인 이름
  name: 'vite-plugin-assets-copy',
  // 빌드 때 실행
  apply: 'build',
  // 빌드 이후(post) 처리
  enforce: 'post',
  // Vite 구성 closeBundle 함수에 전달
  configResolved(resolvedConfig) {
    viteConfig = resolvedConfig;
  },
  // 비동기 처리
  async closeBundle() {
    // 출력 폴더 가져오기
    const outDir = path.resolve(viteConfig?.build?.outDir || 'dist');

    // 입력 파일
    const inputFile = path.resolve(process.cwd(), input);
    // 출력 파일
    const outputFile = path.resolve(process.cwd(), `${outDir}/${output}`);

    // 잠시 대기... (viteImagemin플러그인 처리 시간)
    await new Promise((resolve) => {
      setTimeout(() => resolve(), timout);
    });

    // 입력 파일을 출력 파일로 복사
    await fsPromise.copyFile(inputFile, outputFile);
  },
});

export default VitePluginAssetsCopy;
