---
title: MinMaxNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[MinMaxNodeData](#constructor-0)**() |
| **[MinMaxNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MinMaxNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[MinMaxNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "x" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "y" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "max" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "min" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MinMaxNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MinMaxNodeData {#constructor-0}

> **MinMaxNodeData**()

Creates a new [MinMaxNodeData](/vext/ref/fb/minmaxnodedata) frostbite instance.

### MinMaxNodeData {#constructor-1}

> **MinMaxNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MinMaxNodeData](/vext/ref/fb/minmaxnodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MinMaxNodeData {#constructor-2}

> **MinMaxNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [MinMaxNodeData](/vext/ref/fb/minmaxnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [MinMaxNodeData](/vext/ref/fb/minmaxnodedata). |

### MinMaxNodeData {#constructor-3}

> **MinMaxNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MinMaxNodeData](/vext/ref/fb/minmaxnodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MinMaxNodeData](/vext/ref/fb/minmaxnodedata). |

## Properties

### {{% prop-heading "x" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "y" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "max" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "min" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MinMaxNodeData](/vext/ref/fb/minmaxnodedata) type.

