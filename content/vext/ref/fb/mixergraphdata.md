---
title: MixerGraphData
---

Inherits from [AudioGraphData](/vext/ref/fb/audiographdata)

## Summary

### Constructors

|  |
| --- |
| **[MixerGraphData](#constructor-0)**() |
| **[MixerGraphData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerGraphData](#constructor-2)**(other: [AudioGraphData](/vext/ref/fb/audiographdata)) |
| **[MixerGraphData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inputs" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter)[] |
| {{< prop "accumulateModes" >}} | [MixerValueAccumulateMode](/vext/ref/fb/mixervalueaccumulatemode)[] |
| {{< prop "outputs" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerGraphData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerGraphData {#constructor-0}

> **MixerGraphData**()

Creates a new [MixerGraphData](/vext/ref/fb/mixergraphdata) frostbite instance.

### MixerGraphData {#constructor-1}

> **MixerGraphData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerGraphData](/vext/ref/fb/mixergraphdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerGraphData {#constructor-2}

> **MixerGraphData**(other: [AudioGraphData](/vext/ref/fb/audiographdata))

Casts an instance of type [AudioGraphData](/vext/ref/fb/audiographdata) to [MixerGraphData](/vext/ref/fb/mixergraphdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphData](/vext/ref/fb/audiographdata) | The instance to cast to [MixerGraphData](/vext/ref/fb/mixergraphdata). |

### MixerGraphData {#constructor-3}

> **MixerGraphData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerGraphData](/vext/ref/fb/mixergraphdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerGraphData](/vext/ref/fb/mixergraphdata). |

## Properties

### {{% prop-heading "inputs" %}}

> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)**[]

### {{% prop-heading "accumulateModes" %}}

> **[MixerValueAccumulateMode](/vext/ref/fb/mixervalueaccumulatemode)**[]

### {{% prop-heading "outputs" %}}

> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerGraphData](/vext/ref/fb/mixergraphdata) type.

