---
title: UIListDataBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UIListDataBinding](#constructor-0)**() |
| **[UIListDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIListDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIListDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "listIndex" >}} | int |
| {{< prop "listQuery" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "staticItems" >}} | [StaticListItem](/vext/ref/fb/staticlistitem)[] |
| {{< prop "emptyRowType" >}} | [UIListEmptyRowType](/vext/ref/fb/uilistemptyrowtype) |
| {{< prop "defaultHighlightedRow" >}} | [DefaultSelectionItem](/vext/ref/fb/defaultselectionitem) |
| {{< prop "rowType" >}} | [UIListRowType](/vext/ref/fb/uilistrowtype) |
| {{< prop "navigationType" >}} | [UIListNavigationType](/vext/ref/fb/uilistnavigationtype) |
| {{< prop "navigationTypeSource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "rowSpacing" >}} | int |
| {{< prop "unFocusMode" >}} | [UIListUnFocusMode](/vext/ref/fb/uilistunfocusmode) |
| {{< prop "disabledRows" >}} | string |
| {{< prop "clearListAtNavigationEvent" >}} | bool |
| {{< prop "sendIndexWithEvent" >}} | bool |
| {{< prop "screenRotationEnabled" >}} | bool |
| {{< prop "use3DSelection" >}} | bool |
| {{< prop "fireHighlightOnMouseOut" >}} | bool |
| {{< prop "dataIncludesButtonLayout" >}} | bool |
| {{< prop "visible" >}} | bool |
| {{< prop "spinnerEnabled" >}} | bool |
| {{< prop "useScrollBar" >}} | bool |
| {{< prop "highLightOnUpdate" >}} | bool |
| {{< prop "keepScrollOffset" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIListDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIListDataBinding {#constructor-0}

> **UIListDataBinding**()

Creates a new [UIListDataBinding](/vext/ref/fb/uilistdatabinding) frostbite instance.

### UIListDataBinding {#constructor-1}

> **UIListDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIListDataBinding](/vext/ref/fb/uilistdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIListDataBinding {#constructor-2}

> **UIListDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIListDataBinding](/vext/ref/fb/uilistdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIListDataBinding](/vext/ref/fb/uilistdatabinding). |

### UIListDataBinding {#constructor-3}

> **UIListDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIListDataBinding](/vext/ref/fb/uilistdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIListDataBinding](/vext/ref/fb/uilistdatabinding). |

## Properties

### {{% prop-heading "listIndex" %}}

> **int**

### {{% prop-heading "listQuery" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "staticItems" %}}

> **[StaticListItem](/vext/ref/fb/staticlistitem)**[]

### {{% prop-heading "emptyRowType" %}}

> **[UIListEmptyRowType](/vext/ref/fb/uilistemptyrowtype)**

### {{% prop-heading "defaultHighlightedRow" %}}

> **[DefaultSelectionItem](/vext/ref/fb/defaultselectionitem)**

### {{% prop-heading "rowType" %}}

> **[UIListRowType](/vext/ref/fb/uilistrowtype)**

### {{% prop-heading "navigationType" %}}

> **[UIListNavigationType](/vext/ref/fb/uilistnavigationtype)**

### {{% prop-heading "navigationTypeSource" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "rowSpacing" %}}

> **int**

### {{% prop-heading "unFocusMode" %}}

> **[UIListUnFocusMode](/vext/ref/fb/uilistunfocusmode)**

### {{% prop-heading "disabledRows" %}}

> **string**

### {{% prop-heading "clearListAtNavigationEvent" %}}

> **bool**

### {{% prop-heading "sendIndexWithEvent" %}}

> **bool**

### {{% prop-heading "screenRotationEnabled" %}}

> **bool**

### {{% prop-heading "use3DSelection" %}}

> **bool**

### {{% prop-heading "fireHighlightOnMouseOut" %}}

> **bool**

### {{% prop-heading "dataIncludesButtonLayout" %}}

> **bool**

### {{% prop-heading "visible" %}}

> **bool**

### {{% prop-heading "spinnerEnabled" %}}

> **bool**

### {{% prop-heading "useScrollBar" %}}

> **bool**

### {{% prop-heading "highLightOnUpdate" %}}

> **bool**

### {{% prop-heading "keepScrollOffset" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIListDataBinding](/vext/ref/fb/uilistdatabinding) type.

