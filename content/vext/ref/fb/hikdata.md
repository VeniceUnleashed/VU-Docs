---
title: HIKData
---


## Summary
### Constructors
| |
| ----------- |
| **[HIKData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "reachT" >}} | float |
| {{< prop "reachR" >}} | float |
| {{< prop "pull" >}} | float |
| {{< prop "resist" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [HIKData](/vext/ref/fb/hikdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "HIKData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### HIKData {#constructor-0}
> **HIKData**()

Creates a new [HIKData](/vext/ref/fb/hikdata) frostbite structure.

## Properties
### {{% prop-heading "reachT" %}}
> **float**

### {{% prop-heading "reachR" %}}
> **float**

### {{% prop-heading "pull" %}}
> **float**

### {{% prop-heading "resist" %}}
> **float**

## Methods
### Clone
> **Clone**(): [HIKData](/vext/ref/fb/hikdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[HIKData](/vext/ref/fb/hikdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [HIKData](/vext/ref/fb/hikdata) type.

