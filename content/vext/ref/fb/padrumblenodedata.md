---
title: PadRumbleNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[PadRumbleNodeData](#constructor-0)**() |
| **[PadRumbleNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PadRumbleNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[PadRumbleNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rumbleHigh" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "rumbleLow" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PadRumbleNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PadRumbleNodeData {#constructor-0}

> **PadRumbleNodeData**()

Creates a new [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata) frostbite instance.

### PadRumbleNodeData {#constructor-1}

> **PadRumbleNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PadRumbleNodeData {#constructor-2}

> **PadRumbleNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata). |

### PadRumbleNodeData {#constructor-3}

> **PadRumbleNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata). |

## Properties

### {{% prop-heading "rumbleHigh" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "rumbleLow" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PadRumbleNodeData](/vext/ref/fb/padrumblenodedata) type.

