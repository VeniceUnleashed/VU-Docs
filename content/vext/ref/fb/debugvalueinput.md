---
title: DebugValueInput
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[DebugValueInput](#constructor-0)**() |
| **[DebugValueInput](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DebugValueInput](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[DebugValueInput](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "v" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "name" >}} | string |
| {{< prop "renderType" >}} | [DebugRenderType](/vext/ref/fb/debugrendertype) |
| {{< prop "min" >}} | float |
| {{< prop "max" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebugValueInput" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebugValueInput {#constructor-0}

> **DebugValueInput**()

Creates a new [DebugValueInput](/vext/ref/fb/debugvalueinput) frostbite instance.

### DebugValueInput {#constructor-1}

> **DebugValueInput**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebugValueInput](/vext/ref/fb/debugvalueinput) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DebugValueInput {#constructor-2}

> **DebugValueInput**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [DebugValueInput](/vext/ref/fb/debugvalueinput). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [DebugValueInput](/vext/ref/fb/debugvalueinput). |

### DebugValueInput {#constructor-3}

> **DebugValueInput**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DebugValueInput](/vext/ref/fb/debugvalueinput). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DebugValueInput](/vext/ref/fb/debugvalueinput). |

## Properties

### {{% prop-heading "v" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "renderType" %}}

> **[DebugRenderType](/vext/ref/fb/debugrendertype)**

### {{% prop-heading "min" %}}

> **float**

### {{% prop-heading "max" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebugValueInput](/vext/ref/fb/debugvalueinput) type.

