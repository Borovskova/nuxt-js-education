const apiBaseUrl = 'https://jsonplaceholder.typicode.com/todos'

export async function getRequest(url: string, params: Record<string, string | number | boolean | undefined> = {}):Promise<any>{
    return await $fetch(url, {
        baseURL: `${apiBaseUrl}`,
        params,
      })
}
