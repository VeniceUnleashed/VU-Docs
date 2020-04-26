---
title: UIPageHeaderBinding
---

Inherits from 
[UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary
### Constructors
| |
| ----------- |
| **[UIPageHeaderBinding](#constructor-0)**() |
| **[UIPageHeaderBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIPageHeaderBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIPageHeaderBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "header" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "subHeader" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "icon" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "staticHeader" >}} | string |
| {{< prop "staticSubHeader" >}} | string |
| {{< prop "staticIcon" >}} | string |
| {{< prop "levelSpecificHeaders" >}} | [UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIPageHeaderBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIPageHeaderBinding {#constructor-0}
> **UIPageHeaderBinding**()

Creates a new [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding) frostbite instance.

### UIPageHeaderBinding {#constructor-1}
> **UIPageHeaderBinding**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIPageHeaderBinding {#constructor-2}
> **UIPageHeaderBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding). |

### UIPageHeaderBinding {#constructor-3}
> **UIPageHeaderBinding**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding). |

## Properties
### {{% prop-heading "header" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "subHeader" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "icon" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "staticHeader" %}}
> **string**

### {{% prop-heading "staticSubHeader" %}}
> **string**

### {{% prop-heading "staticIcon" %}}
> **string**

### {{% prop-heading "levelSpecificHeaders" %}}
> **[UILevelSpecificPageHeader](/vext/ref/fb/uilevelspecificpageheader)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIPageHeaderBinding](/vext/ref/fb/uipageheaderbinding) type.

