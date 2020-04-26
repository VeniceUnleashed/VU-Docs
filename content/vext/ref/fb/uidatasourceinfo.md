---
title: UIDataSourceInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[UIDataSourceInfo](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dataName" >}} | string |
| {{< prop "dataCategory" >}} | [UIComponentData](/vext/ref/fb/uicomponentdata) \| nil |
| {{< prop "dataKey" >}} | int |
| {{< prop "useDirectAccess" >}} | bool |
| {{< prop "updateOnInitialize" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIDataSourceInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIDataSourceInfo {#constructor-0}
> **UIDataSourceInfo**()

Creates a new [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) frostbite structure.

## Properties
### {{% prop-heading "dataName" %}}
> **string**

### {{% prop-heading "dataCategory" %}}
> **[UIComponentData](/vext/ref/fb/uicomponentdata)** | **nil**

### {{% prop-heading "dataKey" %}}
> **int**

### {{% prop-heading "useDirectAccess" %}}
> **bool**

### {{% prop-heading "updateOnInitialize" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) type.

