---
title: Net
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[GetHTTP](#gethttp)**(url: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[GetHTTP](#gethttp-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[GetHTTPAsync](#gethttpasync)**(url: string, callback: callable) | void |
| **[GetHTTPAsync](#gethttpasync-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[GetHTTPAsync](#gethttpasync-2)**(url: string, context: any, callback: callable) | void |
| **[GetHTTPAsync](#gethttpasync-3)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[HeadHTTP](#headhttp)**(url: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[HeadHTTP](#headhttp-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[HeadHTTPAsync](#headhttpasync)**(url: string, callback: callable) | void |
| **[HeadHTTPAsync](#headhttpasync-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[HeadHTTPAsync](#headhttpasync-2)**(url: string, context: any, callback: callable) | void |
| **[HeadHTTPAsync](#headhttpasync-3)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[PostHTTP](#posthttp)**(url: string, data: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[PostHTTP](#posthttp-1)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[PostHTTPAsync](#posthttpasync)**(url: string, data: string, callback: callable) | void |
| **[PostHTTPAsync](#posthttpasync-1)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[PostHTTPAsync](#posthttpasync-2)**(url: string, data: string, context: any, callback: callable) | void |
| **[PostHTTPAsync](#posthttpasync-3)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[PutHTTP](#puthttp)**(url: string, data: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[PutHTTP](#puthttp-1)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[PutHTTPAsync](#puthttpasync)**(url: string, data: string, callback: callable) | void |
| **[PutHTTPAsync](#puthttpasync-1)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[PutHTTPAsync](#puthttpasync-2)**(url: string, data: string, context: any, callback: callable) | void |
| **[PutHTTPAsync](#puthttpasync-3)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[DeleteHTTP](#deletehttp)**(url: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[DeleteHTTP](#deletehttp-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[DeleteHTTPAsync](#deletehttpasync)**(url: string, callback: callable) | void |
| **[DeleteHTTPAsync](#deletehttpasync-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[DeleteHTTPAsync](#deletehttpasync-2)**(url: string, context: any, callback: callable) | void |
| **[DeleteHTTPAsync](#deletehttpasync-3)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[OptionsHTTP](#optionshttp)**(url: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[OptionsHTTP](#optionshttp-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[OptionsHTTPAsync](#optionshttpasync)**(url: string, callback: callable) | void |
| **[OptionsHTTPAsync](#optionshttpasync-1)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[OptionsHTTPAsync](#optionshttpasync-2)**(url: string, context: any, callback: callable) | void |
| **[OptionsHTTPAsync](#optionshttpasync-3)**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[PatchHTTP](#patchhttp)**(url: string, data: string) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[PatchHTTP](#patchhttp-1)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)) | [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil |
| **[PatchHTTPAsync](#patchhttpasync)**(url: string, data: string, callback: callable) | void |
| **[PatchHTTPAsync](#patchhttpasync-1)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable) | void |
| **[PatchHTTPAsync](#patchhttpasync-2)**(url: string, data: string, context: any, callback: callable) | void |
| **[PatchHTTPAsync](#patchhttpasync-3)**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable) | void |
| **[Socket](#socket)**(family: [NetSocketFamily](/vext/ref/shared/type/netsocketfamily), type: [NetSocketType](/vext/ref/shared/type/netsockettype)) | [NetSocket](/vext/ref/shared/type/netsocket) \| nil |

## Methods

### GetHTTP {#gethttp}

> **GetHTTP**(url: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### GetHTTP {#gethttp-1}

> **GetHTTP**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### GetHTTPAsync {#gethttpasync}

> **GetHTTPAsync**(url: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### GetHTTPAsync {#gethttpasync-1}

> **GetHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### GetHTTPAsync {#gethttpasync-2}

> **GetHTTPAsync**(url: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### GetHTTPAsync {#gethttpasync-3}

> **GetHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### HeadHTTP {#headhttp}

> **HeadHTTP**(url: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### HeadHTTP {#headhttp-1}

> **HeadHTTP**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### HeadHTTPAsync {#headhttpasync}

> **HeadHTTPAsync**(url: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### HeadHTTPAsync {#headhttpasync-1}

> **HeadHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### HeadHTTPAsync {#headhttpasync-2}

> **HeadHTTPAsync**(url: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### HeadHTTPAsync {#headhttpasync-3}

> **HeadHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### PostHTTP {#posthttp}

> **PostHTTP**(url: string, data: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### PostHTTP {#posthttp-1}

> **PostHTTP**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### PostHTTPAsync {#posthttpasync}

> **PostHTTPAsync**(url: string, data: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### PostHTTPAsync {#posthttpasync-1}

> **PostHTTPAsync**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### PostHTTPAsync {#posthttpasync-2}

> **PostHTTPAsync**(url: string, data: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### PostHTTPAsync {#posthttpasync-3}

> **PostHTTPAsync**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### PutHTTP {#puthttp}

> **PutHTTP**(url: string, data: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### PutHTTP {#puthttp-1}

> **PutHTTP**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### PutHTTPAsync {#puthttpasync}

> **PutHTTPAsync**(url: string, data: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### PutHTTPAsync {#puthttpasync-1}

> **PutHTTPAsync**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### PutHTTPAsync {#puthttpasync-2}

> **PutHTTPAsync**(url: string, data: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### PutHTTPAsync {#puthttpasync-3}

> **PutHTTPAsync**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### DeleteHTTP {#deletehttp}

> **DeleteHTTP**(url: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### DeleteHTTP {#deletehttp-1}

> **DeleteHTTP**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### DeleteHTTPAsync {#deletehttpasync}

> **DeleteHTTPAsync**(url: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### DeleteHTTPAsync {#deletehttpasync-1}

> **DeleteHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### DeleteHTTPAsync {#deletehttpasync-2}

> **DeleteHTTPAsync**(url: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### DeleteHTTPAsync {#deletehttpasync-3}

> **DeleteHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### OptionsHTTP {#optionshttp}

> **OptionsHTTP**(url: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### OptionsHTTP {#optionshttp-1}

> **OptionsHTTP**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### OptionsHTTPAsync {#optionshttpasync}

> **OptionsHTTPAsync**(url: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### OptionsHTTPAsync {#optionshttpasync-1}

> **OptionsHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### OptionsHTTPAsync {#optionshttpasync-2}

> **OptionsHTTPAsync**(url: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### OptionsHTTPAsync {#optionshttpasync-3}

> **OptionsHTTPAsync**(url: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### PatchHTTP {#patchhttp}

> **PatchHTTP**(url: string, data: string): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### PatchHTTP {#patchhttp-1}

> **PatchHTTP**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions)): [HttpResponse](/vext/ref/shared/type/httpresponse) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[HttpResponse](/vext/ref/shared/type/httpresponse)** \| **nil** |  |

### PatchHTTPAsync {#patchhttpasync}

> **PatchHTTPAsync**(url: string, data: string, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### PatchHTTPAsync {#patchhttpasync-1}

> **PatchHTTPAsync**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **callback** | callable | A callback in the form `function(response: HttpResponse | nil): void`. |

### PatchHTTPAsync {#patchhttpasync-2}

> **PatchHTTPAsync**(url: string, data: string, context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### PatchHTTPAsync {#patchhttpasync-3}

> **PatchHTTPAsync**(url: string, data: string, options: [HttpOptions](/vext/ref/shared/type/httpoptions), context: any, callback: callable)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **url** | string |  |
| **data** | string |  |
| **options** | [HttpOptions](/vext/ref/shared/type/httpoptions) |  |
| **context** | any |  |
| **callback** | callable | A callback in the form `function(context: any, response: HttpResponse | nil): void`. |

### Socket {#socket}

> **Socket**(family: [NetSocketFamily](/vext/ref/shared/type/netsocketfamily), type: [NetSocketType](/vext/ref/shared/type/netsockettype)): [NetSocket](/vext/ref/shared/type/netsocket) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **family** | [NetSocketFamily](/vext/ref/shared/type/netsocketfamily) |  |
| **type** | [NetSocketType](/vext/ref/shared/type/netsockettype) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[NetSocket](/vext/ref/shared/type/netsocket)** \| **nil** |  |

