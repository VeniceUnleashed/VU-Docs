---
title: RigidBodyConeConstraintData
---

Inherits from 
[RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)

## Summary
### Constructors
| |
| ----------- |
| **[RigidBodyConeConstraintData](#constructor-0)**() |
| **[RigidBodyConeConstraintData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RigidBodyConeConstraintData](#constructor-2)**(other: [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)) |
| **[RigidBodyConeConstraintData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RigidBodyConeConstraintData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RigidBodyConeConstraintData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minAngle" >}} | float |
| {{< prop "angularFriction" >}} | float |
| {{< prop "maxAngle" >}} | float |
| {{< prop "hasLimits" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RigidBodyConeConstraintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RigidBodyConeConstraintData {#constructor-0}
> **RigidBodyConeConstraintData**()

Creates a new [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata) frostbite instance.

### RigidBodyConeConstraintData {#constructor-1}
> **RigidBodyConeConstraintData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RigidBodyConeConstraintData {#constructor-2}
> **RigidBodyConeConstraintData**(other: [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata))

Casts an instance of type [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) | The instance to cast to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). |

### RigidBodyConeConstraintData {#constructor-3}
> **RigidBodyConeConstraintData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). |

### RigidBodyConeConstraintData {#constructor-4}
> **RigidBodyConeConstraintData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). |

### RigidBodyConeConstraintData {#constructor-5}
> **RigidBodyConeConstraintData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata). |

## Properties
### {{% prop-heading "minAngle" %}}
> **float**

### {{% prop-heading "angularFriction" %}}
> **float**

### {{% prop-heading "maxAngle" %}}
> **float**

### {{% prop-heading "hasLimits" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RigidBodyConeConstraintData](/vext/ref/fb/rigidbodyconeconstraintdata) type.

