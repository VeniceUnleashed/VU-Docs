---
title: MissileUnguidedData
---


## Summary
### Constructors
| |
| ----------- |
| **[MissileUnguidedData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "staticPosition" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "targetPositionOffset" >}} | [Vec2](/vext/ref/shared/class/vec2) |
| {{< prop "useTargetPosition" >}} | bool |
| {{< prop "useStaticPosition" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MissileUnguidedData](/vext/ref/fb/missileunguideddata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MissileUnguidedData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MissileUnguidedData {#constructor-0}
> **MissileUnguidedData**()

Creates a new [MissileUnguidedData](/vext/ref/fb/missileunguideddata) frostbite structure.

## Properties
### {{% prop-heading "staticPosition" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "targetPositionOffset" %}}
> **[Vec2](/vext/ref/shared/class/vec2)**

### {{% prop-heading "useTargetPosition" %}}
> **bool**

### {{% prop-heading "useStaticPosition" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [MissileUnguidedData](/vext/ref/fb/missileunguideddata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MissileUnguidedData](/vext/ref/fb/missileunguideddata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MissileUnguidedData](/vext/ref/fb/missileunguideddata) type.

