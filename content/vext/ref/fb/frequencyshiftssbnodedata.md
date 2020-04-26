---
title: FrequencyShiftSsbNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[FrequencyShiftSsbNodeData](#constructor-0)**() |
| **[FrequencyShiftSsbNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[FrequencyShiftSsbNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[FrequencyShiftSsbNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "inValue" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "frequency" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "out" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "filter" >}} | [FrequencyShiftSsbFilter](/vext/ref/fb/frequencyshiftssbfilter) |
| {{< prop "plugin" >}} | [SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "FrequencyShiftSsbNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### FrequencyShiftSsbNodeData {#constructor-0}

> **FrequencyShiftSsbNodeData**()

Creates a new [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata) frostbite instance.

### FrequencyShiftSsbNodeData {#constructor-1}

> **FrequencyShiftSsbNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### FrequencyShiftSsbNodeData {#constructor-2}

> **FrequencyShiftSsbNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata). |

### FrequencyShiftSsbNodeData {#constructor-3}

> **FrequencyShiftSsbNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata). |

## Properties

### {{% prop-heading "inValue" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "frequency" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "out" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "filter" %}}

> **[FrequencyShiftSsbFilter](/vext/ref/fb/frequencyshiftssbfilter)**

### {{% prop-heading "plugin" %}}

> **[SoundGraphPluginRef](/vext/ref/fb/soundgraphpluginref)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [FrequencyShiftSsbNodeData](/vext/ref/fb/frequencyshiftssbnodedata) type.

