---
title: UIGeoLatitude
---


## Summary
### Constructors
| |
| ----------- |
| **[UIGeoLatitude](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "degrees" >}} | int |
| {{< prop "minuites" >}} | int |
| {{< prop "seconds" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIGeoLatitude](/vext/ref/fb/uigeolatitude) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIGeoLatitude" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIGeoLatitude {#constructor-0}
> **UIGeoLatitude**()

Creates a new [UIGeoLatitude](/vext/ref/fb/uigeolatitude) frostbite structure.

## Properties
### {{% prop-heading "degrees" %}}
> **int**

### {{% prop-heading "minuites" %}}
> **int**

### {{% prop-heading "seconds" %}}
> **int**

## Methods
### Clone
> **Clone**(): [UIGeoLatitude](/vext/ref/fb/uigeolatitude)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIGeoLatitude](/vext/ref/fb/uigeolatitude)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIGeoLatitude](/vext/ref/fb/uigeolatitude) type.

