---
title: UIDataBinding
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UIDataBinding](#constructor-0)**() |
| **[UIDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIDataBinding](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIDataBinding {#constructor-0}

> **UIDataBinding**()

Creates a new [UIDataBinding](/vext/ref/fb/uidatabinding) frostbite instance.

### UIDataBinding {#constructor-1}

> **UIDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIDataBinding](/vext/ref/fb/uidatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIDataBinding {#constructor-2}

> **UIDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIDataBinding](/vext/ref/fb/uidatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIDataBinding](/vext/ref/fb/uidatabinding). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIDataBinding](/vext/ref/fb/uidatabinding) type.

