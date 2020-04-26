---
title: DefaultSelectionItem
---


## Summary
### Constructors
| |
| ----------- |
| **[DefaultSelectionItem](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "defaultSelectionQuery" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "defaultSelectionIndex" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DefaultSelectionItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DefaultSelectionItem {#constructor-0}
> **DefaultSelectionItem**()

Creates a new [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) frostbite structure.

## Properties
### {{% prop-heading "defaultSelectionQuery" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "defaultSelectionIndex" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) type.

