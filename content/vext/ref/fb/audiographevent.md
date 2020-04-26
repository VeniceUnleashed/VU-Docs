---
title: AudioGraphEvent
---

Inherits from [AudioGraphParameter](/vext/ref/fb/audiographparameter)

## Summary

### Constructors

|  |
| --- |
| **[AudioGraphEvent](#constructor-0)**() |
| **[AudioGraphEvent](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[AudioGraphEvent](#constructor-2)**(other: [AudioGraphParameter](/vext/ref/fb/audiographparameter)) |
| **[AudioGraphEvent](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AudioGraphEvent" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AudioGraphEvent {#constructor-0}

> **AudioGraphEvent**()

Creates a new [AudioGraphEvent](/vext/ref/fb/audiographevent) frostbite instance.

### AudioGraphEvent {#constructor-1}

> **AudioGraphEvent**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AudioGraphEvent](/vext/ref/fb/audiographevent) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### AudioGraphEvent {#constructor-2}

> **AudioGraphEvent**(other: [AudioGraphParameter](/vext/ref/fb/audiographparameter))

Casts an instance of type [AudioGraphParameter](/vext/ref/fb/audiographparameter) to [AudioGraphEvent](/vext/ref/fb/audiographevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [AudioGraphParameter](/vext/ref/fb/audiographparameter) | The instance to cast to [AudioGraphEvent](/vext/ref/fb/audiographevent). |

### AudioGraphEvent {#constructor-3}

> **AudioGraphEvent**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [AudioGraphEvent](/vext/ref/fb/audiographevent). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [AudioGraphEvent](/vext/ref/fb/audiographevent). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AudioGraphEvent](/vext/ref/fb/audiographevent) type.

