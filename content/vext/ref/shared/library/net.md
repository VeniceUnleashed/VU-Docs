---
title: Net
---
## Description

The Net library provides the ability to interact with other networks by sending HTTP requests and establishing socket connections over supported protocols and transports.

## Methods

| Type                                              | Name                        | Parameters                                                                                                                       |
| ------------------------------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [GetHTTP](#gethttp)         | string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [HeadHTTP](#headhttp)       | string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [PostHTTP](#posthttp)       | string **url**, string **data**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                               |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [PutHTTP](#puthttp)         | string **url**, string **data**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                               |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [DeleteHTTP](#deletehttp)   | string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [OptionsHTTP](#optionshttp) | string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                                                |
| [HttpResponse](/vext/ref/shared/class/httpresponse) | [PatchHTTP](#patchhttp)     | string **url**, string **data**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil                               |
| [NetSocket](/vext/ref/shared/class/netsocket)       | [Socket](#socket)           | [NetSocketFamily](/vext/ref/shared/class/netsocketfamily) **family**, [NetSocketType](/vext/ref/shared/class/netsockettype) **type** |

### GetHTTP

> [HttpResponse](/vext/ref/shared/class/httpresponse) **GetHTTP**(string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

Sends an HTTP GET request to the provided URL and synchronously returns the response.

#### Parameters

| Name    | Type                                            | Description                                       |
| ------- | ----------------------------------------------- | ------------------------------------------------- |
| url     | string                                          | The full URL to send the request to.              |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) | *(Optional)* Additional options for this request. |

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

> [HttpResponse](/vext/ref/shared/class/httpresponse) **HeadHTTP**(string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) |             |

### PostHTTP

> [HttpResponse](/vext/ref/shared/class/httpresponse) **PostHTTP**(string **url**, string **data**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| data    | string                                          |             |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) |             |

### PutHTTP

> [HttpResponse](/vext/ref/shared/class/httpresponse) **PutHTTP**(string **url**, string **data**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| data    | string                                          |             |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) |             |

### DeleteHTTP

> [HttpResponse](/vext/ref/shared/class/httpresponse) **DeleteHTTP**(string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) |             |

### OptionsHTTP

> [HttpResponse](/vext/ref/shared/class/httpresponse) **OptionsHTTP**(string **url**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) |             |

### PatchHTTP

> [HttpResponse](/vext/ref/shared/class/httpresponse) **PatchHTTP**(string **url**, string **data**, [HttpOptions](/vext/ref/shared/class/httpoptions) **options** = nil)

#### Parameters

| Name    | Type                                            | Description |
| ------- | ----------------------------------------------- | ----------- |
| url     | string                                          |             |
| data    | string                                          |             |
| options | [HttpOptions](/vext/ref/shared/class/httpoptions) |             |

### Socket

> [NetSocket](/vext/ref/shared/class/netsocket) **Socket**([NetSocketFamily](/vext/ref/shared/class/netsocketfamily) **family**, [NetSocketType](/vext/ref/shared/class/netsockettype) **type**)

Create a new socket.

#### Parameters

| Name   | Type                                                    | Description         |
| ------ | ------------------------------------------------------- | ------------------- |
| family | [NetSocketFamily](/vext/ref/shared/class/netsocketfamily) | The address family. |
| type   | [NetSocketType](/vext/ref/shared/class/netsockettype)     | The socket type.    |

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
