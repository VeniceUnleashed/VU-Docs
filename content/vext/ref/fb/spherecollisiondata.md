---
title: SphereCollisionData
---


## Summary
### Constructors
| |
| ----------- |
| **[SphereCollisionData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "extraRadius" >}} | float |
| {{< prop "counterNormalBrakeForceMod" >}} | float |
| {{< prop "enabled" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SphereCollisionData](/vext/ref/fb/spherecollisiondata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SphereCollisionData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SphereCollisionData {#constructor-0}
> **SphereCollisionData**()

Creates a new [SphereCollisionData](/vext/ref/fb/spherecollisiondata) frostbite structure.

## Properties
### {{% prop-heading "extraRadius" %}}
> **float**

### {{% prop-heading "counterNormalBrakeForceMod" %}}
> **float**

### {{% prop-heading "enabled" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [SphereCollisionData](/vext/ref/fb/spherecollisiondata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SphereCollisionData](/vext/ref/fb/spherecollisiondata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SphereCollisionData](/vext/ref/fb/spherecollisiondata) type.

