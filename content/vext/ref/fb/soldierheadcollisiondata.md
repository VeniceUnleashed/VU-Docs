---
title: SoldierHeadCollisionData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[SoldierHeadCollisionData](#constructor-0)**() |
| **[SoldierHeadCollisionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SoldierHeadCollisionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "headRadius" >}} | float |
| {{< prop "poseStates" >}} | [SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierHeadCollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierHeadCollisionData {#constructor-0}
> **SoldierHeadCollisionData**()

Creates a new [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata) frostbite instance.

### SoldierHeadCollisionData {#constructor-1}
> **SoldierHeadCollisionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SoldierHeadCollisionData {#constructor-2}
> **SoldierHeadCollisionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata). |

## Properties
### {{% prop-heading "headRadius" %}}
> **float**

### {{% prop-heading "poseStates" %}}
> **[SoldierHeadCollisionPoseData](/vext/ref/fb/soldierheadcollisionposedata)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierHeadCollisionData](/vext/ref/fb/soldierheadcollisiondata) type.

