const os = require('os')

const arch = os.arch()
const platform = os.platform() + (arch.startsWith('arm') ? `-${arch}` : '')

switch (platform) {
  case 'linux':
    require('fuse-shared-library-linux/lib')
    break
  case 'darwin':
    require('fuse-shared-library-darwin/lib')
    break
  case 'linux-arm':
    require('fuse-shared-library-linux-arm/lib')
    break
  case 'linux-arm64':
    require('fuse-shared-library-linux-arm64/lib')
    break
  default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
