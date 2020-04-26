---
title: LookConstraintsData
---


## Summary
### Constructors
| |
| ----------- |
| **[LookConstraintsData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minLookYaw" >}} | float |
| {{< prop "maxLookYaw" >}} | float |
| {{< prop "minLookPitch" >}} | float |
| {{< prop "maxLookPitch" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [LookConstraintsData](/vext/ref/fb/lookconstraintsdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LookConstraintsData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LookConstraintsData {#constructor-0}
> **LookConstraintsData**()

Creates a new [LookConstraintsData](/vext/ref/fb/lookconstraintsdata) frostbite structure.

## Properties
### {{% prop-heading "minLookYaw" %}}
> **float**

### {{% prop-heading "maxLookYaw" %}}
> **float**

### {{% prop-heading "minLookPitch" %}}
> **float**

### {{% prop-heading "maxLookPitch" %}}
> **float**

## Methods
### Clone
> **Clone**(): [LookConstraintsData](/vext/ref/fb/lookconstraintsdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[LookConstraintsData](/vext/ref/fb/lookconstraintsdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LookConstraintsData](/vext/ref/fb/lookconstraintsdata) type.

