---
title: SequenceGeneratorNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[SequenceGeneratorNodeData](#constructor-0)**() |
| **[SequenceGeneratorNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SequenceGeneratorNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[SequenceGeneratorNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "trigger" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "reset" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "min" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "max" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "step" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "value" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SequenceGeneratorNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SequenceGeneratorNodeData {#constructor-0}

> **SequenceGeneratorNodeData**()

Creates a new [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata) frostbite instance.

### SequenceGeneratorNodeData {#constructor-1}

> **SequenceGeneratorNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SequenceGeneratorNodeData {#constructor-2}

> **SequenceGeneratorNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata). |

### SequenceGeneratorNodeData {#constructor-3}

> **SequenceGeneratorNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata). |

## Properties

### {{% prop-heading "trigger" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "reset" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "min" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "max" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "step" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "value" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SequenceGeneratorNodeData](/vext/ref/fb/sequencegeneratornodedata) type.

