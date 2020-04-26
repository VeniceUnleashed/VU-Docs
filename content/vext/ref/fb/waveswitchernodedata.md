---
title: WaveSwitcherNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[WaveSwitcherNodeData](#constructor-0)**() |
| **[WaveSwitcherNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WaveSwitcherNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[WaveSwitcherNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "index" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "advance" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "wave" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "indexChanged" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "waves" >}} | [SoundWaveAsset](/vext/ref/fb/soundwaveasset)[] |
| {{< prop "defaultIndex" >}} | float |
| {{< prop "isRandom" >}} | bool |
| {{< prop "randomStartIndex" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WaveSwitcherNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WaveSwitcherNodeData {#constructor-0}

> **WaveSwitcherNodeData**()

Creates a new [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata) frostbite instance.

### WaveSwitcherNodeData {#constructor-1}

> **WaveSwitcherNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WaveSwitcherNodeData {#constructor-2}

> **WaveSwitcherNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata). |

### WaveSwitcherNodeData {#constructor-3}

> **WaveSwitcherNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata). |

## Properties

### {{% prop-heading "index" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "advance" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "wave" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "indexChanged" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "waves" %}}

> **[SoundWaveAsset](/vext/ref/fb/soundwaveasset)**[]

### {{% prop-heading "defaultIndex" %}}

> **float**

### {{% prop-heading "isRandom" %}}

> **bool**

### {{% prop-heading "randomStartIndex" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WaveSwitcherNodeData](/vext/ref/fb/waveswitchernodedata) type.

