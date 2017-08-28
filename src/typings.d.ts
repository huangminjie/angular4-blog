/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  animateCss(animationName: string): void;
  animateCss(animationName: string, callback: Function): void;
}

declare module "*.json" {
  const value: any;
  export default value;
}