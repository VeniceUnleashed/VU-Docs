---
title: VoiceOverNamedValue
---

Inherits from [VoiceOverValue](/vext/ref/fb/voiceovervalue)

## Summary

### Constructors

|  |
| --- |
| **[VoiceOverNamedValue](#constructor-0)**() |
| **[VoiceOverNamedValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VoiceOverNamedValue](#constructor-2)**(other: [VoiceOverValue](/vext/ref/fb/voiceovervalue)) |
| **[VoiceOverNamedValue](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VoiceOverNamedValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VoiceOverNamedValue {#constructor-0}

> **VoiceOverNamedValue**()

Creates a new [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) frostbite instance.

### VoiceOverNamedValue {#constructor-1}

> **VoiceOverNamedValue**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VoiceOverNamedValue {#constructor-2}

> **VoiceOverNamedValue**(other: [VoiceOverValue](/vext/ref/fb/voiceovervalue))

Casts an instance of type [VoiceOverValue](/vext/ref/fb/voiceovervalue) to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [VoiceOverValue](/vext/ref/fb/voiceovervalue) | The instance to cast to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). |

### VoiceOverNamedValue {#constructor-3}

> **VoiceOverNamedValue**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue). |

## Properties

### {{% prop-heading "name" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VoiceOverNamedValue](/vext/ref/fb/voiceovernamedvalue) type.

