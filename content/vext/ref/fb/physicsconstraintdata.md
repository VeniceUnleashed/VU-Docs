---
title: PhysicsConstraintData
---

Inherits from 
[GameObjectData](/vext/ref/fb/gameobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[PhysicsConstraintData](#constructor-0)**() |
| **[PhysicsConstraintData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PhysicsConstraintData](#constructor-2)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[PhysicsConstraintData](#constructor-3)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[PhysicsConstraintData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "constrainedObject" >}} | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) \| nil |
| {{< prop "breakThreshold" >}} | float |
| {{< prop "isBreakable" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PhysicsConstraintData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PhysicsConstraintData {#constructor-0}
> **PhysicsConstraintData**()

Creates a new [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata) frostbite instance.

### PhysicsConstraintData {#constructor-1}
> **PhysicsConstraintData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PhysicsConstraintData {#constructor-2}
> **PhysicsConstraintData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata). |

### PhysicsConstraintData {#constructor-3}
> **PhysicsConstraintData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata). |

### PhysicsConstraintData {#constructor-4}
> **PhysicsConstraintData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata). |

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "constrainedObject" %}}
> **[ReferenceObjectData](/vext/ref/fb/referenceobjectdata)** | **nil**

### {{% prop-heading "breakThreshold" %}}
> **float**

### {{% prop-heading "isBreakable" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PhysicsConstraintData](/vext/ref/fb/physicsconstraintdata) type.

