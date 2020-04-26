---
title: UIWidgetPathBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UIWidgetPathBinding](#constructor-0)**() |
| **[UIWidgetPathBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIWidgetPathBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIWidgetPathBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "widgetPathQuery" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIWidgetPathBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIWidgetPathBinding {#constructor-0}

> **UIWidgetPathBinding**()

Creates a new [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding) frostbite instance.

### UIWidgetPathBinding {#constructor-1}

> **UIWidgetPathBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIWidgetPathBinding {#constructor-2}

> **UIWidgetPathBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding). |

### UIWidgetPathBinding {#constructor-3}

> **UIWidgetPathBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding). |

## Properties

### {{% prop-heading "widgetPathQuery" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "visibility" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIWidgetPathBinding](/vext/ref/fb/uiwidgetpathbinding) type.

