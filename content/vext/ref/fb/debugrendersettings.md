---
title: DebugRenderSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[DebugRenderSettings](#constructor-0)**() |
| **[DebugRenderSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DebugRenderSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "textQueueTimeVisible" >}} | float |
| {{< prop "ps3SpuFrameBufferSize" >}} | int |
| {{< prop "textViewDistance" >}} | float |
| {{< prop "textQueueMaxLineCount" >}} | int |
| {{< prop "dxMaxVertexCount" >}} | int |
| {{< prop "processJobCount" >}} | int |
| {{< prop "drawStatsEnable" >}} | bool |
| {{< prop "ps3SpuEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "textQueueLocationTop" >}} | bool |
| {{< prop "dxLine2dAntialiasingEnable" >}} | bool |
| {{< prop "dxLine3dAntialiasingEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DebugRenderSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DebugRenderSettings {#constructor-0}

> **DebugRenderSettings**()

Creates a new [DebugRenderSettings](/vext/ref/fb/debugrendersettings) frostbite instance.

### DebugRenderSettings {#constructor-1}

> **DebugRenderSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DebugRenderSettings](/vext/ref/fb/debugrendersettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DebugRenderSettings {#constructor-2}

> **DebugRenderSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DebugRenderSettings](/vext/ref/fb/debugrendersettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DebugRenderSettings](/vext/ref/fb/debugrendersettings). |

## Properties

### {{% prop-heading "textQueueTimeVisible" %}}

> **float**

### {{% prop-heading "ps3SpuFrameBufferSize" %}}

> **int**

### {{% prop-heading "textViewDistance" %}}

> **float**

### {{% prop-heading "textQueueMaxLineCount" %}}

> **int**

### {{% prop-heading "dxMaxVertexCount" %}}

> **int**

### {{% prop-heading "processJobCount" %}}

> **int**

### {{% prop-heading "drawStatsEnable" %}}

> **bool**

### {{% prop-heading "ps3SpuEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "textQueueLocationTop" %}}

> **bool**

### {{% prop-heading "dxLine2dAntialiasingEnable" %}}

> **bool**

### {{% prop-heading "dxLine3dAntialiasingEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DebugRenderSettings](/vext/ref/fb/debugrendersettings) type.

