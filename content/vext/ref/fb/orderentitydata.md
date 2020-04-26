---
title: OrderEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[OrderEntityData](#constructor-0)**() |
| **[OrderEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[OrderEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[OrderEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[OrderEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[OrderEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "debugName" >}} | string |
| {{< prop "issueOrderDelay" >}} | float |
| {{< prop "onCompleteTimeOut" >}} | float |
| {{< prop "onFailedTimeOut" >}} | float |
| {{< prop "readinessOnStart" >}} | [ReadinessLevel](/vext/ref/fb/readinesslevel) |
| {{< prop "enabled" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "OrderEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### OrderEntityData {#constructor-0}
> **OrderEntityData**()

Creates a new [OrderEntityData](/vext/ref/fb/orderentitydata) frostbite instance.

### OrderEntityData {#constructor-1}
> **OrderEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [OrderEntityData](/vext/ref/fb/orderentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### OrderEntityData {#constructor-2}
> **OrderEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [OrderEntityData](/vext/ref/fb/orderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [OrderEntityData](/vext/ref/fb/orderentitydata). |

### OrderEntityData {#constructor-3}
> **OrderEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [OrderEntityData](/vext/ref/fb/orderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [OrderEntityData](/vext/ref/fb/orderentitydata). |

### OrderEntityData {#constructor-4}
> **OrderEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [OrderEntityData](/vext/ref/fb/orderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [OrderEntityData](/vext/ref/fb/orderentitydata). |

### OrderEntityData {#constructor-5}
> **OrderEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [OrderEntityData](/vext/ref/fb/orderentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [OrderEntityData](/vext/ref/fb/orderentitydata). |

## Properties
### {{% prop-heading "debugName" %}}
> **string**

### {{% prop-heading "issueOrderDelay" %}}
> **float**

### {{% prop-heading "onCompleteTimeOut" %}}
> **float**

### {{% prop-heading "onFailedTimeOut" %}}
> **float**

### {{% prop-heading "readinessOnStart" %}}
> **[ReadinessLevel](/vext/ref/fb/readinesslevel)**

### {{% prop-heading "enabled" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [OrderEntityData](/vext/ref/fb/orderentitydata) type.

