class PathFormat {
  private rootpath: string

  constructor() {
    this.rootpath = ''
  }

  setRootPath(path: string): void {
    const segments = path.split(/[/\\]/)
    if (segments.length > 1) {
      segments.pop()
      this.rootpath = segments.join(path.startsWith('/') ? '/' : '\\')
    }
  }

  getRootPath(): string {
    return this.rootpath
  }

  getNewPath(path: string): string {
    const segments = path.split(/[/\\]/)
    return this.rootpath + segments.join(this.rootpath.startsWith('/') ? '/' : '\\')
  }

  static checkPath(path: string): boolean {
    return path.startsWith('/') || path.includes('\\')
  }
}

export default PathFormat
