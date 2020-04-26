---
title: CollisionData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[CollisionData](#constructor-0)**() |
| **[CollisionData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CollisionData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "damageAtVerticalVelocity" >}} | [ValueAtX](/vext/ref/fb/valueatx)[] |
| {{< prop "damageAtHorizVelocity" >}} | [ValueAtX](/vext/ref/fb/valueatx)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CollisionData {#constructor-0}
> **CollisionData**()

Creates a new [CollisionData](/vext/ref/fb/collisiondata) frostbite instance.

### CollisionData {#constructor-1}
> **CollisionData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CollisionData](/vext/ref/fb/collisiondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CollisionData {#constructor-2}
> **CollisionData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CollisionData](/vext/ref/fb/collisiondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CollisionData](/vext/ref/fb/collisiondata). |

## Properties
### {{% prop-heading "damageAtVerticalVelocity" %}}
> **[ValueAtX](/vext/ref/fb/valueatx)**[]

### {{% prop-heading "damageAtHorizVelocity" %}}
> **[ValueAtX](/vext/ref/fb/valueatx)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CollisionData](/vext/ref/fb/collisiondata) type.

