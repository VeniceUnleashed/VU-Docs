---
title: RCON
---
## Description

## Methods

| Type                              | Name                                    | Parameters                                                               |
| --------------------------------- | --------------------------------------- | ------------------------------------------------------------------------ |
| string\[\]                        | [SendCommand](#sendcommand)             | string **command**, string\[\] **args** = {}                             |
| int                               | [RegisterCommand](#registercommand)     | string **command**, int **flags**, function **callback**                 |
| int                               | [RegisterCommand](#registercommand)     | string **command**, int **flags**, object **obj**, function **callback** |
| void                              | [DeregisterCommand](#deregistercommand) | int **handle**                                                           |
| [Guid](/vext/ref/shared/class/guid) | [GetServerGUID](#getserverguid)         |                                                                          |

### SendCommand

> string\[\] **SendCommand**(string **command**, string\[\] **args** = {})

#### Parameters

| Name    | Type       | Description |
| ------- | ---------- | ----------- |
| command | string     |             |
| args    | string\[\] |             |

### RegisterCommand

> int **RegisterCommand**(string **command**, int **flags**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| command  | string   |             |
| flags    | int      |             |
| callback | function |             |

### RegisterCommand

> int **RegisterCommand**(string **command**, int **flags**, object \*\*\*\* obj, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| command  | string   |             |
| flags    | int      |             |
|          | object   |             |
| callback | function |             |

### DeregisterCommand

> void **DeregisterCommand**(int **handle**)

#### Parameters

| Name   | Type | Description |
| ------ | ---- | ----------- |
| handle | int  |             |

### GetServerGUID

> [Guid](/vext/ref/shared/class/guid) **GetServerGUID**()
