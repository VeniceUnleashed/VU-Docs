---
title: RigidBodyConstraintData
---

Inherits from 
[GameObjectData](/vext/ref/fb/gameobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[RigidBodyConstraintData](#constructor-0)**() |
| **[RigidBodyConstraintData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RigidBodyConstraintData](#constructor-2)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RigidBodyConstraintData](#constructor-3)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RigidBodyConstraintData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "parentBody" >}} | [DataContainer](/vext/ref/shared/class/datacontainer) \| nil |
| {{< prop "breakThreshold" >}} | float |
| {{< prop "isBreakable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RigidBodyConstraintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RigidBodyConstraintData {#constructor-0}
> **RigidBodyConstraintData**()

Creates a new [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) frostbite instance.

### RigidBodyConstraintData {#constructor-1}
> **RigidBodyConstraintData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RigidBodyConstraintData {#constructor-2}
> **RigidBodyConstraintData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata). |

### RigidBodyConstraintData {#constructor-3}
> **RigidBodyConstraintData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata). |

### RigidBodyConstraintData {#constructor-4}
> **RigidBodyConstraintData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata). |

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "parentBody" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)** | **nil**

### {{% prop-heading "breakThreshold" %}}
> **float**

### {{% prop-heading "isBreakable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) type.

