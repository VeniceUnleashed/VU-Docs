---
title: PerformanceFpsHistogram
---


## Summary
### Constructors
| |
| ----------- |
| **[PerformanceFpsHistogram](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "below5" >}} | float |
| {{< prop "below10" >}} | float |
| {{< prop "below15" >}} | float |
| {{< prop "below20" >}} | float |
| {{< prop "below25" >}} | float |
| {{< prop "below30" >}} | float |
| {{< prop "below60" >}} | float |
| {{< prop "above60" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PerformanceFpsHistogram" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PerformanceFpsHistogram {#constructor-0}
> **PerformanceFpsHistogram**()

Creates a new [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) frostbite structure.

## Properties
### {{% prop-heading "below5" %}}
> **float**

### {{% prop-heading "below10" %}}
> **float**

### {{% prop-heading "below15" %}}
> **float**

### {{% prop-heading "below20" %}}
> **float**

### {{% prop-heading "below25" %}}
> **float**

### {{% prop-heading "below30" %}}
> **float**

### {{% prop-heading "below60" %}}
> **float**

### {{% prop-heading "above60" %}}
> **float**

## Methods
### Clone
> **Clone**(): [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PerformanceFpsHistogram](/vext/ref/fb/performancefpshistogram) type.

