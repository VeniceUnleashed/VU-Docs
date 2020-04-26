---
title: VoiceOverValue
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverValue](#constructor-0)**() |
| **[VoiceOverValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverValue](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "valueType" >}} | [VoiceOverValueType](/vext/ref/fb/voiceovervaluetype) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverValue {#constructor-0}

> **VoiceOverValue**()

Creates a new [VoiceOverValue](/vext/ref/fb/voiceovervalue) frostbite instance.

### VoiceOverValue {#constructor-1}

> **VoiceOverValue**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverValue](/vext/ref/fb/voiceovervalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverValue {#constructor-2}

> **VoiceOverValue**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverValue](/vext/ref/fb/voiceovervalue). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverValue](/vext/ref/fb/voiceovervalue). |

## Properties

### {{% prop-heading "valueType" %}}

> **[VoiceOverValueType](/vext/ref/fb/voiceovervaluetype)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverValue](/vext/ref/fb/voiceovervalue) type.

