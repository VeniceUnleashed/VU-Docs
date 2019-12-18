---
title: Net (Shared Library)
---
## Description

The Net library provides the ability to interact with other networks by sending HTTP requests and establishing socket connections over supported protocols and transports.

## Methods

| Type                                              | Name                        | Parameters                                                                                                                       |
| ------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [GetHTTP](#gethttp)         | string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [HeadHTTP](#headhttp)       | string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [PostHTTP](#posthttp)       | string **url**, string **data**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                               |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [PutHTTP](#puthttp)         | string **url**, string **data**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                               |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [DeleteHTTP](#deletehttp)   | string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [OptionsHTTP](#optionshttp) | string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/cls/shr/httpresponse) | [PatchHTTP](#patchhttp)     | string **url**, string **data**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil                               |
| [NetSocket](/vext/ref/cls/shr/netsocket)       | [Socket](#socket)           | [NetSocketFamily](/vext/ref/cls/shr/netsocketfamily) **family**, [NetSocketType](/vext/ref/cls/shr/netsockettype) **type** |

### GetHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **GetHTTP**(string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

Sends an HTTP GET request to the provided URL and synchronously returns the response.

#### Parameters

| Name    | Type                                            | Description                                       |
| ------- | ----------------------------------------------- | ------------------------------------------------- |
| url     | string                                          | The full URL to send the request to.              |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) | *(Optional)* Additional options for this request. |

#### Example

``` lua
-- Send an HTTP GET request to google with a custom header
local response = Net:GetHTTP('https://google.com', HttpOptions({
    ["X-Test-Header"] = "test value"
}))

-- Print the response body
print(response.body)
```

### HeadHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **HeadHTTP**(string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) |             |

### PostHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **PostHTTP**(string **url**, string **data**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| data    | string                                          |             |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) |             |

### PutHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **PutHTTP**(string **url**, string **data**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| data    | string                                          |             |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) |             |

### DeleteHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **DeleteHTTP**(string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) |             |

### OptionsHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **OptionsHTTP**(string **url**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) |             |

### PatchHTTP

> [HttpResponse](/vext/ref/cls/shr/httpresponse) **PatchHTTP**(string **url**, string **data**, [HttpOptions](/vext/ref/cls/shr/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| data    | string                                          |             |
| options | [HttpOptions](/vext/ref/cls/shr/httpoptions) |             |

### Socket

> [NetSocket](/vext/ref/cls/shr/netsocket) **Socket**([NetSocketFamily](/vext/ref/cls/shr/netsocketfamily) **family**, [NetSocketType](/vext/ref/cls/shr/netsockettype) **type**)

Create a new socket.

#### Parameters

| Name   | Type                                                    | Description         |
| ------ | ------------------------------------------------------- | ------------------- |
| family | [NetSocketFamily](/vext/ref/cls/shr/netsocketfamily) | The address family. |
| type   | [NetSocketType](/vext/ref/cls/shr/netsockettype)     | The socket type.    |

#### Example

``` lua
print('Creating TCP socket.')
local socket = Net:Socket(NetSocketFamily.INET, NetSocketType.Stream)
print(socket)

print('Connecting to server')
local result = socket:Connect('127.0.0.1', 3333)
print(result)

print('Sending data')
local bytesWritten, result = socket:Write('test')
print('Wrote bytes: ' .. tostring(bytesWritten))
print('Result: ' .. tostring(result))

print('Receiving data')
local data, result = socket:Read(10) -- Read up to 10 bytes of data.
print('Read data: ' .. data)
print('Data length: ' .. tostring(data:len()))
print('Result: ' .. tostring(result))
```
