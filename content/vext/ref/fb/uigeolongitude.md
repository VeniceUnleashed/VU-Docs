---
title: UIGeoLongitude
---


## Summary
### Constructors
| |
| ----------- |
| **[UIGeoLongitude](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "degrees" >}} | int |
| {{< prop "minuites" >}} | int |
| {{< prop "seconds" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIGeoLongitude](/vext/ref/fb/uigeolongitude) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIGeoLongitude" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIGeoLongitude {#constructor-0}
> **UIGeoLongitude**()

Creates a new [UIGeoLongitude](/vext/ref/fb/uigeolongitude) frostbite structure.

## Properties
### {{% prop-heading "degrees" %}}
> **int**

### {{% prop-heading "minuites" %}}
> **int**

### {{% prop-heading "seconds" %}}
> **int**

## Methods
### Clone
> **Clone**(): [UIGeoLongitude](/vext/ref/fb/uigeolongitude)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIGeoLongitude](/vext/ref/fb/uigeolongitude)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIGeoLongitude](/vext/ref/fb/uigeolongitude) type.

