---
title: AreaProximityEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[AreaProximityEntityData](#constructor-0)**() |
| **[AreaProximityEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AreaProximityEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AreaProximityEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AreaProximityEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AreaProximityEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "realm" >}} | [Realm](/vext/ref/fb/realm) |
| {{< prop "proximityDistance" >}} | float |
| {{< prop "updatePass" >}} | [UpdatePass](/vext/ref/fb/updatepass) |
| {{< prop "autoStart" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AreaProximityEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AreaProximityEntityData {#constructor-0}
> **AreaProximityEntityData**()

Creates a new [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata) frostbite instance.

### AreaProximityEntityData {#constructor-1}
> **AreaProximityEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AreaProximityEntityData {#constructor-2}
> **AreaProximityEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). |

### AreaProximityEntityData {#constructor-3}
> **AreaProximityEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). |

### AreaProximityEntityData {#constructor-4}
> **AreaProximityEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). |

### AreaProximityEntityData {#constructor-5}
> **AreaProximityEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata). |

## Properties
### {{% prop-heading "realm" %}}
> **[Realm](/vext/ref/fb/realm)**

### {{% prop-heading "proximityDistance" %}}
> **float**

### {{% prop-heading "updatePass" %}}
> **[UpdatePass](/vext/ref/fb/updatepass)**

### {{% prop-heading "autoStart" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AreaProximityEntityData](/vext/ref/fb/areaproximityentitydata) type.

