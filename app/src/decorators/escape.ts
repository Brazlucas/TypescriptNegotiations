export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function(...args: any[]): string {
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === 'string') {
      console.log(
          `@escape em ação na classe view${ this.constructor.name } para o método ${ propertyKey }`
      )
      retorno = retorno
          .replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return retorno;
  }

  return descriptor;
}
