---
title: AudioGraphData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AudioGraphData](#constructor-0)**() |
| **[AudioGraphData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AudioGraphData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nodes" >}} | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)[] |
| {{< prop "publicParameters" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter)[] |
| {{< prop "publicEvents" >}} | [AudioGraphEvent](/vext/ref/fb/audiographevent)[] |
| {{< prop "publicAssetParameters" >}} | [AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter)[] |
| {{< prop "publicValueCount" >}} | int |
| {{< prop "valueCount" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioGraphData {#constructor-0}

> **AudioGraphData**()

Creates a new [AudioGraphData](/vext/ref/fb/audiographdata) frostbite instance.

### AudioGraphData {#constructor-1}

> **AudioGraphData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioGraphData](/vext/ref/fb/audiographdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AudioGraphData {#constructor-2}

> **AudioGraphData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AudioGraphData](/vext/ref/fb/audiographdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AudioGraphData](/vext/ref/fb/audiographdata). |

## Properties

### {{% prop-heading "nodes" %}}

> **[AudioGraphNodeData](/vext/ref/fb/audiographnodedata)**[]

### {{% prop-heading "publicParameters" %}}

> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)**[]

### {{% prop-heading "publicEvents" %}}

> **[AudioGraphEvent](/vext/ref/fb/audiographevent)**[]

### {{% prop-heading "publicAssetParameters" %}}

> **[AudioGraphAssetParameter](/vext/ref/fb/audiographassetparameter)**[]

### {{% prop-heading "publicValueCount" %}}

> **int**

### {{% prop-heading "valueCount" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioGraphData](/vext/ref/fb/audiographdata) type.

