---
title: CameraShakeNodeData
---

Inherits from [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)

## Summary

### Constructors

|  |
| --- |
| **[CameraShakeNodeData](#constructor-0)**() |
| **[CameraShakeNodeData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[CameraShakeNodeData](#constructor-2)**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata)) |
| **[CameraShakeNodeData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pitch" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "yaw" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |
| {{< prop "roll" >}} | [AudioGraphNodePort](/vext/ref/fb/audiographnodeport) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CameraShakeNodeData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CameraShakeNodeData {#constructor-0}

> **CameraShakeNodeData**()

Creates a new [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata) frostbite instance.

### CameraShakeNodeData {#constructor-1}

> **CameraShakeNodeData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### CameraShakeNodeData {#constructor-2}

> **CameraShakeNodeData**(other: [AudioGraphNodeData](/vext/ref/fb/audiographnodedata))

Casts an instance of type [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) to [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphNodeData](/vext/ref/fb/audiographnodedata) | The instance to cast to [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata). |

### CameraShakeNodeData {#constructor-3}

> **CameraShakeNodeData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata). |

## Properties

### {{% prop-heading "pitch" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "yaw" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

### {{% prop-heading "roll" %}}

> **[AudioGraphNodePort](/vext/ref/fb/audiographnodeport)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CameraShakeNodeData](/vext/ref/fb/camerashakenodedata) type.

