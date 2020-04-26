---
title: EntityData
---

Inherits from 
[GameObjectData](/vext/ref/fb/gameobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[EntityData](#constructor-0)**() |
| **[EntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[EntityData](#constructor-2)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EntityData](#constructor-3)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EntityData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "EntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### EntityData {#constructor-0}
> **EntityData**()

Creates a new [EntityData](/vext/ref/fb/entitydata) frostbite instance.

### EntityData {#constructor-1}
> **EntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [EntityData](/vext/ref/fb/entitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### EntityData {#constructor-2}
> **EntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EntityData](/vext/ref/fb/entitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EntityData](/vext/ref/fb/entitydata). |

### EntityData {#constructor-3}
> **EntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EntityData](/vext/ref/fb/entitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EntityData](/vext/ref/fb/entitydata). |

### EntityData {#constructor-4}
> **EntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [EntityData](/vext/ref/fb/entitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [EntityData](/vext/ref/fb/entitydata). |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [EntityData](/vext/ref/fb/entitydata) type.

