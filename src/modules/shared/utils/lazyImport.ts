import { lazy, ComponentType } from 'react';

export function lazyImport<
  Props,
  Component extends ComponentType<Props>,
  ModuleKey extends string,
>(factory: () => Promise<Record<ModuleKey, Component>>, name: ModuleKey) {
  return lazy(() => factory().then(module => ({ default: module[name] })));
}
