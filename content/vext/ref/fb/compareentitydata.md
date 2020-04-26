---
title: CompareEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[CompareEntityData](#constructor-0)**() |
| **[CompareEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CompareEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CompareEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CompareEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CompareEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "operator" >}} | [CompareOp](/vext/ref/fb/compareop) |
| {{< prop "floatIn0" >}} | float |
| {{< prop "floatIn1" >}} | float |
| {{< prop "intIn0" >}} | int |
| {{< prop "intIn1" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CompareEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CompareEntityData {#constructor-0}
> **CompareEntityData**()

Creates a new [CompareEntityData](/vext/ref/fb/compareentitydata) frostbite instance.

### CompareEntityData {#constructor-1}
> **CompareEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CompareEntityData](/vext/ref/fb/compareentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CompareEntityData {#constructor-2}
> **CompareEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CompareEntityData](/vext/ref/fb/compareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CompareEntityData](/vext/ref/fb/compareentitydata). |

### CompareEntityData {#constructor-3}
> **CompareEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CompareEntityData](/vext/ref/fb/compareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CompareEntityData](/vext/ref/fb/compareentitydata). |

### CompareEntityData {#constructor-4}
> **CompareEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CompareEntityData](/vext/ref/fb/compareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CompareEntityData](/vext/ref/fb/compareentitydata). |

### CompareEntityData {#constructor-5}
> **CompareEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CompareEntityData](/vext/ref/fb/compareentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CompareEntityData](/vext/ref/fb/compareentitydata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "operator" %}}
> **[CompareOp](/vext/ref/fb/compareop)**

### {{% prop-heading "floatIn0" %}}
> **float**

### {{% prop-heading "floatIn1" %}}
> **float**

### {{% prop-heading "intIn0" %}}
> **int**

### {{% prop-heading "intIn1" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CompareEntityData](/vext/ref/fb/compareentitydata) type.

