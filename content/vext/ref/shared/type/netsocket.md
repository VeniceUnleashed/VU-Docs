---
title: NetSocket
---

Represents a network socket.

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Connect](#connect)**(target: string, port: int) | int |
| **[Read](#read)**(length: int) | (string, int) |
| **[Write](#write)**(data: string) | (int, int) |
| **[Destroy](#destroy)**() | int |
| **[ReadFrom](#readfrom)**(length: int, host: string, port: int) | (string, string, int, int) |
| **[WriteTo](#writeto)**(data: string, host: string, port: int) | (int, int) |

## Methods

### Connect {#connect}

> **Connect**(target: string, port: int): int

Attempts to establish a connection to the specified target at the specified port. Returns a status code. Status code `0` indicates the operation completed successfully while any other number represents an error. For a complete listing of error codes refer to the [Windows Sockets Error Codes](https://msdn.microsoft.com/en-us/library/windows/desktop/ms740668\(v=vs.85\).aspx) table on MSDN.


#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **target** | string | The target host or IP address. |
| **port** | int | The port to establish the connection to. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### Read {#read}

> **Read**(length: int): (string, int)

Attempts to read data from the socket. Returns the data and a status code. The length of the returned data will not necessarily be the same as the requested data length.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **length** | int | The number of bytes to read. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |
| **int** |  |

### Write {#write}

> **Write**(data: string): (int, int)

Writes data to the socket. Returns the number of bytes written and a status code.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | string | The data to write to the socket. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |
| **int** |  |

### Destroy {#destroy}

> **Destroy**(): int

Terminates the connection (if active) and destroys the underlying socket. Returns a status code.

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### ReadFrom {#readfrom}

> **ReadFrom**(length: int, host: string, port: int): (string, string, int, int)

Attempts to read a datagram. Returns the data, the source ip, source port, and a status code. The length of the returned data will not necessarily be the same as the requested data length.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **length** | int | The number of bytes to read. |
| **host** | string | The remote hostname or IP address. |
| **port** | int | The remote port. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |
| **string** |  |
| **int** |  |
| **int** |  |

### WriteTo {#writeto}

> **WriteTo**(data: string, host: string, port: int): (int, int)

Sends data to the specified destination. Returns the number of bytes written and a status code.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | string | The data to write to the socket. |
| **host** | string | The remote hostname or IP address. |
| **port** | int | The remote port. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |
| **int** |  |

