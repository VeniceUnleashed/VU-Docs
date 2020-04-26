---
title: AutoAimData
---


## Summary
### Constructors
| |
| ----------- |
| **[AutoAimData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "autoAimOuterBoxOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "autoAimOuterBoxExtends" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "autoAimInnerBoxOffset" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "autoAimInnerBoxExtends" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "poseType" >}} | [CharacterPoseType](/vext/ref/fb/characterposetype) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [AutoAimData](/vext/ref/fb/autoaimdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AutoAimData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AutoAimData {#constructor-0}
> **AutoAimData**()

Creates a new [AutoAimData](/vext/ref/fb/autoaimdata) frostbite structure.

## Properties
### {{% prop-heading "autoAimOuterBoxOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "autoAimOuterBoxExtends" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "autoAimInnerBoxOffset" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "autoAimInnerBoxExtends" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "poseType" %}}
> **[CharacterPoseType](/vext/ref/fb/characterposetype)**

## Methods
### Clone
> **Clone**(): [AutoAimData](/vext/ref/fb/autoaimdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[AutoAimData](/vext/ref/fb/autoaimdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AutoAimData](/vext/ref/fb/autoaimdata) type.

