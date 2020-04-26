---
title: MixerInputEntry
---

Inherits from [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)

## Summary

### Constructors

|  |
| --- |
| **[MixerInputEntry](#constructor-0)**() |
| **[MixerInputEntry](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerInputEntry](#constructor-2)**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup)) |
| **[MixerInputEntry](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "source" >}} | [AudioGraphParameter](/vext/ref/fb/audiographparameter) \| nil |
| {{< prop "accumulateMode" >}} | [MixerValueAccumulateMode](/vext/ref/fb/mixervalueaccumulatemode) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerInputEntry" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerInputEntry {#constructor-0}

> **MixerInputEntry**()

Creates a new [MixerInputEntry](/vext/ref/fb/mixerinputentry) frostbite instance.

### MixerInputEntry {#constructor-1}

> **MixerInputEntry**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerInputEntry](/vext/ref/fb/mixerinputentry) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerInputEntry {#constructor-2}

> **MixerInputEntry**(other: [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup))

Casts an instance of type [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) to [MixerInputEntry](/vext/ref/fb/mixerinputentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodePortGroup](/vext/ref/fb/audiographnodeportgroup) | The instance to cast to [MixerInputEntry](/vext/ref/fb/mixerinputentry). |

### MixerInputEntry {#constructor-3}

> **MixerInputEntry**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerInputEntry](/vext/ref/fb/mixerinputentry). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerInputEntry](/vext/ref/fb/mixerinputentry). |

## Properties

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "source" %}}

> **[AudioGraphParameter](/vext/ref/fb/audiographparameter)** \| **nil**

### {{% prop-heading "accumulateMode" %}}

> **[MixerValueAccumulateMode](/vext/ref/fb/mixervalueaccumulatemode)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerInputEntry](/vext/ref/fb/mixerinputentry) type.

