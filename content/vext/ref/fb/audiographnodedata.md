---
title: AudioGraphNodeData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[AudioGraphNodeData](#constructor-0)**() |
| **[AudioGraphNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AudioGraphNodeData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioGraphNodeData {#constructor-0}

> **AudioGraphNodeData**()

Creates a new [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) frostbite instance.

### AudioGraphNodeData {#constructor-1}

> **AudioGraphNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AudioGraphNodeData {#constructor-2}

> **AudioGraphNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AudioGraphNodeData](/vext/ref/fb/audiographnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AudioGraphNodeData](/vext/ref/fb/audiographnodedata). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) type.

