---
title: RigidBodyHingeConstraintData
---

Inherits from 
[RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)

## Summary
### Constructors
| |
| ----------- |
| **[RigidBodyHingeConstraintData](#constructor-0)**() |
| **[RigidBodyHingeConstraintData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RigidBodyHingeConstraintData](#constructor-2)**(other: [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata)) |
| **[RigidBodyHingeConstraintData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[RigidBodyHingeConstraintData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[RigidBodyHingeConstraintData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

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
| {{< static "RigidBodyHingeConstraintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RigidBodyHingeConstraintData {#constructor-0}
> **RigidBodyHingeConstraintData**()

Creates a new [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata) frostbite instance.

### RigidBodyHingeConstraintData {#constructor-1}
> **RigidBodyHingeConstraintData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RigidBodyHingeConstraintData {#constructor-2}
> **RigidBodyHingeConstraintData**(other: [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata))

Casts an instance of type [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [RigidBodyConstraintData](/vext/ref/fb/rigidbodyconstraintdata) | The instance to cast to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). |

### RigidBodyHingeConstraintData {#constructor-3}
> **RigidBodyHingeConstraintData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). |

### RigidBodyHingeConstraintData {#constructor-4}
> **RigidBodyHingeConstraintData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). |

### RigidBodyHingeConstraintData {#constructor-5}
> **RigidBodyHingeConstraintData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata). |

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

The type information for the [RigidBodyHingeConstraintData](/vext/ref/fb/rigidbodyhingeconstraintdata) type.

