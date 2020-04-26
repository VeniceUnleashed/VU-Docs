---
title: UITextDataBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UITextDataBinding](#constructor-0)**() |
| **[UITextDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UITextDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UITextDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "staticText" >}} | string |
| {{< prop "textData" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "refresh" >}} | bool |
| {{< prop "overrideDirectAccess" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UITextDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UITextDataBinding {#constructor-0}

> **UITextDataBinding**()

Creates a new [UITextDataBinding](/vext/ref/fb/uitextdatabinding) frostbite instance.

### UITextDataBinding {#constructor-1}

> **UITextDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UITextDataBinding](/vext/ref/fb/uitextdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UITextDataBinding {#constructor-2}

> **UITextDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UITextDataBinding](/vext/ref/fb/uitextdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UITextDataBinding](/vext/ref/fb/uitextdatabinding). |

### UITextDataBinding {#constructor-3}

> **UITextDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UITextDataBinding](/vext/ref/fb/uitextdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UITextDataBinding](/vext/ref/fb/uitextdatabinding). |

## Properties

### {{% prop-heading "staticText" %}}

> **string**

### {{% prop-heading "textData" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "visibility" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "refresh" %}}

> **bool**

### {{% prop-heading "overrideDirectAccess" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UITextDataBinding](/vext/ref/fb/uitextdatabinding) type.

