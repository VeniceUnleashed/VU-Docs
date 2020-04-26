---
title: UIButtonDataBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UIButtonDataBinding](#constructor-0)**() |
| **[UIButtonDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIButtonDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UIButtonDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "buttonsDatasource" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "defaultButtonSet" >}} | [UIButtonSet](/vext/ref/fb/uibuttonset) |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "invertVisible" >}} | bool |
| {{< prop "visible" >}} | bool |
| {{< prop "inputOnRelease" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIButtonDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIButtonDataBinding {#constructor-0}

> **UIButtonDataBinding**()

Creates a new [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding) frostbite instance.

### UIButtonDataBinding {#constructor-1}

> **UIButtonDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIButtonDataBinding {#constructor-2}

> **UIButtonDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding). |

### UIButtonDataBinding {#constructor-3}

> **UIButtonDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding). |

## Properties

### {{% prop-heading "buttonsDatasource" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "defaultButtonSet" %}}

> **[UIButtonSet](/vext/ref/fb/uibuttonset)**

### {{% prop-heading "visibility" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "invertVisible" %}}

> **bool**

### {{% prop-heading "visible" %}}

> **bool**

### {{% prop-heading "inputOnRelease" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIButtonDataBinding](/vext/ref/fb/uibuttondatabinding) type.

