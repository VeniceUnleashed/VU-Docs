---
title: Entity
---
## Description

## Constructors

| Constructor                                                                          | Description                                              |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [Entity](/vext/ref/shared/class/entity)([Entity](/vext/ref/shared/class/entity) **ref**) | Create a reference copy of an instance of the same type. |

## Static Members

| Type                                                    | Name            | Description |
| ------------------------------------------------------- | --------------- | ----------- |
| [TypeInformation](/vext/ref/shared/class/typeinformation) | Entity.typeInfo |             |

## Properties

| Name       | Type                                                    | Writable | Description |
| ---------- | ------------------------------------------------------- | -------- | ----------- |
| typeInfo   | [TypeInformation](/vext/ref/shared/class/typeinformation) |          |             |
| data       | [DataContainer](/vext/ref/shared/class/datacontainer)     |          |             |
| instanceId | int                                                     |          |             |
| uniqueId   | int                                                     |          |             |

## Operators

| Operator | Parameters                                      |
| -------- | ----------------------------------------------- |
| \==      | [Entity](/vext/ref/shared/class/entity) **other** |

## Methods

| Type | Name                                                    | Parameters                                                                                      |
| ---- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| void | [Init](#init)                                           | [Realm](/vext/ref/shared/class/realm) **realm**, bool **enableAllowed**, bool **isGhost** = false |
| void | [Destroy](#destroy)                                     |                                                                                                 |
| bool | [Is](#is)                                               | string **type**                                                                                 |
| void | [FireEvent](#fireevent)                                 | int **eventId**                                                                                 |
| void | [FireEvent](#fireevent)                                 | string **eventId**                                                                              |
| void | [FireEvent](#fireevent)                                 | [EntityEvent](/vext/ref/shared/class/entityevent) **event**                                       |
| void | [PropertyChanged](#propertychanged)                     | int **propertyName**                                                                            |
| void | [PropertyChanged](#propertychanged)                     | int **propertyName**, **value**                                                                 |
| void | [PropertyChanged](#propertychanged)                     | string **propertyName**                                                                         |
| void | [PropertyChanged](#propertychanged)                     | string **propertyName**, **value**                                                              |
| int  | [RegisterEventCallback](#registereventcallback)         | function **callback**                                                                           |
| int  | [RegisterEventCallback](#registereventcallback)         | object **obj**, function **callback**                                                           |
| void | [UnregisterEventCallback](#unregistereventcallback)     |                                                                                                 |
| int  | [RegisterCreateCallback](#registercreatecallback)       | function **callback**                                                                           |
| int  | [RegisterCreateCallback](#registercreatecallback)       | object **obj**, function **callback**                                                           |
| void | [UnregisterCreateCallback](#unregistercreatecallback)   |                                                                                                 |
| int  | [RegisterDestroyCallback](#registerdestroycallback)     | function **callback**                                                                           |
| int  | [RegisterDestroyCallback](#registerdestroycallback)     | object **obj**, function **callback**                                                           |
| void | [UnregisterDestroyCallback](#unregisterdestroycallback) |                                                                                                 |
| int  | [RegisterInitCallback](#registerinitcallback)           | function **callback**                                                                           |
| int  | [RegisterInitCallback](#registerinitcallback)           | object **obj**, function **callback**                                                           |
| void | [UnregisterInitCallback](#unregisterinitcallback)       |                                                                                                 |
| int  | [RegisterDeinitCallback](#registerdeinitcallback)       | function **callback**                                                                           |
| int  | [RegisterDeinitCallback](#registerdeinitcallback)       | object **obj**, function **callback**                                                           |
| void | [UnregisterDeinitCallback](#unregisterdeinitcallback)   |                                                                                                 |

### Init

> void **Init**([Realm](/vext/ref/shared/class/realm) **realm**, bool **enableAllowed**, bool **isGhost** = false)

#### Parameters

| Name          | Type                                | Description |
| ------------- | ----------------------------------- | ----------- |
| realm         | [Realm](/vext/ref/shared/class/realm) |             |
| enableAllowed | bool                                |             |
| isGhost       | bool                                |             |

### Destroy

> void **Destroy**()

### Is

> bool **Is**(string **type**)

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| type | string |             |

### FireEvent

> void **FireEvent**(int **eventId**)

#### Parameters

| Name    | Type | Description |
| ------- | ---- | ----------- |
| eventId | int  |             |

### FireEvent

> void **FireEvent**(string **eventId**)

#### Parameters

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| eventId | string |             |

### FireEvent

> void **FireEvent**([EntityEvent](/vext/ref/shared/class/entityevent) **event**)

#### Parameters

| Name  | Type                                            | Description |
| ----- | ----------------------------------------------- | ----------- |
| event | [EntityEvent](/vext/ref/shared/class/entityevent) |             |

### PropertyChanged

> void **PropertyChanged**(int **propertyName**)

#### Parameters

| Name         | Type | Description |
| ------------ | ---- | ----------- |
| propertyName | int  |             |

### PropertyChanged

> void **PropertyChanged**(int **propertyName**, value **undefined**)

#### Parameters

| Name         | Type  | Description |
| ------------ | ----- | ----------- |
| propertyName | int   |             |
| undefined    | value |             |

### PropertyChanged

> void **PropertyChanged**(string **propertyName**)

#### Parameters

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| propertyName | string |             |

### PropertyChanged

> void **PropertyChanged**(string **propertyName**, value **undefined**)

#### Parameters

| Name         | Type   | Description |
| ------------ | ------ | ----------- |
| propertyName | string |             |
| undefined    | value  |             |

### RegisterEventCallback

> int **RegisterEventCallback**(function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| callback | function |             |

### RegisterEventCallback

> int **RegisterEventCallback**(object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| obj      | object   |             |
| callback | function |             |

### UnregisterEventCallback

> void **UnregisterEventCallback**()

### RegisterCreateCallback

> int **RegisterCreateCallback**(function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| callback | function |             |

### RegisterCreateCallback

> int **RegisterCreateCallback**(object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| obj      | object   |             |
| callback | function |             |

### UnregisterCreateCallback

> void **UnregisterCreateCallback**()

### RegisterDestroyCallback

> int **RegisterDestroyCallback**(function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| callback | function |             |

### RegisterDestroyCallback

> int **RegisterDestroyCallback**(object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| obj      | object   |             |
| callback | function |             |

### UnregisterDestroyCallback

> void **UnregisterDestroyCallback**()

### RegisterInitCallback

> int **RegisterInitCallback**(function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| callback | function |             |

### RegisterInitCallback

> int **RegisterInitCallback**(object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| obj      | object   |             |
| callback | function |             |

### UnregisterInitCallback

> void **UnregisterInitCallback**()

### RegisterDeinitCallback

> int **RegisterDeinitCallback**(function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| callback | function |             |

### RegisterDeinitCallback

> int **RegisterDeinitCallback**(object **obj**, function **callback**)

#### Parameters

| Name     | Type     | Description |
| -------- | -------- | ----------- |
| obj      | object   |             |
| callback | function |             |

### UnregisterDeinitCallback

> void **UnregisterDeinitCallback**()
