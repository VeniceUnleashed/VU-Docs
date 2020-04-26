---
title: SoundBusData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[SoundBusData](#constructor-0)**() |
| **[SoundBusData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundBusData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SoundBusData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "busName" >}} | string |
| {{< prop "submixPlugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |
| {{< prop "channelCount" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundBusData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundBusData {#constructor-0}

> **SoundBusData**()

Creates a new [SoundBusData](/vext/ref/fb/soundbusdata) frostbite instance.

### SoundBusData {#constructor-1}

> **SoundBusData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundBusData](/vext/ref/fb/soundbusdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundBusData {#constructor-2}

> **SoundBusData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SoundBusData](/vext/ref/fb/soundbusdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SoundBusData](/vext/ref/fb/soundbusdata). |

### SoundBusData {#constructor-3}

> **SoundBusData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundBusData](/vext/ref/fb/soundbusdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundBusData](/vext/ref/fb/soundbusdata). |

## Properties

### {{% prop-heading "busName" %}}

> **string**

### {{% prop-heading "submixPlugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

### {{% prop-heading "channelCount" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundBusData](/vext/ref/fb/soundbusdata) type.

