---
title: SensingSphere
---


## Summary
### Constructors
| |
| ----------- |
| **[SensingSphere](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "position" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "radiusSqr" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SensingSphere](/vext/ref/fb/sensingsphere) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SensingSphere" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SensingSphere {#constructor-0}
> **SensingSphere**()

Creates a new [SensingSphere](/vext/ref/fb/sensingsphere) frostbite structure.

## Properties
### {{% prop-heading "position" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "radiusSqr" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SensingSphere](/vext/ref/fb/sensingsphere)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SensingSphere](/vext/ref/fb/sensingsphere)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SensingSphere](/vext/ref/fb/sensingsphere) type.

