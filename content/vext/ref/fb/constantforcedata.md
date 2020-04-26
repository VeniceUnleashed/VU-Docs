---
title: ConstantForceData
---


## Summary
### Constructors
| |
| ----------- |
| **[ConstantForceData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "condition" >}} | [ForceCondition](/vext/ref/fb/forcecondition) |
| {{< prop "typeOfForce" >}} | [ForceType](/vext/ref/fb/forcetype) |
| {{< prop "space" >}} | [SpaceType](/vext/ref/fb/spacetype) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ConstantForceData](/vext/ref/fb/constantforcedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ConstantForceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ConstantForceData {#constructor-0}
> **ConstantForceData**()

Creates a new [ConstantForceData](/vext/ref/fb/constantforcedata) frostbite structure.

## Properties
### {{% prop-heading "value" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "condition" %}}
> **[ForceCondition](/vext/ref/fb/forcecondition)**

### {{% prop-heading "typeOfForce" %}}
> **[ForceType](/vext/ref/fb/forcetype)**

### {{% prop-heading "space" %}}
> **[SpaceType](/vext/ref/fb/spacetype)**

## Methods
### Clone
> **Clone**(): [ConstantForceData](/vext/ref/fb/constantforcedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ConstantForceData](/vext/ref/fb/constantforcedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ConstantForceData](/vext/ref/fb/constantforcedata) type.

