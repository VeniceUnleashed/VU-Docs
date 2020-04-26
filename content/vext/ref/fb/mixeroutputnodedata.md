---
title: MixerOutputNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[MixerOutputNodeData](#constructor-0)**() |
| **[MixerOutputNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MixerOutputNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MixerOutputNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entries" >}} | [MixerOutputEntry](/vext/ref/fb/mixeroutputentry)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixerOutputNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixerOutputNodeData {#constructor-0}

> **MixerOutputNodeData**()

Creates a new [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata) frostbite instance.

### MixerOutputNodeData {#constructor-1}

> **MixerOutputNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MixerOutputNodeData {#constructor-2}

> **MixerOutputNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata). |

### MixerOutputNodeData {#constructor-3}

> **MixerOutputNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata). |

## Properties

### {{% prop-heading "entries" %}}

> **[MixerOutputEntry](/vext/ref/fb/mixeroutputentry)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixerOutputNodeData](/vext/ref/fb/mixeroutputnodedata) type.

