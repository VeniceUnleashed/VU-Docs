---
title: NestedList
---


## Summary
### Constructors
| |
| ----------- |
| **[NestedList](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "label" >}} | string |
| {{< prop "index" >}} | string |
| {{< prop "listDataSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "dynamicShowList" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "staticItems" >}} | string[] |
| {{< prop "defaultHighlighted" >}} | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) |
| {{< prop "rowType" >}} | [UIListRowType](/vext/ref/fb/uilistrowtype) |
| {{< prop "useAsNormalListRows" >}} | bool |
| {{< prop "hiddenOnPC" >}} | bool |
| {{< prop "hiddenOnXenon" >}} | bool |
| {{< prop "highLightOnUpdate" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [NestedList](/vext/ref/fb/nestedlist) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "NestedList" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### NestedList {#constructor-0}
> **NestedList**()

Creates a new [NestedList](/vext/ref/fb/nestedlist) frostbite structure.

## Properties
### {{% prop-heading "label" %}}
> **string**

### {{% prop-heading "index" %}}
> **string**

### {{% prop-heading "listDataSource" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "dynamicShowList" %}}
> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "staticItems" %}}
> **string**[]

### {{% prop-heading "defaultHighlighted" %}}
> **[DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)**

### {{% prop-heading "rowType" %}}
> **[UIListRowType](/vext/ref/fb/uilistrowtype)**

### {{% prop-heading "useAsNormalListRows" %}}
> **bool**

### {{% prop-heading "hiddenOnPC" %}}
> **bool**

### {{% prop-heading "hiddenOnXenon" %}}
> **bool**

### {{% prop-heading "highLightOnUpdate" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [NestedList](/vext/ref/fb/nestedlist)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[NestedList](/vext/ref/fb/nestedlist)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [NestedList](/vext/ref/fb/nestedlist) type.

