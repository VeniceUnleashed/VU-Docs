---
title: DebugConstantData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[DebugConstantData](#constructor-0)**() |
| **[DebugConstantData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DebugConstantData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[DebugConstantData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "botDebugDistance" >}} | float |
| {{< prop "inViewModeFOV" >}} | float |
| {{< prop "graphDataBuffer" >}} | int |
| {{< prop "minDecisionTime" >}} | float |
| {{< prop "inaccuracyEnabled" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebugConstantData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebugConstantData {#constructor-0}

> **DebugConstantData**()

Creates a new [DebugConstantData](/vext/ref/fb/debugconstantdata) frostbite instance.

### DebugConstantData {#constructor-1}

> **DebugConstantData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebugConstantData](/vext/ref/fb/debugconstantdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DebugConstantData {#constructor-2}

> **DebugConstantData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [DebugConstantData](/vext/ref/fb/debugconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [DebugConstantData](/vext/ref/fb/debugconstantdata). |

### DebugConstantData {#constructor-3}

> **DebugConstantData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DebugConstantData](/vext/ref/fb/debugconstantdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DebugConstantData](/vext/ref/fb/debugconstantdata). |

## Properties

### {{% prop-heading "botDebugDistance" %}}

> **float**

### {{% prop-heading "inViewModeFOV" %}}

> **float**

### {{% prop-heading "graphDataBuffer" %}}

> **int**

### {{% prop-heading "minDecisionTime" %}}

> **float**

### {{% prop-heading "inaccuracyEnabled" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebugConstantData](/vext/ref/fb/debugconstantdata) type.

