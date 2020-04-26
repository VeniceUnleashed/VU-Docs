---
title: UINestedListDataBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UINestedListDataBinding](#constructor-0)**() |
| **[UINestedListDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UINestedListDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UINestedListDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "listIndex" >}} | int |
| {{< prop "nestedLists" >}} | [NestedList](/vext/ref/fb/nestedlist)[] |
| {{< prop "rowSpacing" >}} | int |
| {{< prop "defaultHighlightedRow" >}} | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) |
| {{< prop "navigationType" >}} | [UIListNavigationType](/vext/ref/fb/uilistnavigationtype) |
| {{< prop "rowType" >}} | [UIListRowType](/vext/ref/fb/uilistrowtype) |
| {{< prop "emptyRowType" >}} | [UIListEmptyRowType](/vext/ref/fb/uilistemptyrowtype) |
| {{< prop "selectorWidth" >}} | int |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "sendIndexWithEvent" >}} | bool |
| {{< prop "useScrollBar" >}} | bool |
| {{< prop "dataIncludesButtonLayout" >}} | bool |
| {{< prop "clearListAtNavigationEvent" >}} | bool |
| {{< prop "use3DSelection" >}} | bool |
| {{< prop "invertVisible" >}} | bool |
| {{< prop "visible" >}} | bool |
| {{< prop "screenRotationEnabled" >}} | bool |
| {{< prop "highLightOnUpdate" >}} | bool |
| {{< prop "keepScrollOffset" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UINestedListDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UINestedListDataBinding {#constructor-0}

> **UINestedListDataBinding**()

Creates a new [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding) frostbite instance.

### UINestedListDataBinding {#constructor-1}

> **UINestedListDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UINestedListDataBinding {#constructor-2}

> **UINestedListDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding). |

### UINestedListDataBinding {#constructor-3}

> **UINestedListDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding). |

## Properties

### {{% prop-heading "listIndex" %}}

> **int**

### {{% prop-heading "nestedLists" %}}

> **[NestedList](/vext/ref/fb/nestedlist)**[]

### {{% prop-heading "rowSpacing" %}}

> **int**

### {{% prop-heading "defaultHighlightedRow" %}}

> **[DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)**

### {{% prop-heading "navigationType" %}}

> **[UIListNavigationType](/vext/ref/fb/uilistnavigationtype)**

### {{% prop-heading "rowType" %}}

> **[UIListRowType](/vext/ref/fb/uilistrowtype)**

### {{% prop-heading "emptyRowType" %}}

> **[UIListEmptyRowType](/vext/ref/fb/uilistemptyrowtype)**

### {{% prop-heading "selectorWidth" %}}

> **int**

### {{% prop-heading "visibility" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "sendIndexWithEvent" %}}

> **bool**

### {{% prop-heading "useScrollBar" %}}

> **bool**

### {{% prop-heading "dataIncludesButtonLayout" %}}

> **bool**

### {{% prop-heading "clearListAtNavigationEvent" %}}

> **bool**

### {{% prop-heading "use3DSelection" %}}

> **bool**

### {{% prop-heading "invertVisible" %}}

> **bool**

### {{% prop-heading "visible" %}}

> **bool**

### {{% prop-heading "screenRotationEnabled" %}}

> **bool**

### {{% prop-heading "highLightOnUpdate" %}}

> **bool**

### {{% prop-heading "keepScrollOffset" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UINestedListDataBinding](/vext/ref/fb/uinestedlistdatabinding) type.

