---
title: MotionDampingData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[MotionDampingData](#constructor-0)**() |
| **[MotionDampingData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MotionDampingData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "linearModifier" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "pitch" >}} | float |
| {{< prop "yaw" >}} | float |
| {{< prop "roll" >}} | float |
| {{< prop "linear" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MotionDampingData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MotionDampingData {#constructor-0}
> **MotionDampingData**()

Creates a new [MotionDampingData](/vext/ref/fb/motiondampingdata) frostbite instance.

### MotionDampingData {#constructor-1}
> **MotionDampingData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MotionDampingData](/vext/ref/fb/motiondampingdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MotionDampingData {#constructor-2}
> **MotionDampingData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MotionDampingData](/vext/ref/fb/motiondampingdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MotionDampingData](/vext/ref/fb/motiondampingdata). |

## Properties
### {{% prop-heading "linearModifier" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "pitch" %}}
> **float**

### {{% prop-heading "yaw" %}}
> **float**

### {{% prop-heading "roll" %}}
> **float**

### {{% prop-heading "linear" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MotionDampingData](/vext/ref/fb/motiondampingdata) type.

