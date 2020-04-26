---
title: UICrosshairDataBinding
---

Inherits from [UIDataBinding](/vext/ref/fb/uidatabinding)

## Summary

### Constructors

|  |
| --- |
| **[UICrosshairDataBinding](#constructor-0)**() |
| **[UICrosshairDataBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UICrosshairDataBinding](#constructor-2)**(other: [UIDataBinding](/vext/ref/fb/uidatabinding)) |
| **[UICrosshairDataBinding](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dispersion" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "zoomed" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "visibility" >}} | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo) |
| {{< prop "dispersionBaseOffset" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UICrosshairDataBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UICrosshairDataBinding {#constructor-0}

> **UICrosshairDataBinding**()

Creates a new [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding) frostbite instance.

### UICrosshairDataBinding {#constructor-1}

> **UICrosshairDataBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UICrosshairDataBinding {#constructor-2}

> **UICrosshairDataBinding**(other: [UIDataBinding](/vext/ref/fb/uidatabinding))

Casts an instance of type [UIDataBinding](/vext/ref/fb/uidatabinding) to [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIDataBinding](/vext/ref/fb/uidatabinding) | The instance to cast to [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding). |

### UICrosshairDataBinding {#constructor-3}

> **UICrosshairDataBinding**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding). |

## Properties

### {{% prop-heading "dispersion" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "zoomed" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "visibility" %}}

> **[UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo)**

### {{% prop-heading "dispersionBaseOffset" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UICrosshairDataBinding](/vext/ref/fb/uicrosshairdatabinding) type.

