---
title: UINumberDataBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UINumberDataBinding](#constructor-0)**() |
| **[UINumberDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UINumberDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UINumberDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "numValue" >}} | int |
| {{< prop "refresh" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UINumberDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UINumberDataBinding {#constructor-0}

> **UINumberDataBinding**()

Creates a new [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding) frostbite instance.

### UINumberDataBinding {#constructor-1}

> **UINumberDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UINumberDataBinding {#constructor-2}

> **UINumberDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding). |

### UINumberDataBinding {#constructor-3}

> **UINumberDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding). |

## Properties

### {{% prop-heading "value" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "numValue" %}}

> **int**

### {{% prop-heading "refresh" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UINumberDataBinding](/vext/ref/fb/uinumberdatabinding) type.

