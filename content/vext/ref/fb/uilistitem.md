---
title: UIListItem
---


## Summary
### Constructors
| |
| ----------- |
| **[UIListItem](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "label" >}} | string |
| {{< prop "isEnabled" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "isVisible" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "toggleItems" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "dataUpdate" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "defaultIsVisible" >}} | bool |
| {{< prop "defaultIsEnabled" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIListItem](/vext/ref/fb/uilistitem) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIListItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIListItem {#constructor-0}
> **UIListItem**()

Creates a new [UIListItem](/vext/ref/fb/uilistitem) frostbite structure.

## Properties
### {{% prop-heading "label" %}}
> **string**

### {{% prop-heading "isEnabled" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "isVisible" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "toggleItems" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "dataUpdate" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "defaultIsVisible" %}}
> **bool**

### {{% prop-heading "defaultIsEnabled" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [UIListItem](/vext/ref/fb/uilistitem)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIListItem](/vext/ref/fb/uilistitem)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIListItem](/vext/ref/fb/uilistitem) type.

