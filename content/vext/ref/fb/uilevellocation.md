---
title: UILevelLocation
---


## Summary
### Constructors
| |
| ----------- |
| **[UILevelLocation](#constructor-0)**() |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UILevelLocation](/vext/ref/fb/uilevellocation) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UILevelLocation" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UILevelLocation {#constructor-0}
> **UILevelLocation**()

Creates a new [UILevelLocation](/vext/ref/fb/uilevellocation) frostbite structure.

## Methods
### Clone
> **Clone**(): [UILevelLocation](/vext/ref/fb/uilevellocation)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UILevelLocation](/vext/ref/fb/uilevellocation)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UILevelLocation](/vext/ref/fb/uilevellocation) type.

