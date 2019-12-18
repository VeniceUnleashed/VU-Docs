---
title: NetSocket (Shared Class)
---
## Description

Represents a network socket.

## Methods

| Type                          | Name                  | Parameters                                               |
| ----------------------------- | --------------------- | -------------------------------------------------------- |
| number                        | [Connect](#connect)   | string **target**, number **port**                       |
| string, number                | [Read](#read)         | number **bytesToRead**                                   |
| number, number                | [Write](#write)       | string **data**                                          |
| string, string, number number | [ReadFrom](#readfrom) | number **bytesToRead**, string **host**, number **port** |
| number, number                | [WriteTo](#writeto)   | string **data**, string **host**, number **port**        |
| number                        | [Destroy](#destroy)   |                                                          |

### Connect

> number **Connect**(string **target**, number **port**)

Attempts to establish a connection to the specified target at the specified port. Returns a status code. Status code 0 indicates the operation completed successfully while any other number represents an error. For a complete listing of error codes refer to the [Windows Sockets Error Codes](https://msdn.microsoft.com/en-us/library/windows/desktop/ms740668\(v=vs.85\).aspx) table on MSDN.

#### Parameters

| Name   | Type   | Description                              |
| ------ | ------ | ---------------------------------------- |
| target | string | The target host or IP address.           |
| port   | number | The port to establish the connection to. |

### Read

> (string, number) **Read**(number **bytesToRead**)

Attempts to read data from the socket. Returns the data and a status code. The length of the returned data will not necessarily be the same as the requested data length.

#### Parameters

| Name        | Type   | Description                  |
| ----------- | ------ | ---------------------------- |
| bytesToRead | number | The number of bytes to read. |

### Write

> (number, number) **Write**(string **data**)

Writes data to the socket. Returns the number of bytes written and a status code.

#### Parameters

| Name | Type   | Description                      |
| ---- | ------ | -------------------------------- |
| data | string | The data to write to the socket. |

### ReadFrom

> (string, string, number, number) **ReadFrom**(number **bytesToRead**, string **host**, number **port**)

Attempts to read a datagram. Returns the data, the source ip, source port, and a status code. The length of the returned data will not necessarily be the same as the requested data length.

#### Parameters

| Name        | Type   | Description                        |
| ----------- | ------ | ---------------------------------- |
| bytesToRead | number | The number of bytes to read.       |
| host        | string | The remote hostname or IP address. |
| port        | number | The remote port.                   |

### WriteTo

> (number, number) **WriteTo**(string **data**, string **host**, number **port**)

Sends data to the specified destination. Returns the number of bytes written and a status code.

#### Parameters

| Name | Type   | Description                        |
| ---- | ------ | ---------------------------------- |
| data | string | The data to write to the socket.   |
| host | string | The remote hostname or IP address. |
| port | number | The remote port.                   |

### Destroy

> number **Destroy**()

Terminates the connection (if active) and destroys the underlying socket. Returns a status code.
