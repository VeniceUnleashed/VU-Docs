---
title: RotationBodyData
---

Inherits from 
[MovingBodyData](/vext/ref/fb/movingbodydata)

## Summary
### Constructors
| |
| ----------- |
| **[RotationBodyData](#constructor-0)**() |
| **[RotationBodyData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[RotationBodyData](#constructor-2)**(other: [MovingBodyData](/vext/ref/fb/movingbodydata)) |
| **[RotationBodyData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "angularMomentumMultiplier" >}} | float |
| {{< prop "angularMomentumThreshold" >}} | float |
| {{< prop "angularMomentumDamping" >}} | float |
| {{< prop "angularMomentumDampingAcc" >}} | float |
| {{< prop "angularMomentumDampingDeacc" >}} | float |
| {{< prop "angularConstraintMin" >}} | float |
| {{< prop "extendedConstraints" >}} | [ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata) \| nil |
| {{< prop "angularConstraintMax" >}} | float |
| {{< prop "rotationAxis" >}} | int |
| {{< prop "usePostSatisfyConstraints" >}} | bool |
| {{< prop "useAngularMomentumThreshold" >}} | bool |
| {{< prop "useAngularMomentumDamping" >}} | bool |
| {{< prop "useAngularConstraint" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "RotationBodyData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### RotationBodyData {#constructor-0}
> **RotationBodyData**()

Creates a new [RotationBodyData](/vext/ref/fb/rotationbodydata) frostbite instance.

### RotationBodyData {#constructor-1}
> **RotationBodyData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [RotationBodyData](/vext/ref/fb/rotationbodydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### RotationBodyData {#constructor-2}
> **RotationBodyData**(other: [MovingBodyData](/vext/ref/fb/movingbodydata))

Casts an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata) to [RotationBodyData](/vext/ref/fb/rotationbodydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MovingBodyData](/vext/ref/fb/movingbodydata) | The instance to cast to [RotationBodyData](/vext/ref/fb/rotationbodydata). |

### RotationBodyData {#constructor-3}
> **RotationBodyData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [RotationBodyData](/vext/ref/fb/rotationbodydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [RotationBodyData](/vext/ref/fb/rotationbodydata). |

## Properties
### {{% prop-heading "angularMomentumMultiplier" %}}
> **float**

### {{% prop-heading "angularMomentumThreshold" %}}
> **float**

### {{% prop-heading "angularMomentumDamping" %}}
> **float**

### {{% prop-heading "angularMomentumDampingAcc" %}}
> **float**

### {{% prop-heading "angularMomentumDampingDeacc" %}}
> **float**

### {{% prop-heading "angularConstraintMin" %}}
> **float**

### {{% prop-heading "extendedConstraints" %}}
> **[ExtendedConstraintsData](/vext/ref/fb/extendedconstraintsdata)** | **nil**

### {{% prop-heading "angularConstraintMax" %}}
> **float**

### {{% prop-heading "rotationAxis" %}}
> **int**

### {{% prop-heading "usePostSatisfyConstraints" %}}
> **bool**

### {{% prop-heading "useAngularMomentumThreshold" %}}
> **bool**

### {{% prop-heading "useAngularMomentumDamping" %}}
> **bool**

### {{% prop-heading "useAngularConstraint" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [RotationBodyData](/vext/ref/fb/rotationbodydata) type.

