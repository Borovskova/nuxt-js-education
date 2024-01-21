export async function defaultRequest(method:any, url: string, data: any = {}):Promise<any>{
  const config = useRuntimeConfig()

    return await $fetch(url, {
        method,
        baseURL: config.public.apiUrl,
        data,
      })
}
