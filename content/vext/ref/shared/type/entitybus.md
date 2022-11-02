---
title: EntityBus
---

## Summary

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entities" true >}} | [Entity](/vext/ref/shared/type/entity){} |
| {{< prop "components" true >}} | [Component](/vext/ref/shared/type/component){} |
| {{< prop "peers" true >}} | [EntityBusPeer](/vext/ref/shared/type/entitybuspeer){} |
| {{< prop "parent" true >}} | [EntityBus](/vext/ref/shared/type/entitybus) \| nil |
| {{< prop "parentRepresentative" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "data" true >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "dataId" true >}} | [NetworkDataId](/vext/ref/fb/networkdataid) |
| {{< prop "instanceId" true >}} | int |
| {{< prop "networkId" true >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[FireEvent](#fireevent)**(targetData: [DataContainer](/vext/ref/shared/type/datacontainer), eventId: int) | void |
| **[FireEvent](#fireevent-1)**(targetData: [DataContainer](/vext/ref/shared/type/datacontainer), eventName: string) | void |
| **[FireEvent](#fireevent-2)**(targetData: [DataContainer](/vext/ref/shared/type/datacontainer), event: [EntityEvent](/vext/ref/shared/type/entityevent)) | void |
| **[GetEntity](#getentity)**(forData: [DataContainer](/vext/ref/shared/type/datacontainer)) | [Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component) \| nil |
| **[PropertyChanged](#propertychanged)**(propertyId: int) | void |
| **[PropertyChanged](#propertychanged-1)**(propertyId: int, value: any) | void |
| **[PropertyChanged](#propertychanged-2)**(propertyName: string) | void |
| **[PropertyChanged](#propertychanged-3)**(propertyName: string, value: any) | void |
| **[GetLinks](#getlinks)**(toData: [DataContainer](/vext/ref/shared/type/datacontainer), fieldId: int) | ([Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component)){} |
| **[GetLinks](#getlinks-1)**(toData: [DataContainer](/vext/ref/shared/type/datacontainer), fieldName: string) | ([Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component)){} |
| **[RegisterEventCallback](#registereventcallback)**(callback: callable) | int |
| **[RegisterEventCallback](#registereventcallback-1)**(context: any, callback: callable) | int |
| **[UnregisterEventCallback](#unregistereventcallback)**(handle: int) | void |

### Operators

| Operator | Rhs | Returns |
| -------- | --- | ------- |
| **[==](#op-eq)** | [EntityBus](/vext/ref/shared/type/entitybus) | bool |

## Properties

### {{% prop-heading "entities" true %}}

> **[Entity](/vext/ref/shared/type/entity)**{}

### {{% prop-heading "components" true %}}

> **[Component](/vext/ref/shared/type/component)**{}

### {{% prop-heading "peers" true %}}

> **[EntityBusPeer](/vext/ref/shared/type/entitybuspeer)**{}

### {{% prop-heading "parent" true %}}

> **[EntityBus](/vext/ref/shared/type/entitybus)** \| **nil**

### {{% prop-heading "parentRepresentative" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "data" true %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "dataId" true %}}

> **[NetworkDataId](/vext/ref/fb/networkdataid)**

### {{% prop-heading "instanceId" true %}}

> **int**

### {{% prop-heading "networkId" true %}}

> **int**

## Methods

### FireEvent {#fireevent}

> **FireEvent**(targetData: [DataContainer](/vext/ref/shared/type/datacontainer), eventId: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **targetData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **eventId** | int |  |

### FireEvent {#fireevent-1}

> **FireEvent**(targetData: [DataContainer](/vext/ref/shared/type/datacontainer), eventName: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **targetData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **eventName** | string |  |

### FireEvent {#fireevent-2}

> **FireEvent**(targetData: [DataContainer](/vext/ref/shared/type/datacontainer), event: [EntityEvent](/vext/ref/shared/type/entityevent))

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **targetData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **event** | [EntityEvent](/vext/ref/shared/type/entityevent) |  |

### GetEntity {#getentity}

> **GetEntity**(forData: [DataContainer](/vext/ref/shared/type/datacontainer)): [Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component) \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **forData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[Entity](/vext/ref/shared/type/entity)** \| **[Component](/vext/ref/shared/type/component)** \| **nil** |  |

### PropertyChanged {#propertychanged}

> **PropertyChanged**(propertyId: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |

### PropertyChanged {#propertychanged-1}

> **PropertyChanged**(propertyId: int, value: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyId** | int |  |
| **value** | any |  |

### PropertyChanged {#propertychanged-2}

> **PropertyChanged**(propertyName: string)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyName** | string |  |

### PropertyChanged {#propertychanged-3}

> **PropertyChanged**(propertyName: string, value: any)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **propertyName** | string |  |
| **value** | any |  |

### GetLinks {#getlinks}

> **GetLinks**(toData: [DataContainer](/vext/ref/shared/type/datacontainer), fieldId: int): ([Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component)){}

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **toData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **fieldId** | int |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| (**[Entity](/vext/ref/shared/type/entity)** \| **[Component](/vext/ref/shared/type/component)**){} |  |

### GetLinks {#getlinks-1}

> **GetLinks**(toData: [DataContainer](/vext/ref/shared/type/datacontainer), fieldName: string): ([Entity](/vext/ref/shared/type/entity) \| [Component](/vext/ref/shared/type/component)){}

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **toData** | [DataContainer](/vext/ref/shared/type/datacontainer) |  |
| **fieldName** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| (**[Entity](/vext/ref/shared/type/entity)** \| **[Component](/vext/ref/shared/type/component)**){} |  |

### RegisterEventCallback {#registereventcallback}

> **RegisterEventCallback**(callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **callback** | callable | A callback in the form `function(bus: EntityBus, data: DataContainer, event: EntityEvent): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### RegisterEventCallback {#registereventcallback-1}

> **RegisterEventCallback**(context: any, callback: callable): int

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **context** | any | A context value to pass to the callback. |
| **callback** | callable | A callback in the form `function(context: any, bus: EntityBus, data: DataContainer, event: EntityEvent): bool`. |

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### UnregisterEventCallback {#unregistereventcallback}

> **UnregisterEventCallback**(handle: int)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **handle** | int |  |

## Operators

### operator== {#op-eq}

> operator==(rhs: [EntityBus](/vext/ref/shared/type/entitybus)): bool

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **rhs** | [EntityBus](/vext/ref/shared/type/entitybus) |  |
#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

