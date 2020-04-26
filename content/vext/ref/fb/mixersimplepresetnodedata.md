---
title: MixerSimplePresetNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[MixerSimplePresetNodeData](#constructor-0)**() |
| **[MixerSimplePresetNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerSimplePresetNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerSimplePresetNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "index" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "presets" >}} | [MixerPreset](/vext/ref/fb/mixerpreset)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerSimplePresetNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerSimplePresetNodeData {#constructor-0}

> **MixerSimplePresetNodeData**()

Creates a new [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata) frostbite instance.

### MixerSimplePresetNodeData {#constructor-1}

> **MixerSimplePresetNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerSimplePresetNodeData {#constructor-2}

> **MixerSimplePresetNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata). |

### MixerSimplePresetNodeData {#constructor-3}

> **MixerSimplePresetNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata). |

## Properties

### {{% prop-heading "index" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "presets" %}}

> **[MixerPreset](/vext/ref/fb/mixerpreset)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerSimplePresetNodeData](/vext/ref/fb/mixersimplepresetnodedata) type.

