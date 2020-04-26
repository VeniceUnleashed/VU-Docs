---
title: Crossfader2NodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[Crossfader2NodeData](#constructor-0)**() |
| **[Crossfader2NodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[Crossfader2NodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[Crossfader2NodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "ctrl" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "ctrlOut1" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "ctrlOut2" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "Crossfader2NodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### Crossfader2NodeData {#constructor-0}

> **Crossfader2NodeData**()

Creates a new [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata) frostbite instance.

### Crossfader2NodeData {#constructor-1}

> **Crossfader2NodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### Crossfader2NodeData {#constructor-2}

> **Crossfader2NodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata). |

### Crossfader2NodeData {#constructor-3}

> **Crossfader2NodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata). |

## Properties

### {{% prop-heading "ctrl" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "ctrlOut1" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "ctrlOut2" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [Crossfader2NodeData](/vext/ref/fb/crossfader2nodedata) type.

